import React, { useMemo } from "react";
import { View } from "react-native";

import { Participant } from "../participant";
import { getImagekitUrl } from "../../helpers/imagekit";
import { ITournamentClan } from "../../providers/store/reducers/tournament/interfaces";

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

type AvatarMap = Record<
  ITournamentClan["team"][number]["player_id"],
  ReturnType<typeof getImagekitUrl>
>;

export const Clan: React.FC<ITournamentClan> = (props) => {
  const { clan_logo, clan_leader_id, clan_name, team } = props;

  const [clan_leader, ...members] = team.sort((a, b) =>
    a.player_id > clan_leader_id ? 1 : b.player_id > clan_leader_id ? -1 : 0
  );

  const avaterMap = useMemo(
    () =>
      team.reduce<AvatarMap>((acc, user) => {
        acc[user.player_id] = getImagekitUrl(user.avatar, {
          directory: "clan_logo",
        });
        return acc;
      }, {}),
    [team]
  );

  const clanLogoImage = useMemo(
    () => getImagekitUrl(clan_logo, { directory: "clan_logo" }),
    [clan_logo]
  );

  return (
    <Container>
      <Title>{clan_name}</Title>
      <Contents>
        <LeaderContainer>
          <Profile>
            <View>
              <Avatar
                size={60}
                uri={avaterMap[clan_leader.player_id].url}
                preview={{ uri: avaterMap[clan_leader.player_id].preview }}
              />
              <ClanLogo
                size={32}
                uri={clanLogoImage.url}
                preview={{ uri: clanLogoImage.preview }}
              />
            </View>
            <PlayerDetail margin={8}>
              <PlayerRank>LEADER</PlayerRank>
              <LeaderName>{clan_leader.player_ign}</LeaderName>
            </PlayerDetail>
          </Profile>
          <KillCount>{clan_leader.total_kills}</KillCount>
        </LeaderContainer>

        {members.map(({ id, player_ign, player_id, total_kills }) => (
          <Participant
            key={id}
            name={player_ign}
            kill_count={total_kills}
            image_uri={avaterMap[player_id].url}
            image_preview={avaterMap[player_id].preview}
          />
        ))}
      </Contents>
    </Container>
  );
};
