import React from "react";

import { APP_NAME } from "../../constants";
import { RootTabScreenProps } from "../../../types/navigation";

import { Container, Title } from "./statistic.styles";

export const StatisticsScreen: React.FC<
  RootTabScreenProps<"StatisticsScreen">
> = ({ navigation }) => {
  return (
    <Container>
      <Title>{APP_NAME}</Title>
    </Container>
  );
};
