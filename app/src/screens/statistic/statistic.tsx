import React from "react";
import dayjs from "dayjs";
import { Platform } from "react-native";
import { shallowEqual } from "react-redux";
import { useTheme } from "styled-components/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { RootState } from "../../providers/store/store";
import { Participant } from "../../components/participant";
import { RootTabScreenProps } from "../../../types/navigation";
import { useParticipants, useResponsiveScreen, useSelector } from "../../hooks";
import {
  getTopWinners,
  getTeamTotalKills,
  rankWinnersByKills,
  getWinnersTrophies,
} from "../../helpers";

import {
  Tags,
  Info,
  Title,
  Timer,
  Scores,
  Spacer,
  ClanName,
  ClanImage,
  ScrollView,
  WinnerBadge,
  TimerContainer,
  ButtonContainer,
  WinnerContainer,
  ClanImageWrapper,
  DefaultClanImage,
  ActivityIndicator,
  ClanImageContainer,
  ClanScoresContainer,
} from "./statistic.styles";

export const StatisticsScreen: React.FC<
  RootTabScreenProps<"StatisticsScreen">
> = () => {
  const { palette, layout } = useTheme();
  const { isDesktopOrLaptop } = useResponsiveScreen();
  const { data: participants, isLoading } = useParticipants();

  const { selectedTournament } = useSelector(
    ({ tournament }: RootState) => tournament,
    shallowEqual
  );

  const winners = rankWinnersByKills(participants);
  const topWinners = getTopWinners(winners);
  const trophies = getWinnersTrophies(winners);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WinnerContainer>
        {topWinners.map(({ data, position }) => (
          <ClanImageContainer
            key={`${data?.id}_${position}`}
            style={[
              position === 2 && { left: 25 },
              position === 3 && { right: 25 },
              position === 1 && { top: -20, zIndex: 1 },
            ]}
          >
            <WinnerBadge
              style={[
                position !== 1 && {
                  position: "absolute",
                  top: -Platform.select({ web: 15, default: 10 }),
                },
              ]}
            >
              {position}
            </WinnerBadge>
            {position === 1 ? (
              <WinnerBadge size={45}>👑</WinnerBadge>
            ) : (
              <MaterialIcons
                size={40}
                color={position === 2 ? palette.primary : palette.text}
                name={position === 2 ? "arrow-drop-up" : "arrow-drop-down"}
              />
            )}
            <ClanImageWrapper
              size={position !== 1 ? (isDesktopOrLaptop ? 130 : 95) : undefined}
              style={[
                position === 1 && {
                  elevation: 24,
                  borderWidth: 4,
                  shadowRadius: 16,
                  shadowOpacity: 0.58,
                  shadowColor: palette.primary,
                  marginBottom: layout.gutter / 2,
                  shadowOffset: { width: 2, height: 12 },
                },
              ]}
            >
              {selectedTournament?.winner_participant_id && data?.clan_logo ? (
                <ClanImage
                  size={
                    position !== 1 ? (isDesktopOrLaptop ? 130 : 95) : undefined
                  }
                  uri={data.clan_logo}
                  preview={{ uri: data.clan_logo }}
                />
              ) : (
                <DefaultClanImage
                  size={
                    position !== 1 ? (isDesktopOrLaptop ? 130 : 95) : undefined
                  }
                  source={require("../../../assets/default_user.png")}
                  defaultSource={require("../../../assets/default_user.png")}
                />
              )}
            </ClanImageWrapper>
            <ClanName numberOfLines={1}>
              {selectedTournament?.winner_participant_id
                ? data?.clan_name
                : "Unknown"}
            </ClanName>
            <Scores numberOfLines={1}>
              {selectedTournament?.winner_participant_id
                ? getTeamTotalKills(data?.team)
                : 0}
            </Scores>
          </ClanImageContainer>
        ))}
      </WinnerContainer>

      <Spacer size={50} />
      <Info>match info</Info>
      <Spacer size={20} />

      <TimerContainer>
        <Timer>
          Starts at •
          {dayjs(selectedTournament?.start_date).format(
            " ddd DD MMM YYYY hh : mm A"
          )}
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

      <ClanScoresContainer isLoading={isLoading}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          winners.map((clan) => (
            <Participant
              key={clan.id}
              name={clan.clan_name}
              image_uri={clan.clan_logo}
              image_preview={clan.clan_logo}
              kill_count={getTeamTotalKills(clan.team)}
              iconBackground={trophies[clan.id].iconBackground}
              icon={
                selectedTournament?.winner_participant_id
                  ? trophies[clan.id].icon
                  : undefined
              }
            />
          ))
        )}
      </ClanScoresContainer>
    </ScrollView>
  );
};
