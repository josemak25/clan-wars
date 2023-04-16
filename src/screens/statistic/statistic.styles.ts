import styled from "styled-components/native";
import { Timer as __Timer } from "../../components/tournament/tournament.styles";

export {
  Tags,
  Title,
  ButtonContainer,
} from "../../components/tournament/tournament.styles";
export { Spacer } from "../signup/signup.styles";

export const ScrollView = styled.ScrollView.attrs((p) => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: p.theme.layout.gutter,
  },
}))`
  background-color: ${(p) => p.theme.palette.background};
`;

export const WinnerContainer = styled.View`
  min-height: 300px;

  border: red;
`;

export const WinnerWrapper = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  border: green;
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

export const ClanImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ClanImageWrapper = styled.View<{ size?: number }>`
  margin-top: 5px;
  overflow: hidden;
  width: ${(p) => p.size || 100}px;
  height: ${(p) => p.size || 100}px;
  border: 2px ${(p) => p.theme.palette.success};
  border-radius: ${(p) => (p.size || 100) / 2}px;
`;

export const ClanName = styled(Info)`
  margin-top: 10px;
  font-size: ${(p) => p.theme.fonts.scale.value(14)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
`;

export const Scores = styled(Info)`
  font-size: ${(p) => p.theme.fonts.scale.value(18)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
`;

export const RightClanImage = styled(ClanImage)`
  left: 0px;
`;

export const ClanScoresContainer = styled.View`
  border: red;
  flex-direction: column;
  justify-content: center;
`;

export const Team = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const Profile = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const PlayerDetail = styled.View<{ margin?: number }>`
  flex: 1;
  justify-content: center;
  margin-left: ${(p) => p.theme.layout.gutter + (p.margin || 0)}px;
`;

export const KillCount = styled(Info)`
  margin: 0px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
  font-size: ${(p) => p.theme.fonts.scale.value(18)}px;
`;
