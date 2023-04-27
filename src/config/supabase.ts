import { Platform } from "react-native";
import { setupURLPolyfill } from "react-native-url-polyfill";
import AsyncStorage from "@react-native-async-storage/async-storage";

// call this before supabase import
Platform.OS !== "web" && setupURLPolyfill();

import { createClient } from "@supabase/supabase-js";
import { SUPER_BASE_URL, SUPER_BASE_KEY } from "@env";

export const supabase = createClient(SUPER_BASE_URL, SUPER_BASE_KEY, {
  auth: {
    persistSession: true,
    storage: AsyncStorage,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
