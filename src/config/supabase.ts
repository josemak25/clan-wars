import { createClient } from "@supabase/supabase-js";

import { SUPER_BASE_URL, SUPER_BASE_KEY } from "@env";

export const supabase = createClient(SUPER_BASE_URL, SUPER_BASE_KEY);
