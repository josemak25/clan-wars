import React from "react";
import dayjs from "dayjs";
import { Platform } from "react-native";
import { shallowEqual } from "react-redux";
import { useTheme } from "styled-components/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { RootState } from "../../providers/store/store";
import { Participant } from "../../components/participant";
import { RootTabScreenProps } from "../../../types/navigation";
import { useResponsiveScreen, useSelector } from "../../hooks";
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
  ClanImageWrapper,
  ButtonContainer,
  WinnerContainer,
  ClanImageContainer,
  ClanScoresContainer,
} from "./statistic.styles";

export const StatisticsScreen: React.FC<
  RootTabScreenProps<"StatisticsScreen">
> = (props) => {
  const { palette } = useTheme();
  const { isDesktopOrLaptop } = useResponsiveScreen();

  const { selectedTournament } = useSelector(
    ({ tournament }: RootState) => tournament,
    shallowEqual
  );

  const winners = rankWinnersByKills(selectedTournament?.participates);
  const topWinners = getTopWinners(winners);
  const trophies = getWinnersTrophies(winners);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      isDesktopOrLaptop={isDesktopOrLaptop}
    >
      <WinnerContainer>
        {topWinners.map(({ data, position }) => (
          <ClanImageContainer
            key={data.id}
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
              isDesktopOrLaptop={isDesktopOrLaptop}
              size={position !== 1 ? (isDesktopOrLaptop ? 130 : 95) : undefined}
              style={[
                position === 1 && {
                  elevation: 24,
                  borderWidth: 4,
                  shadowRadius: 16,
                  shadowOpacity: 0.58,
                  shadowColor: palette.primary,
                  shadowOffset: { width: 2, height: 12 },
                },
              ]}
            >
              <ClanImage
                isDesktopOrLaptop={isDesktopOrLaptop}
                size={
                  position !== 1 ? (isDesktopOrLaptop ? 130 : 95) : undefined
                }
                uri={data.clan_logo}
                preview={{ uri: data.clan_logo }}
              />
            </ClanImageWrapper>
            <ClanName numberOfLines={1}>{data.clan_name}</ClanName>
            <Scores numberOfLines={1}>{getTeamTotalKills(data.team)}</Scores>
          </ClanImageContainer>
        ))}
      </WinnerContainer>

      <Spacer size={50} />
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

      <ClanScoresContainer>
        {winners.map((clan) => (
          <Participant
            name={clan.clan_name}
            image_uri={clan.clan_logo}
            icon={trophies[clan.id].icon}
            image_preview={clan.clan_logo}
            kill_count={getTeamTotalKills(clan.team)}
            iconBackground={trophies[clan.id].iconBackground}
          />
        ))}
      </ClanScoresContainer>
    </ScrollView>
  );
};
