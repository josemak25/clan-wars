import styled from "styled-components/native";
import { Timer as __Timer } from "../../components/tournament/tournament.styles";

export {
  Tags,
  Title,
  ButtonContainer,
} from "../../components/tournament/tournament.styles";
export { Spacer } from "../signup/signup.styles";

export const ScrollView = styled.ScrollView`
  flex: 1;
  padding: ${(p) => p.theme.layout.gutter}px;
  padding-top: ${(p) => p.theme.layout.gutter / 2}px;
  background-color: ${(p) => p.theme.palette.background};
`;

export const Timer = styled(__Timer)``;

export const Info = styled(Timer)`
  text-transform: capitalize;
  color: ${(p) => p.theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};
`;

export const TimerContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

export const WinnerContainer = styled.View`
  border: red;
  height: 300px;
  flex-direction: column;
  justify-content: center;

`;

export const WinnerWrapper = styled.View`
  border: green;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: ${(p) => p.theme.layout.gutter * 2}px;

`;


export const ClanImageContainer = styled.View`
  /* border: green; */
  align-items: center;
  flex-direction: column;
  position: relative;

`;

export const ClanImage = styled.Image<{ size?: number }>`
 width: ${(p) => p.size || 60}px;
 height: ${(p) => p.size || 60}px;
 border: 2px ${(p) => p.theme.palette.success};
 border-radius:  ${(p) => (p.size || 60) / 2}px;

`;

export const WinnerBadge = styled.Text`
margin-bottom: 5px;
  color: ${(p) => p.theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(16)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};

`;

export const ClanName = styled(Info)`
margin-top: 10;
font-size: ${(p) => p.theme.fonts.scale.value(14)}px;
font-family: ${(p) => p.theme.fonts.variants.roboto_regular};

`;

export const Scores = styled(Info)`
  font-size: ${(p) => p.theme.fonts.scale.value(18)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
`;

export const  MiddleClanImage = styled(ClanImage)`
 left: -15px;
 width: ${(p) => p.size || 70}px;
 height: ${(p) => p.size || 70}px;
 border: 2px ${(p) => p.theme.palette.success};
 border-radius:  ${(p) => (p.size || 70) / 2}px;
  /* position: absolute; */
`;

export const  MiddleClanImageContainer = styled(ClanImageContainer)`
 top: -30px;
 /* position: absolute; */
`;

export const RightClanImageContainer = styled(ClanImageContainer)`
 /* left: -30px;
position: relative; */
`;

export const  RightClanImage = styled(ClanImage)`
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

export const ClanLogo = styled(ClanImage)`
   border: 0;
   width: ${(p) => p.size || 40}px;
 height: ${(p) => p.size || 40}px;
 border-radius:  ${(p) => (p.size || 40) / 2}px;
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