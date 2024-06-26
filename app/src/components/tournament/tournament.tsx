import React from "react";
import dayjs from "dayjs";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { APP_NAME } from "../../constants";
import { formatCurrency } from "../../helpers";
import { useResponsiveScreen } from "../../hooks";
import { ITournament } from "../../providers/store/reducers/tournament/interfaces";

import {
  Tags,
  Timer,
  Title,
  Profile,
  HostLogo,
  Container,
  Organizer,
  HeroImage,
  HostDetail,
  TopContents,
  CodSubtitle,
  Description,
  PriceTrophy,
  PriceWrapper,
  TitleWrapper,
  PriceSubtitle,
  LinearGradient,
  TimerContainer,
  TournamentIcon,
  BottomContents,
  PriceContainer,
  ButtonContainer,
  DefaultHostLogo,
  ContentContainer,
  EventDetailsButton,
  TimerContentWrapper,
} from "./tournament.styles";

type TournamentProps = {
  onEventPress: VoidFunction;
  joinTournament: VoidFunction;
} & ITournament;

export const TOURNAMENT_MIN_WIDTH = 380;
export const TOURNAMENT_MAX_WIDTH = TOURNAMENT_MIN_WIDTH + 20;

export const Tournament: React.FC<TournamentProps> = (props) => {
  const { palette, colors, hexToRGB } = useTheme();
  const { isDesktopOrLaptop } = useResponsiveScreen();

  const {
    title,
    tags = [],
    team_size,
    room_size,
    start_date,
    price_pool,
    cover_image,
    participates,
    onEventPress,
    joinTournament,
    tournament_icon,
    tournament_host,
    winner_participant_id,
  } = props;

  const isEventStarted = dayjs().unix() >= dayjs(start_date).unix();
  const isEventFinished = isEventStarted && !!winner_participant_id;

  const handleButtonPress = () => {
    if (!isEventStarted && !isEventFinished) {
      // join the tournament
      return joinTournament();
    }

    // see the tournament details
    onEventPress();
  };

  return (
    <Container
      activeOpacity={0.5}
      onPress={() => onEventPress()}
      width={isDesktopOrLaptop ? TOURNAMENT_MAX_WIDTH : TOURNAMENT_MIN_WIDTH}
    >
      <TopContents>
        {cover_image ? (
          <View>
            <HeroImage uri={cover_image} preview={{ uri: cover_image }} />
            <LinearGradient colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)"]} />
          </View>
        ) : null}

        <ContentContainer>
          <TimerContainer>
            {tournament_icon && <TournamentIcon uri={tournament_icon} />}
            <TimerContentWrapper>
              <Timer>
                {dayjs(start_date).format("dddd DD MMMM")} • Starting at
                {dayjs(start_date).format(" hh:mm A")}
              </Timer>

              <TitleWrapper>
                <Title wrap numberOfLines={1}>
                  {title}
                </Title>
              </TitleWrapper>

              {tags.length ? (
                <ButtonContainer>
                  {tags.map((tag, index) => (
                    <Tags key={`${tag}_${index}`}>{tag}</Tags>
                  ))}
                </ButtonContainer>
              ) : null}
            </TimerContentWrapper>
          </TimerContainer>

          <PriceContainer>
            <PriceWrapper>
              <CodSubtitle>price pool</CodSubtitle>
              <PriceTrophy>
                <Ionicons
                  size={20}
                  name="trophy"
                  color={hexToRGB(palette.text, 0.4)}
                />
                <PriceSubtitle>{formatCurrency(price_pool)}</PriceSubtitle>
              </PriceTrophy>
            </PriceWrapper>

            <PriceWrapper>
              <CodSubtitle>team size</CodSubtitle>
              <PriceTrophy>
                <Ionicons
                  size={20}
                  name="ios-person"
                  color={hexToRGB(palette.text, 0.4)}
                />
                <PriceSubtitle>
                  {team_size}VS{team_size}
                </PriceSubtitle>
              </PriceTrophy>
            </PriceWrapper>

            <PriceWrapper>
              <CodSubtitle>participates</CodSubtitle>
              <PriceTrophy>
                <MaterialCommunityIcons
                  size={20}
                  name="timer"
                  color={hexToRGB(palette.text, 0.4)}
                />
                <PriceSubtitle>
                  {participates * team_size}/{room_size}
                </PriceSubtitle>
              </PriceTrophy>
            </PriceWrapper>
          </PriceContainer>
        </ContentContainer>
      </TopContents>

      <BottomContents>
        <Profile>
          {tournament_host.avatar ? (
            <HostLogo
              uri={tournament_host.avatar}
              preview={{ uri: tournament_host.avatar }}
            />
          ) : (
            <DefaultHostLogo name="logo" />
          )}

          <HostDetail>
            <Description>Organized by</Description>
            <Organizer numberOfLines={1}>
              {tournament_host.name || APP_NAME}
            </Organizer>
          </HostDetail>
        </Profile>

        <EventDetailsButton
          onPress={handleButtonPress}
          isEventFinished={isEventFinished}
          isEventStarted={isEventStarted && !isEventFinished}
          icon={() =>
            !isEventFinished || !isEventStarted ? (
              <Ionicons
                size={20}
                color={colors.dark.text}
                name="md-arrow-forward-circle-outline"
              />
            ) : null
          }
        >
          {isEventFinished
            ? "Event details"
            : isEventStarted
            ? "Event started"
            : "Join event"}
        </EventDetailsButton>
      </BottomContents>
    </Container>
  );
};
