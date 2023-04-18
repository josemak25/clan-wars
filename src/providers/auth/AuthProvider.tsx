import React, { Fragment, PropsWithChildren, useEffect, useState } from "react";
import { AuthResponse } from "@supabase/supabase-js";

import { getUniqueId } from "../../helpers";
import { supabase } from "../../config/supabase";
import { signUpGuest, signInGuest } from "../../config/network";

import { Container, ActivityIndicator } from "./styles";

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [session, setSession] = useState<AuthResponse["data"] | null>(null);

  // listen to auth changes

  // check if guest auth exists
  const checkIfGuestExists = async () => {
    setLoading(true);

    const uniqueId = await getUniqueId();
    let { data: user_session, error: session_error } =
      await supabase.auth.getSession();

    if (user_session.session !== null && session_error !== null) {
      setSession(user_session as AuthResponse["data"]);
      return setLoading(false);
    }

    const payload = {
      password: uniqueId,
      email_address: `${uniqueId}@guest.com`,
    };

    // signup guest if auth doesn't exit
    const signup_data = await signUpGuest({
      ...payload,
      meta: { user_unique_id: uniqueId },
    });

    user_session = signup_data.data;
    session_error = signup_data.error;

    if (
      session_error?.status === 400 &&
      session_error?.message.includes("User already registered")
    ) {
      // login guest if auth exits
      const signin_data = await signInGuest(payload);
      user_session = signin_data.data;
      session_error = signin_data.error;
    }

    setLoading(false);
    setSession(user_session as AuthResponse["data"]);
  };

  useEffect(() => {
    checkIfGuestExists();
  }, []);

  return isLoading ? (
    <Container>
      <ActivityIndicator />
    </Container>
  ) : (
    <Fragment>{children}</Fragment>
  );
};
