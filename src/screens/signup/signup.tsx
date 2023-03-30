import React from "react";
import { SubmitHandler } from "react-hook-form";

import { APP_NAME } from "../../constants";
import { RootStackScreenProps } from "../../../types/navigation";
import { ISignupUser } from "../../providers/store/reducers/session/interfaces";

import { Title, Container } from "./signup.styles";

export const SignUpScreen: React.FC<RootStackScreenProps<"SignUpScreen">> = ({
  navigation,
}) => {
  const onSubmit: SubmitHandler<ISignupUser> = (data) => {};

  return (
    <Container>
      <Title>{APP_NAME}</Title>
    </Container>
  );
};
