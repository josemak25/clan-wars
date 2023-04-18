import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SUPER_BASE_URL, SUPER_BASE_KEY } from "@env";

export const supabase = createClient(SUPER_BASE_URL, SUPER_BASE_KEY, {
  auth: {
    persistSession: true,
    storage: AsyncStorage,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
