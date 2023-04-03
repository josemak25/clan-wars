import { Text } from "react-native-paper";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding-top: ${(p) => p.theme.layout.gutter}px;
  background-color: ${(p) => p.theme.palette.background};
`;

export const Title = styled(Text)`
  margin-bottom: 30px;
  color: ${(p) => p.theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(40)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};
`;
