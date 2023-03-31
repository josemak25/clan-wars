import React from "react";

import { APP_NAME } from "../../constants";
import { RootStackScreenProps } from "../../../types/navigation";

import { Container, Title } from "./onboarding.styles";
import { Card } from "../../components/card";

export const OnboardingScreen: React.FC<
  RootStackScreenProps<"OnboardingScreen">
> = () => {
  return (
    <Container>
      <Title>{APP_NAME}</Title>
      <Card
        id={""}
        cover={""}
        image={0}
        title={""}
        amount={0}
        discount={0}
        old_amount={0}
        onPress={undefined}
      />
    </Container>
  );
};
