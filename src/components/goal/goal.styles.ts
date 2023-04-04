import { Platform } from "react-native";
import { Chip } from "react-native-paper";
import { Image } from "react-native-expo-image-cache";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  overflow: hidden;
  min-height: 150px;
  border-radius: ${(p) => p.theme.layout.radius}px;
  max-width: ${Platform.select({ default: 400, web: 450 })}px;
  background-color: ${(p) => p.theme.palette.card_background};
`;

export const TitleWrapper = styled.View`
  padding: ${(p) => p.theme.layout.gutter}px;
`;

export const Contents = styled.View`
  padding: ${(p) => p.theme.layout.gutter}px;
`;

export const TopContents = styled.View`
  flex-direction: column;
  padding: ${(p) => p.theme.layout.gutter}px;
  border-radius: ${(p) => p.theme.layout.radius}px;
  background-color: ${(p) => p.theme.palette.background};
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  margin-top: ${(p) => p.theme.layout.gutter / 2}px;
`;

export const Team = styled(ContentContainer)``;

export const Title = styled.Text<{ wrap?: boolean }>`
  margin-bottom: 4px;
  color: ${(p) => p.theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};
  color: ${(p) => p.theme.hexToRGB(p.theme.palette.text, 0.6)};

  ${(p) =>
    p.wrap &&
    css`
      width: 90%;
    `}
`;

export const RoomSize = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const RoomNumber = styled(Title)`
  margin: 0px;
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
`;

export const Profile = styled.View`
  flex: 1;
  flex-direction: row;
  padding: ${(p) => p.theme.layout.gutter / 2}px;
`;

export const HostLogo = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 25px;
`;

export const PaticipantLogo = styled(HostLogo)`
  width: 30px;
  height: 30px;
`;

export const PlayerDetail = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: ${(p) => p.theme.layout.gutter / 1.5}px;
`;

export const PlayerRank = styled(Title)`
  margin-bottom: 2px;
  text-transform: capitalize;
`;

export const Name = styled(Title)`
  margin: 0px;
  font-size: ${(p) => p.theme.fonts.scale.value(14)}px;
  font-weight: ${(p) => p.theme.fonts.variants.roboto_light};
`;
