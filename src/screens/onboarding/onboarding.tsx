import React from "react";
import dayjs from "dayjs";

import { APP_NAME } from "../../constants";
import { Card } from "../../components/card";
import { RootStackScreenProps } from "../../../types/navigation";

import { Container, Title } from "./onboarding.styles";

export const OnboardingScreen: React.FC<
  RootStackScreenProps<"OnboardingScreen">
> = ({ navigation }) => {
  const onEventPress = () => {};
  const joinTournament = () => navigation.navigate("SignUpScreen");

  return (
    <Container>
      <Title>{APP_NAME}</Title>

      <Card
        team_size={4}
        room_size={40}
        price_pool={500000}
        participates={[{}]}
        created_at={new Date()}
        updated_at={new Date()}
        winner_clan_id="hey"
        onEventPress={onEventPress}
        joinTournament={joinTournament}
        start_date={dayjs().add(1, "days").toDate()}
        title="CODM: Private Alcatraz Tournament"
        tags={["COD Warzone", "PC", "Invitational"]}
        // tournament_icon="https://www.freeiconspng.com/uploads/league-of-legends-icon-6.png"
        cover_image="https://rare-gallery.com/mocahbig/1377861-codm-game-characters-call-of-duty-mobile-4k-pc.jpg"
        host_clan={{
          clan_name: "Anonymous clan tournament",
          clan_logo:
            "https://leadership.ng/wp-content/uploads/2023/03/davido.png",
        }}
      />
    </Container>
  );
};
