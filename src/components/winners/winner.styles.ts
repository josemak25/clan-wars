import { Platform } from "react-native";
import styled from "styled-components/native";
import { Image } from "react-native-expo-image-cache";

export const Container = styled.View`
  width: 100%;
  min-height: 150px;
  align-self: center;
  padding: 0px ${(p) => p.theme.layout.gutter}px;
  max-width: ${Platform.select({ default: 400, web: 450 })}px;
`;

export const Title = styled.Text`
  color: ${(p) => p.theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(22)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};
  color: ${(p) => p.theme.hexToRGB(p.theme.palette.text, 0.6)};
`;

export const Contents = styled.View`
  gap: 20px;
  flex-direction: column;
  padding: ${(p) => p.theme.layout.gutter}px;
  border-radius: ${(p) => p.theme.layout.radius}px;
  margin-top: ${(p) => p.theme.layout.gutter + 10}px;
  background-color: ${(p) => p.theme.palette.card_background};
`;

export const LeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Team = styled(LeaderContainer)``;

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

export const ClanLogo = styled(Avatar)`
  right: -5px;
  bottom: -8px;
  position: absolute;
`;

export const PlayerDetail = styled.View<{ margin?: number }>`
  flex: 1;
  justify-content: center;
  margin-left: ${(p) => p.theme.layout.gutter + (p.margin || 0)}px;
`;

export const PlayerRank = styled(Title)`
  margin-bottom: 5px;
  text-transform: uppercase;
  font-size: ${(p) => p.theme.fonts.scale.value(18)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
  color: ${(p) => p.theme.hexToRGB(p.theme.palette.text, 0.4)};
`;

export const KillCount = styled(PlayerRank)`
  margin: 0px;
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
`;

export const Name = styled(Title)`
  color: ${(p) => p.theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(18)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
`;

export const LeaderName = styled(Name)`
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};
`;
