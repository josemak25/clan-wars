import React from "react";
import { View } from "react-native";

import { Participant } from "../participant";
import { ITournamentClan } from "../../providers/store/reducers/participants/interfaces";

import {
  Title,
  Avatar,
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
  const { clan_logo, clan_leader_id, clan_name, team } = props;

  const [clan_leader, ...members] = team.sort((a, b) =>
    a.player_id > clan_leader_id ? 1 : b.player_id > clan_leader_id ? -1 : 0
  );

  return (
    <Container>
      <Title>{clan_name}</Title>
      <Contents>
        <LeaderContainer>
          <Profile>
            <View>
              <Avatar size={60} uri={clan_logo} preview={{ uri: clan_logo }} />
              <ClanLogo
                size={32}
                uri={clan_logo}
                preview={{ uri: clan_logo }}
              />
            </View>
            <PlayerDetail margin={8}>
              <PlayerRank>LEADER</PlayerRank>
              <LeaderName>{clan_leader.player_ign}</LeaderName>
            </PlayerDetail>
          </Profile>
          <KillCount>{clan_leader.total_kills}</KillCount>
        </LeaderContainer>

        {members.map(({ id, player_ign, avatar, total_kills }) => (
          <Participant
            key={id}
            name={player_ign}
            image_uri={avatar}
            kill_count={total_kills}
            image_preview={avatar}
          />
        ))}
      </Contents>
    </Container>
  );
};
