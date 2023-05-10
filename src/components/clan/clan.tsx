import React from "react";
import { View } from "react-native";

import { Icon } from "../icon";
import { Participant } from "../participant";
import { ITournamentClan } from "../../providers/store/reducers/participants/interfaces";

import {
  Title,
  Profile,
  Contents,
  ClanLogo,
  KillCount,
  Container,
  LeaderName,
  PlayerRank,
  PlayerDetail,
  LeaderContainer,
} from "./clan.styles";

export const Clan: React.FC<ITournamentClan> = (props) => {
  const { clan_logo, clan_name, team } = props;

  const clan_leader = team.find((e) => e.is_team_leader);

  const members = team
    .filter((e) => !e.is_team_leader)
    .sort((a, b) => Number(b.kills) - Number(a.kills));

  return (
    <Container>
      <Title>{clan_name}</Title>
      <Contents>
        <LeaderContainer>
          <Profile>
            <View>
              <Icon size={60} name="avatar" avatarId={clan_leader?.avatar} />
              <ClanLogo
                size={32}
                uri={clan_logo}
                preview={{ uri: clan_logo }}
              />
            </View>
            <PlayerDetail margin={8}>
              <PlayerRank>LEADER</PlayerRank>
              <LeaderName>{clan_leader?.player_ign}</LeaderName>
            </PlayerDetail>
          </Profile>
          <KillCount>{clan_leader?.kills}</KillCount>
        </LeaderContainer>

        {members.map(({ id, player_ign, avatar, kills }) => (
          <Participant
            key={id}
            avatar={avatar}
            name={player_ign}
            kill_count={kills}
            image_preview={avatar}
          />
        ))}
      </Contents>
    </Container>
  );
};
