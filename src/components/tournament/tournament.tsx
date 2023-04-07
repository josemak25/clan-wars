import React, { useMemo } from "react";
import dayjs from "dayjs";
import { Platform, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { APP_NAME } from "../../constants";
import { formatCurrency } from "../../helpers";
import { getImagekitUrl } from "../../helpers/imagekit";
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
  ContentContainer,
  EventDetailsButton,
  TimerContentWrapper,
} from "./tournament.styles";

type TournamentProps = {
  onEventPress: (id: ITournament["id"]) => void;
  joinTournament: (id: ITournament["id"]) => void;
} & ITournament;

export const Tournament: React.FC<TournamentProps> = (props) => {
  const { palette, colors, hexToRGB } = useTheme();

  const {
    id,
    title,
    tags = [],
    team_size,
    host_clan,
    room_size,
    start_date,
    price_pool,
    created_at,
    cover_image,
    participates,
    onEventPress,
    winner_clan_id,
    tournament_icon,
    joinTournament,
  } = props;

  const isEventStarted = dayjs().unix() >= dayjs(start_date).unix();
  const isEventFinished = isEventStarted && !!winner_clan_id;

  const handleButtonPress = () => {
    if (!isEventStarted && !isEventFinished) {
      // join the tournament
      return joinTournament(id);
    }

    // see the tournament details
    onEventPress(id);
  };

  const tournamentImage = useMemo(
    () =>
      getImagekitUrl((cover_image || tournament_icon)!, {
        directory: "tournament_cover",
      }),
    [cover_image, tournament_icon]
  );

  const clanLogoImage = useMemo(
    () => getImagekitUrl(host_clan.clan_logo, { directory: "clan_logo" }),
    [host_clan.clan_logo]
  );

  return (
    <Container
      activeOpacity={0.5}
      onPress={() => onEventPress(id)}
      disabled={isEventFinished || isEventStarted}
    >
      <TopContents>
        {cover_image ? (
          <View>
            <HeroImage
              uri={tournamentImage.url}
              preview={{ uri: tournamentImage.preview }}
            />
            <LinearGradient colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.3)"]} />
          </View>
        ) : null}

        <ContentContainer>
          <TimerContainer>
            {tournament_icon && <TournamentIcon uri={tournament_icon} />}
            <TimerContentWrapper>
              <Timer>
                {dayjs(created_at).format("dddd DD MMMM")} • Starting at{" "}
                {dayjs(created_at).format("hh : mm")}
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
                  {participates.length}/{room_size}
                </PriceSubtitle>
              </PriceTrophy>
            </PriceWrapper>
          </PriceContainer>
        </ContentContainer>
      </TopContents>

      <BottomContents>
        <Profile>
          <HostLogo
            uri={clanLogoImage.url}
            preview={{ uri: clanLogoImage.preview }}
          />
          <HostDetail>
            <Description>Organized by</Description>
            <Organizer numberOfLines={1}>
              {host_clan.clan_name || APP_NAME}
            </Organizer>
          </HostDetail>
        </Profile>

        <EventDetailsButton
          onPress={handleButtonPress}
          isEventStarted={isEventStarted && !isEventFinished}
          icon={() =>
            isEventFinished || !isEventStarted ? (
              <Ionicons
                size={20}
                color={colors.dark.text}
                name="md-arrow-forward-circle-outline"
                style={{ marginTop: Platform.select({ web: 4, default: 0 }) }}
              />
            ) : null
          }
        >
          {isEventFinished
            ? "Event Details"
            : isEventStarted
            ? "Started"
            : "Join event"}
          <Ionicons size={24} color="white" />
        </EventDetailsButton>
      </BottomContents>
    </Container>
  );
};
