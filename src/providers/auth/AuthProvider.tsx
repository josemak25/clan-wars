import React, { Fragment, PropsWithChildren, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getUniqueId } from "../../helpers";
import { supabase } from "../../config/supabase";
import { USER_FIRST_LAUNCH } from "../../constants";
import { signUpGuest, signInGuest } from "../../config/network";

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // check if guest auth exists
  const checkIfGuestExists = async () => {
    const uniqueId = await getUniqueId();
    const isFirstTimerLaunch = await AsyncStorage.getItem(USER_FIRST_LAUNCH);

    let { data: user_session, error: session_error } =
      await supabase.auth.getSession();

    const payload = {
      password: uniqueId,
      email_address: `${uniqueId}@guest.com`,
    };

    if (
      user_session.session === null &&
      session_error === null &&
      !isFirstTimerLaunch
    ) {
      // signup guest if auth doesn't exit
      const signup_data = await signUpGuest({
        ...payload,
        meta: { user_unique_id: uniqueId },
      });

      await AsyncStorage.setItem(USER_FIRST_LAUNCH, USER_FIRST_LAUNCH);
      user_session = signup_data.data;
      session_error = signup_data.error;
    }

    if (session_error) {
      // login guest if auth exits and there was and error getting user session
      const signin_data = await signInGuest(payload);
      user_session = signin_data.data;
      session_error = signin_data.error;
    }
  };

  useEffect(() => {
    // signOutGuest();
    checkIfGuestExists();
  }, []);

  return <Fragment>{children}</Fragment>;
};
