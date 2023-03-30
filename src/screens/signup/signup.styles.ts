import { Text } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  color: ${(p) => p.theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(40)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};
`;
