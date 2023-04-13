import styled from "styled-components/native";
import { Timer as __Timer } from "../../components/tournament/tournament.styles";

export {
  Tags,
  Title,
  ButtonContainer,
} from "../../components/tournament/tournament.styles";
export { Spacer } from "../signup/signup.styles";

export const Container = styled.View`
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
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;
