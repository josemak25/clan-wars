import { decode } from "base64-arraybuffer";
import { ImagePickerAsset } from "expo-image-picker";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

import { supabase } from "./supabase";
import { SUPER_BASE_KEY, SUPER_BASE_URL } from "@env";
import { ITournament } from "../providers/store/reducers/tournament/interfaces";
import { ITournamentClan } from "../providers/store/reducers/participants/interfaces";

/**
 *
 * @description upload user files
 * @function uploadFile
 * @property ISigninGuest - payload
 * @returns Promise<AuthResponse>
 */
export const uploadFile = async (
  payload: ImagePickerAsset & { extension: string },
  onProgress: XMLHttpRequestEventTarget["onprogress"]
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const endpoint = `${SUPER_BASE_URL}/storage/v1/object/clan_logos/${payload.fileName!}`;

    const xhr = new XMLHttpRequest();

    xhr.open("POST", endpoint);
    xhr.setRequestHeader("x-upsert", "false");
    xhr.setRequestHeader("apikey", SUPER_BASE_KEY);
    xhr.setRequestHeader("cache-control", "max-age=3600");
    xhr.setRequestHeader("authorization", `Bearer ${SUPER_BASE_KEY}`);
    xhr.setRequestHeader("content-type", `image/${payload.extension}`);

    xhr.onreadystatechange = () => {
      // In local files, status is 0 upon success in Mozilla Firefox
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          // The request has been completed successfully
          resolve(xhr.response.Key);
        } else {
          // Oh no! There has been an error with the request!
          reject(xhr.response);
        }
      }
    };

    xhr.responseType = "json";
    xhr.upload.onprogress = onProgress;

    xhr.send(decode(payload.base64!));
  });
};

/**
 *
 * @description get clan logo public url
 * @function getLogoSignedUrl
 * @property string - url
 */
export const getLogoSignedUrl = (url: string) => {
  const expiresIn = 1000 * 60 * 60 * 24 * 365; // 1 year
  return supabase.storage.from("clan_logos").createSignedUrl(url, expiresIn);
};

/**
 *
 * @description fetch all tournaments
 * @function fetchTournaments
 * @returns PostgrestSingleResponse<ITournament[]>
 */
export const fetchTournaments = async (): Promise<
  PostgrestSingleResponse<ITournament[]>
> => {
  return supabase.from<"tournaments", ITournament>("tournaments").select(
    `
        *,
        tournament_host (
          *
        )
    `
  );
};

/**
 *
 * @description fetch all tournament participants
 * @function fetchParticipants
 */
export const fetchParticipants = async (tournament_id: string) => {
  return supabase
    .from<"tournament_participants", ITournamentClan>("tournament_participants")
    .select(
      `
        *,
        tournament_players (
          *
        )
    `
    )
    .eq("tournament_id", tournament_id);
};

/**
 *
 * @description register for the tournament a tournament participant
 * @function registerForTournament
 */
export const registerForTournament = async (
  payload: ITournamentClan & { payment_reference: string }
) => {
  const { error } = await supabase.functions.invoke("register-tournament", {
    body: { ...payload, email_address: payload.email_address.toLowerCase() },
  });

  if (error) throw error;
};
