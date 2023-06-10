// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

import { corsHeaders } from "../_shared/cors.ts";
import { verifyPayment } from "./verify_payment.ts";
import { supabaseAdmin } from "../_shared/supabaseAdmin.ts";
import { checkPaymentReceipt } from "./check_payment_receipt.ts";
import {
  ITournament,
  ITournamentClan,
  ITournamentPaymentReceipt,
  ITournamentTeam,
} from "../../../types/index.d.ts";

serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // grab user payload
    const { tournament_id, payment_reference, team, ...rest } = await req
      .json() as ITournamentClan & { payment_reference: string };

    // check if tournament is valid and exists
    const { data: tournament, error: tournament_error } = await supabaseAdmin
      .from<"tournaments", ITournament>("tournaments")
      .select("participates")
      .eq("id", tournament_id);

    // throw error if tournament does not exit
    if (tournament_error) throw tournament_error;

    // check if user has already paid or reusing an existing payment_receipts for a tournament
    const { error: payment_receipts_error } = await checkPaymentReceipt(
      tournament_id,
      payment_reference,
    );

    // throw error if payment reference error occurred
    if (payment_receipts_error) {
      throw payment_receipts_error;
    }

    // verify the payment reference from paystack [check if user has made a payment for the tournament]
    const { error: payment_error } = await verifyPayment(
      payment_reference,
      rest.email_address,
    );

    // throw error if payment error occurred
    if (payment_error) {
      throw payment_error;
    }

    // register participant to the tournament
    const { data: participant, error: participant_error } = await supabaseAdmin
      .from<"tournament_participants", ITournamentClan>(
        "tournament_participants",
      )
      .insert([{ tournament_id, ...rest } as never])
      .select("id");

    // throw error if participant error occurred
    if (participant_error) {
      throw participant_error;
    }

    // attach the newly created participant to each player on the tournament team
    const tournament_team = team.map((player) => ({
      ...player,
      participant_id: participant![0].id,
    }));

    // register all tournament players for the tournament
    const { error: tournament_players_error } = await supabaseAdmin
      .from<"tournament_players", ITournamentTeam>("tournament_players")
      .insert(tournament_team as never);

    // throw error if tournament players error occurred
    if (tournament_players_error) {
      throw tournament_players_error;
    }

    // create a new payment registry
    const { error: tournament_payment } = await supabaseAdmin
      .from<"tournament_payment_receipts", ITournamentPaymentReceipt>(
        "tournament_payment_receipts",
      )
      .insert(
        {
          tournament_id,
          payment_reference,
          tournament_participant: participant![0].id,
        } as never,
      );

    // throw error if tournament payment error occurred
    if (tournament_payment) {
      throw tournament_payment;
    }

    // increment tournament participants count
    const { error: tournaments_error } = await supabaseAdmin
      .from<"tournaments", ITournament>("tournaments")
      .update(
        { participates: Number(tournament![0].participates) + 1 } as never,
      )
      .eq("id", tournament_id);

    // throw error if tournament participants update error occurred
    if (tournaments_error) {
      throw tournaments_error;
    }

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
//   --data '{
//     "clan_name": "BK_clan",
//     "team_name": "Peaky blinders",
//     "clan_logo": "https://rpraujaegsmqqtmiphsp.supabase.co/storage/v1/object/sign/clan_logos/bk_clan-1686355595795?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjbGFuX2xvZ29zL2JrX2NsYW4tMTY4NjM1NTU5NTc5NSIsImlhdCI6MTY4NjM1NTU5OSwiZXhwIjozMzIyMjM1NTU5OX0.2K-Vd_F10idR39xI-yVWkPnSBrTYS4XPwn-gLEdL2u4",
//     "team": [
//         {
//             "player_ign": "Soft",
//             "avatar": "avatar_4",
//             "kills": 0,
//             "id": "676c2970-fdcf-4185-8917-c650cc84df82",
//             "player_id": "50c00a1a-2a30-48bd-953a-ffac9bc86c02",
//             "is_team_leader": true
//         },
//         {
//             "player_ign": "Killer",
//             "avatar": "avatar_2",
//             "kills": 0,
//             "id": "43ad7f42-906b-4cbc-89de-f88c77b3b6c5",
//             "player_id": "165beb39-8869-4aa4-ad6e-1ed391347c9f",
//             "is_team_leader": false
//         },
//         {
//             "player_ign": "Takers",
//             "avatar": "avatar_21",
//             "kills": 0,
//             "id": "46bf56c5-d4c1-404b-9b10-15683d97394c",
//             "player_id": "92009a20-bdf6-413d-ae21-1dc897666217",
//             "is_team_leader": false
//         },
//         {
//             "player_ign": "IGN",
//             "avatar": "avatar_22",
//             "kills": 0,
//             "id": "0a8151f8-a27d-4bb1-8ae3-28754348726f",
//             "player_id": "ab97b0b1-1b4f-4f4a-a69c-08b5f9c80145",
//             "is_team_leader": false
//         }
//     ],
//     "phone_number": "+2348132978120",
//     "email_address": "info@gmail.com",
//     "tournament_id": "a94a3b4c-bd75-4bf7-a0e2-d24233949adb",
//     "payment_reference": "d1849564-85c3-4492-9bda-ed8d89cf3421"
// }'
