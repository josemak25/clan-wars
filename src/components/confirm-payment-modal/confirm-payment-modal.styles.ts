import styled from "styled-components/native";

import { NextStepButton } from "../../screens/signup/signup.styles";

export { Spacer } from "../../screens/signup/signup.styles";
export { ErrorMessage, ErrorMessageContainer } from "../input/input.styles";

import { Label } from "../input/input.styles";
import { Platform } from "react-native";
import { css } from "styled-components";

export const Container = styled.View<{ isDesktopOrLaptop: boolean }>`
  flex: 1;
  max-height: 400px;
  padding: ${(p) => p.theme.layout.gutter}px
    ${(p) => p.theme.layout.gutter * (p.isDesktopOrLaptop ? 2 : 1)}px;
  padding-bottom: ${(p) =>
    Math.min(p.theme.insets.bottom, p.theme.layout.gutter) +
    Platform.select({
      web: p.theme.layout.gutter * 3,
      default: p.theme.layout.gutter,
    })}px;
`;

export const Title = styled(Label)`
  opacity: 0.7;
  font-size: ${(p) => p.theme.fonts.scale.value(22)}px;
`;

export const PlayerName = styled(Title)<{
  isDesktopOrLaptop: boolean;
  isBold?: boolean;
}>`
  font-size: ${(p) =>
    p.theme.fonts.scale.value(p.isDesktopOrLaptop ? 18 : 15)}px;

  ${(p) =>
    p.isBold &&
    css`
      opacity: 1;
      font-family: ${p.theme.fonts.variants.roboto_bold};
      color: ${p.theme.isDarkMode
        ? p.theme.palette.text
        : p.theme.palette.primary};
    `}
`;

export const SubTitle = styled(Title)`
  opacity: 1;
  font-size: ${(p) => p.theme.fonts.scale.value(30)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};
`;

export const TimeInfoText = styled(Title)`
  font-size: ${(p) => p.theme.fonts.scale.value(18)}px;
`;

export const RefNumber = styled(SubTitle)`
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
`;

export const PlayersContainer = styled.View`
  min-height: 50px;
  flex-direction: row;
  align-items: center;
`;

export const PlayerAvatarRow = styled.View<{ minWidth: number }>`
  height: 100%;
  min-width: ${(p) => p.minWidth}px;
`;

export const PlayerNameRow = styled(PlayersContainer)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const GameInfoContainer = styled.View`
  min-height: 70px;
  flex-direction: row;
  align-items: center;
  gap: ${(p) => p.theme.layout.gutter}px;
  padding: ${(p) => p.theme.layout.gutter}px;
  border-radius: ${(p) => p.theme.layout.radius}px;
  background-color: ${(p) =>
    p.theme.isDarkMode
      ? p.theme.palette.light_background
      : p.theme.colors.dark.text};
`;

export const TimerInfoContainer = styled.View``;

export const TimerIcon = styled.View`
  min-width: 45px;
  min-height: 45px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.palette.light_card_background};
`;

export const SubmitButton = styled(NextStepButton).attrs((p) => ({
  labelStyle: {
    textTransform: "none",
    fontSize: p.theme.fonts.scale.value(20),
    fontFamily: p.theme.fonts.variants.roboto_regular,
  },
}))``;
