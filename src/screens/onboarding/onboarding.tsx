import React from "react";

import { APP_NAME } from "../../constants";
import { RootStackScreenProps } from "../../../types/navigation";

import { Container, Title } from "./onboarding.styles";

export const OnboardingScreen: React.FC<
  RootStackScreenProps<"OnboardingScreen">
> = () => {
  return (
    <Container>
      <Title>{APP_NAME}</Title>
    </Container>
  );
};
