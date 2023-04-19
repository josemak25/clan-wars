import { AuthResponse, PostgrestSingleResponse } from "@supabase/supabase-js";

import { supabase } from "./supabase";
import { ISignupGuest, ISigninGuest } from "../providers/auth/interfaces";
import { ITournament } from "../providers/store/reducers/tournament/interfaces";

/**
 *
 * @description signup a guest user
 * @function signUpGuest
 * @property ISignupGuest - payload
 * @returns Promise<AuthResponse>
 */
export const signUpGuest = async (
  payload: ISignupGuest
): Promise<AuthResponse> => {
  return supabase.auth.signUp({
    password: payload.password,
    email: payload.email_address,
    options: { data: payload.meta },
  });
};

/**
 *
 * @description signin a guest user
 * @function signInGuest
 * @property ISigninGuest - payload
 * @returns Promise<AuthResponse>
 */
export const signInGuest = async (
  payload: ISigninGuest
): Promise<AuthResponse> => {
  return supabase.auth.signInWithPassword({
    password: payload.password,
    email: payload.email_address,
  });
};

/**
 *
 * @description fetch all tournaments
 * @function fetchTournaments
 * @returns  PostgrestSingleResponse<ITournament[]>
 */
export const fetchTournaments = async (): Promise<
  PostgrestSingleResponse<ITournament[]>
> => {
  return supabase.from<"tournament", ITournament>("tournament").select(`
        *,
        tournament_host (
          *
        )
    `);
};
