import { Platform } from "react-native";
import styled from "styled-components/native";
import { Image } from "react-native-expo-image-cache";

import { Timer as __Timer } from "../../components/tournament/tournament.styles";

export {
  Tags,
  Title,
  ButtonContainer,
} from "../../components/tournament/tournament.styles";
export { Spacer } from "../signup/signup.styles";

export const ScrollView = styled.ScrollView.attrs<{
  isDesktopOrLaptop: boolean;
}>((p) => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: p.theme.insets.bottom + p.theme.layout.gutter,
    paddingTop: Platform.select({ web: p.theme.layout.gutter * 1.5 }),
    paddingHorizontal: p.theme.layout.gutter * (p.isDesktopOrLaptop ? 3 : 1),
  },
}))<{ isDesktopOrLaptop: boolean }>`
  background-color: ${(p) => p.theme.palette.background};
`;

export const WinnerContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: ${Platform.select({ web: 30, default: 50 })}px;
`;

export const ClanImageContainer = styled.View`
  align-items: center;
`;

export const WinnerBadge = styled(__Timer)<{ size?: number }>`
  color: ${(p) => p.theme.palette.text};
  margin-bottom: ${(p) => (p.size ? 10 : 0)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};
  font-size: ${(p) => p.theme.fonts.scale.value(p.size || 20)}px;
`;

export const TimerContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const Timer = styled(__Timer)``;

export const Info = styled(Timer)`
  text-transform: capitalize;
  color: ${(p) => p.theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};
`;

export const ClanImage = styled(Image)<{
  size?: number;
  isDesktopOrLaptop: boolean;
}>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: ${(p) =>
    p.size ? p.size : p.isDesktopOrLaptop ? 180 : 140}px;
`;

export const ClanImageWrapper = styled.View<{
  size?: number;
  isDesktopOrLaptop: boolean;
}>`
  margin-top: 5px;
  border: 2px ${(p) => p.theme.palette.primary} solid;
  width: ${(p) => (p.size ? p.size : p.isDesktopOrLaptop ? 180 : 140)}px;
  height: ${(p) => (p.size ? p.size : p.isDesktopOrLaptop ? 180 : 140)}px;
  border-radius: ${(p) =>
    (p.size ? p.size : p.isDesktopOrLaptop ? 180 : 140) / 2}px;
`;

export const ClanName = styled(Info)<{ size?: number }>`
  margin-top: 15px;
  text-align: center;
  width: ${(p) => p.size || 115}px;
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
`;

export const Scores = styled(ClanName)`
  top: -5px;
  margin: 0px;
  color: ${(p) => p.theme.palette.primary};
  font-size: ${(p) => p.theme.fonts.scale.value(30)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};
`;

export const ClanScoresContainer = styled.View`
  gap: ${(p) => p.theme.layout.gutter}px;
  margin-top: ${(p) => p.theme.layout.gutter * 3}px;
`;
