import styled from "styled-components/native";
import { Image } from "react-native-expo-image-cache";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Profile = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Avatar = styled(Image)<{ size?: number }>`
  overflow: hidden;
  width: ${(p) => p.size || 40}px;
  height: ${(p) => p.size || 40}px;
  border-radius: ${(p) => (p.size || 40) / 2}px;
`;

export const PlayerDetail = styled.View<{ margin?: number }>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${(p) => p.theme.layout.gutter + (p.margin || 0)}px;
`;

export const Name = styled.Text`
  color: ${(p) => p.theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(18)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
  color: ${(p) => p.theme.hexToRGB(p.theme.palette.text, 0.6)};
`;

export const KillCount = styled(Name)`
  margin: 0px;
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
`;

export const TrophyWrapper = styled.View<{ background?: string }>`
  border-radius: 5px;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${(p) => p.theme.layout.gutter}px;
  padding: ${(p) => p.theme.layout.gutter / 3}px
    ${(p) => p.theme.layout.gutter / 2}px;
  background-color: ${(p) => p.background || p.theme.palette.primary};
`;
