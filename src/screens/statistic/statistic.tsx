import React, { useMemo } from "react";
import dayjs from "dayjs";
import { shallowEqual } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components/native";

import { useSelector } from "../../hooks";
// import { Icon } from "../../components/icon/user";
import { RootState } from "../../providers/store/store";
import { RootTabScreenProps } from "../../../types/navigation";

import {
  Tags,
  Team,
  Info,
  Title,
  Timer,
  Scores,
  Spacer,
  Profile,
  ClanName,
  KillCount,
  ClanImage,
  ScrollView,
  WinnerBadge,
  PlayerDetail,
  WinnerWrapper,
  TimerContainer,
  RightClanImage,
  ClanImageWrapper,
  ButtonContainer,
  WinnerContainer,
  ClanImageContainer,
  ClanScoresContainer,
} from "./statistic.styles";

const clans = [
  {
    id: "1",
    kill: 456298,
    clanName: "Mistake",
    url: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
  },
  {
    id: "2",
    kill: 10023,
    clanName: "Drift",
    url: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
  },
  {
    id: "3",
    kill: 290,
    clanName: "Goldporp",
    url: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
  },
];

export const StatisticsScreen: React.FC<
  RootTabScreenProps<"StatisticsScreen">
> = (props) => {
  const { palette } = useTheme();

  // const { clan_logo, clan_leader_id, clan_name, team } = props;

  // const [clan_leader, ...members] = team.sort((a, b) =>
  //   a.player_id > clan_leader_id ? 1 : b.player_id > clan_leader_id ? -1 : 0
  // );

  // const avaterMap = useMemo(
  //   () =>
  //     team.reduce<AvatarMap>((acc, user) => {
  //       acc[user.player_id] = getImagekitUrl(user.avatar, {
  //         directory: "clan_logo",
  //       });
  //       return acc;
  //     }, {}),
  //   [team]
  // );

  // const clanLogoImage = useMemo(
  //   () => getImagekitUrl(clan_logo, { directory: "clan_logo" }),
  //   [clan_logo]
  // );

  const { selectedTournament } = useSelector(
    ({ tournament }: RootState) => tournament,
    shallowEqual
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WinnerContainer>
        <WinnerWrapper>
          <ClanImageContainer>
            <WinnerBadge>1</WinnerBadge>
            <WinnerBadge size={45}>👑</WinnerBadge>
            <ClanImageWrapper>
              <ClanImage
                source={{
                  uri: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
                }}
              />
            </ClanImageWrapper>
            <ClanName>striker</ClanName>
            <Scores>1670082</Scores>
          </ClanImageContainer>
        </WinnerWrapper>
      </WinnerContainer>

      {/* <ClanScoresContainer>
        {clans.map((clan, id) => (
          <Team key={id}>
            <Profile>
              <ClanLogo source={{ uri: clan.url }} />

              <PlayerDetail>
                <ClanName>{clan.clanName}</ClanName>
              </PlayerDetail>
            </Profile>
            <KillCount>{clan.kill}</KillCount>
          </Team>
        ))}
      </ClanScoresContainer> */}

      <Spacer size={40} />
      <Info>match info</Info>
      <Spacer size={20} />

      <TimerContainer>
        <Timer>
          Starts at •{" "}
          {dayjs(selectedTournament?.start_date).format(
            "ddd DD MMM YYYY hh : mm A"
          )}
        </Timer>

        <Timer>
          <Timer>
            Ends at •{" "}
            {dayjs(selectedTournament?.updated_at).format(
              "ddd DD MMM YYYY hh : mm A"
            )}
          </Timer>
        </Timer>
      </TimerContainer>

      <Title wrap numberOfLines={1}>
        {selectedTournament?.title}
      </Title>

      {selectedTournament?.tags?.length ? (
        <ButtonContainer>
          {selectedTournament.tags.map((tag, index) => (
            <Tags key={`${tag}_${index}`}>{tag}</Tags>
          ))}
        </ButtonContainer>
      ) : null}
    </ScrollView>
  );
};
