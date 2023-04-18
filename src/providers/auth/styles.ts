import styled from "styled-components/native";
import { ActivityIndicator as __ActivityIndicator } from "react-native-paper";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ActivityIndicator = styled(__ActivityIndicator).attrs((p) => ({
  size: "large",
  color: p.theme.palette.primary,
}))``;
