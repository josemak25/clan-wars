import { Platform } from "react-native";
import { Chip } from "react-native-paper";
import { Image } from "react-native-expo-image-cache";
import styled, { css } from "styled-components/native";
import { LinearGradient as __LinearGradient } from "expo-linear-gradient";

import { NextStepButton } from "../../screens/signup/signup.styles";

export const Container = styled.TouchableOpacity`
  width: 100%;
  overflow: hidden;
  min-height: 150px;
  align-self: center;
  border-radius: ${(p) => p.theme.layout.radius}px;
  max-width: ${Platform.select({ default: 400, web: 450 })}px;
  background-color: ${(p) => p.theme.palette.card_background};
`;

export const TopContents = styled.View`
  padding: ${(p) => p.theme.layout.gutter}px;
`;

export const HeroImage = styled(Image)`
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${(p) => p.theme.hexToRGB(p.theme.palette.text, 0.06)};
`;

export const LinearGradient = styled(__LinearGradient)`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
`;

export const ContentContainer = styled.View`
  margin-top: ${(p) => p.theme.layout.gutter}px;
`;

export const TimerContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  padding-bottom: ${(p) => p.theme.layout.gutter * 1.2}px;
  border-bottom-color: ${(p) => p.theme.palette.light_card_background};
`;

export const TimerContentWrapper = styled.View`
  flex: 1;
`;

export const TitleWrapper = styled.View``;

export const Timer = styled.Text`
  margin-bottom: 10px;
  font-size: ${(p) => p.theme.fonts.scale.value(15)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
  color: ${(p) => p.theme.hexToRGB(p.theme.palette.text, 0.6)};
`;

export const Title = styled(Timer)<{ wrap?: boolean }>`
  color: ${(p) => p.theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(25)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};

  ${(p) =>
    p.wrap &&
    css`
      width: 90%;
    `}
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  gap: ${(p) => p.theme.layout.gutter / 2}px;
  margin-top: ${(p) => p.theme.layout.gutter / 2}px;
`;

export const Tags = styled(Chip).attrs((p) => ({
  textStyle: {
    color: p.theme.palette.text,
    fontSize: p.theme.fonts.scale.value(14),
    fontFamily: p.theme.fonts.variants.roboto_regular,
  },
}))`
  border-radius: ${(p) => p.theme.layout.radius / 2}px;
  background-color: ${(p) => p.theme.palette.light_card_background};
  border: 1px ${(p) => p.theme.hexToRGB(p.theme.palette.text, 0.05)} solid;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  gap: ${(p) => p.theme.layout.gutter * 2.5}px;
  margin-top: ${(p) => p.theme.layout.gutter}px;
  padding: ${(p) => p.theme.layout.gutter / 3}px 0px;
`;

export const PriceWrapper = styled.View`
  align-items: center;
`;

export const CodSubtitle = styled(Timer)`
  margin-bottom: 6px;
  text-transform: capitalize;
`;

export const PriceTrophy = styled.View`
  gap: 5px;
  flex-direction: row;
  align-items: center;
`;

export const PriceSubtitle = styled(Title)`
  margin: 0px;
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
`;

export const BottomContents = styled.View`
  flex-direction: row;
  border-top-width: 1px;
  padding: ${(p) => p.theme.layout.gutter}px;
  border-top-color: ${(p) => p.theme.hexToRGB(p.theme.palette.text, 0.05)};
  background-color: ${(p) =>
    p.theme.isDarkMode ? p.theme.palette.light_card_background : "#e6e6e6"};
`;

export const Profile = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const HostLogo = styled(HeroImage)`
  width: 45px;
  height: 45px;
  border-radius: 25px;
`;

export const TournamentIcon = styled(HeroImage)`
  width: 80px;
  height: 100%;
  border-radius: 5px;
  margin-right: ${(p) => p.theme.layout.gutter}px;
`;

export const HostDetail = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: ${(p) => p.theme.layout.gutter / 1.5}px;
`;

export const Description = styled(CodSubtitle)`
  margin-bottom: 2px;
`;

export const Organizer = styled(PriceSubtitle)`
  margin: 0px;
`;

export const ButtonFooterContainer = styled(ButtonContainer)`
  flex-direction: row;
  justify-content: flex-end;
`;

export const EventDetailsButton = styled(NextStepButton).attrs<{
  isEventStarted: boolean;
  isEventFinished: boolean;
}>((p) => ({
  buttonColor: p.isEventStarted
    ? p.theme.palette.success
    : p.isEventFinished
    ? p.theme.palette.card_background
    : p.theme.palette.primary,
  textColor: p.isEventFinished
    ? p.theme.palette.text
    : p.theme.colors.dark.text,
  contentStyle: {
    paddingVertical: 4,
    flexDirection: "row-reverse",
    paddingHorizontal: p.theme.layout.gutter / 2,
  },
  labelStyle: {
    textTransform: "capitalize",
    fontSize: p.theme.fonts.scale.value(15),
    fontFamily: p.theme.fonts.variants.roboto_bold,
  },
}))<{ isEventStarted: boolean; isEventFinished: boolean }>`
  margin-left: ${(p) => p.theme.layout.gutter}px;
  border-radius: ${(p) => p.theme.layout.radius / 2}px;
`;
