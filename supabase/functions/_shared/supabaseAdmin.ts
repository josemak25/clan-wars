import { createClient } from "@supabase/supabase-js";

// Create a Supabase client with the Auth context of the logged in user.
export const supabaseAdmin = createClient(
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
