import React,{ useMemo } from "react";
import dayjs from "dayjs";
import { shallowEqual } from "react-redux";
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'


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
  ClanLogo,
  ClanName,
  Profile,
  KillCount,
  ClanImage,
  ScrollView,
  WinnerBadge,
  PlayerDetail,
  WinnerWrapper,
  TimerContainer,
  RightClanImage,
  MiddleClanImage,
  ButtonContainer,
  WinnerContainer,
  ClanImageContainer,
  ClanScoresContainer,
  RightClanImageContainer,
  MiddleClanImageContainer,
} from "./statistic.styles";
import { useTheme } from "styled-components/native";
import { getImagekitUrl } from "../../helpers/imagekit";



const clans = [
  {
    id: '1',
    url: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
    clanName: 'Mistake',
    kill: 456298,
  },

  {
    id: '2',
    url: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
    clanName: 'Drift',
    kill: 10023,
  },

  {
    id: '3',
    url: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
    clanName: 'Goldporp',
    kill: 290,
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
    <ScrollView>
      <WinnerContainer>
      <WinnerWrapper>
        <ClanImageContainer>
          <WinnerBadge>2</WinnerBadge>
          <Ionicons
           size={20}
           name="caret-up" 
           color={palette.success}
           style={{top: -10}}
           />
          <ClanImage source={{uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg'}}/>
           <ClanName>Mistake</ClanName>
          <Scores>80082</Scores>
        </ClanImageContainer>


        < MiddleClanImageContainer>
          <WinnerBadge>1</WinnerBadge>
          <WinnerBadge>👑</WinnerBadge>
            <MiddleClanImage source={{uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg'}}/>
            <ClanName>striker</ClanName>
            <Scores>1670082</Scores>
        </MiddleClanImageContainer>

        <RightClanImageContainer>
        <WinnerBadge>3</WinnerBadge>
          <Ionicons
           size={20}
           name="caret-down" 
           color={palette.text}
           style={{top: -5}}
           />
          <RightClanImage source={{uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg'}}/>
           <ClanName>Mistake</ClanName>
          <Scores>80082</Scores>
        </RightClanImageContainer>
        </WinnerWrapper>
      </WinnerContainer>

    <ClanScoresContainer>
      {clans.map((clan ,id)=>(
          <Team key={id}>
          <Profile>
          <ClanLogo source= {{uri:clan.url}}/>

            <PlayerDetail>
              <ClanName>{clan.clanName}</ClanName>
            </PlayerDetail>
          </Profile>
          <KillCount>{clan.kill}</KillCount>
        </Team>
      ))}
  
    </ClanScoresContainer>

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
