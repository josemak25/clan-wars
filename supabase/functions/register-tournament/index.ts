// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

import { createClient } from "@supabase/supabase-js";
import { verifyPayment } from "./verify_payment.ts";
import {
  ITournament,
  ITournamentClan,
  ITournamentPaymentReceipt,
  ITournamentTeam,
} from "../../../types/index.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey",
};

serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Create a Supabase client with the Auth context of the logged in user.
    const adminClient = createClient(
      // Supabase API URL - env var exported by default.
      Deno.env.get("SUPABASE_URL") ?? "",
      // Supabase API SERVICE_ROLE KEY - env var exported by default.
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      // Create client with Auth context of an admin use
      // This way only admin can perform any action below.
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    );

    // grab user payload
    const { tournament_id, payment_reference, team, ...rest } = await req
      .json() as ITournamentClan & { payment_reference: string };

    // check if tournament is valid and exists
    const { error: tournament_error } = await adminClient
      .from<"tournaments", ITournament>("tournaments")
      .select("id")
      .eq("id", tournament_id);

    // throw error if tournament does not exit
    if (tournament_error) throw tournament_error;

    // check if user has already paid or reusing an existing payment_receipts for a tournament
    const { error: payment_receipts_error } = await adminClient
      .from<"tournament_payment_receipts", ITournamentPaymentReceipt>(
        "tournament_payment_receipts",
      )
      .select("id")
      .eq("tournament_id", tournament_id)
      .eq("payment_reference", payment_reference);

    // throw error if payment reference already exit
    if (payment_receipts_error) {
      throw payment_receipts_error;
    }

    // verify the payment reference from paystack [check if user has made a payment for the tournament]
    const payment = await verifyPayment(payment_reference);

    // throw error if payment data returned from paystack was not successful
    if (
      payment?.status !== "success" && payment?.reference !== payment_reference
    ) {
      throw new Error("Failed to register tournament, no payment made");
    }

    // register participant to the tournament
    const { data: participant } = await adminClient
      .from<"tournament_participants", ITournamentClan>(
        "tournament_participants",
      )
      .insert([rest as never])
      .select("id");

    // attach the newly created participant to each player on the tournament team
    const tournament_team = team.map((player) => ({
      ...player,
      participant_id: participant![0].id,
    }));

    // register all tournament players for the tournament
    await adminClient
      .from<"tournament_players", ITournamentTeam>("tournament_players")
      .insert(tournament_team as never);

    return new Response(JSON.stringify({ message: "successful" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/register-tournament' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
