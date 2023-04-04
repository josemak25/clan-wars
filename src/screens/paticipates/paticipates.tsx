import React from "react";

import { APP_NAME } from "../../constants";
import { RootTabScreenProps } from "../../../types/navigation";

import { Goal } from "../../components/goal";
import { Container, Title } from "./paticipates.styles";

export const PaticipatesScreen: React.FC<
  RootTabScreenProps<"PaticipatesScreen">
> = ({ navigation }) => {
  return (
    <Container>
      <Title>{APP_NAME}</Title>

      <Goal
        id={"id"}
        title="Goal"
        room_size={0}
        team_size={0}
        participates={[{}]}
      />
    </Container>
  );
};
