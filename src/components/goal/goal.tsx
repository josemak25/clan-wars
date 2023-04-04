import React, { useMemo } from "react";
import dayjs from "dayjs";
import { Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { APP_NAME } from "../../constants";
import { formatCurrency } from "../../helpers";
import { getImagekitUrl } from "../../helpers/imagekit";
import { ITournament } from "../../providers/store/reducers/session/interfaces";

import {
  Name,
  Title,
  Profile,
  HostLogo,
  RoomSize,
  Container,
  Contents,
  PlayerDetail,
  TopContents,
  PlayerRank,
  TitleWrapper,
  RoomNumber,
  ContentContainer,
  PaticipantLogo,
  Team,
} from "./goal.styles";

type CardProps = {
  onEventPress: (id: ITournament["id"]) => void;
  joinTournament: (id: ITournament["id"]) => void;
} & ITournament;

export const Goal: React.FC<CardProps> = (props) => {
  const { palette, colors, hexToRGB } = useTheme();

  const {
    // id,
    title,
    room_size,
    host_clan,
    participates,
    // team_size,
    // start_date,
    // onEventPress,
    // winner_clan_id,
    // joinTournament,
  } = props;

  // const isEventStarted = dayjs().unix() >= dayjs(start_date).unix();
  // const isEventFinished = isEventStarted && !!winner_clan_id;

  // const handleButtonPress = () => {
  //   if (!isEventStarted && !isEventFinished) {
  //     // join the tournament
  //     return joinTournament(id);
  //   }

  //   // see the tournament details
  //   onEventPress(id);
  // };

  // const clanLogoImage = useMemo(
  //   () => getImagekitUrl(host_clan.clan_logo, { directory: "clan_logo" }),
  //   [host_clan.clan_logo]
  // );

  return (
    <Container activeOpacity={0.5}>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>

      <Contents>
        <TopContents>
          <ContentContainer>
            <Profile>
              <HostLogo
                source={{
                  uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3f40a93-199f-4b0b-a742-38de7a11e3c1/de0e97a-38678396-11e9-47f8-9ced-42c220645766.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzZjQwYTkzLTE5OWYtNGIwYi1hNzQyLTM4ZGU3YTExZTNjMVwvZGUwZTk3YS0zODY3ODM5Ni0xMWU5LTQ3ZjgtOWNlZC00MmMyMjA2NDU3NjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-3HgQBr-9aIMuzI272lIYSY1TTzB7mMTkrs3ZR76mCk",
                }}
              />

              <PlayerDetail>
                <PlayerRank>LEADER</PlayerRank>
                <Name numberOfLines={1}>jagaban</Name>
              </PlayerDetail>
            </Profile>

            <RoomSize>
              <RoomNumber>{participates.length}</RoomNumber>
            </RoomSize>
          </ContentContainer>

          <Team>
            <Profile>
              <PaticipantLogo
                source={{
                  uri: "https://w0.peakpx.com/wallpaper/565/661/HD-wallpaper-nikto-dark-side-the-first-legendary-skin-in-cod-mobile-call-of-duty-zombies-call-of-duty-ghosts-call-duty-black-ops.jpg",
                }}
              />

              <PlayerDetail>
                <Name numberOfLines={1}>Mistake</Name>
              </PlayerDetail>
            </Profile>

            <RoomSize>
              <RoomNumber>{room_size}</RoomNumber>
            </RoomSize>
          </Team>

          <Team>
            <Profile>
              <PaticipantLogo
                source={{
                  uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3f40a93-199f-4b0b-a742-38de7a11e3c1/de0e97a-38678396-11e9-47f8-9ced-42c220645766.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzZjQwYTkzLTE5OWYtNGIwYi1hNzQyLTM4ZGU3YTExZTNjMVwvZGUwZTk3YS0zODY3ODM5Ni0xMWU5LTQ3ZjgtOWNlZC00MmMyMjA2NDU3NjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-3HgQBr-9aIMuzI272lIYSY1TTzB7mMTkrs3ZR76mCk",
                }}
              />

              <PlayerDetail>
                <Name numberOfLines={1}>Fuck-Ups</Name>
              </PlayerDetail>
            </Profile>

            <RoomSize>
              <RoomNumber>{participates.length}</RoomNumber>
            </RoomSize>
          </Team>

          <Team>
            <Profile>
              <PaticipantLogo
                source={{
                  uri: "https://w0.peakpx.com/wallpaper/565/661/HD-wallpaper-nikto-dark-side-the-first-legendary-skin-in-cod-mobile-call-of-duty-zombies-call-of-duty-ghosts-call-duty-black-ops.jpg",
                }}
              />

              <PlayerDetail>
                <Name numberOfLines={1}>Level</Name>
              </PlayerDetail>
            </Profile>

            <RoomSize>
              <RoomNumber>{room_size}</RoomNumber>
            </RoomSize>
          </Team>
        </TopContents>
      </Contents>
    </Container>
  );
};
