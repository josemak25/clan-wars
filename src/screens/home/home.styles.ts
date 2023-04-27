import { Text } from "react-native-paper";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform, FlatList as __FlatList } from "react-native";
import {
  Button as __Button,
  ActivityIndicator as __ActivityIndicator,
} from "react-native-paper";

import { ITournament } from "../../providers/store/reducers/tournament/interfaces";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(p) => p.theme.palette.background};
`;

export const Header = styled.View`
  align-items: flex-start;
  padding: 0px 0px ${(p) => p.theme.layout.gutter}px
    ${(p) => p.theme.layout.gutter}px;
  background-color: ${(p) => p.theme.palette.background};
`;

export const EmptyCell = styled.View`
  flex: 1;
  height: 100%;
  border-radius: 20px;
  max-width: ${Platform.select({ default: 400, web: 450 })}px;
`;

export const Title = styled(Text)`
  color: ${(p) => p.theme.palette.text};
  margin-top: ${(p) => p.theme.layout.gutter * 2}px;
  font-size: ${(p) => p.theme.fonts.scale.value(25)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};
`;

export const SubTitle = styled(Title)`
  margin-top: ${(p) => p.theme.layout.gutter / 2}px;
  margin-bottom: ${(p) => p.theme.layout.gutter * 2}px;
  font-size: ${(p) => p.theme.fonts.scale.value(16)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
`;

export const FlatList = styled(__FlatList).attrs<{ isMultipleRows: boolean }>(
  (p) => ({
    contentContainerStyle: {
      gap: 30,
      flexGrow: 1,
      paddingTop: p.theme.layout.gutter,
      paddingBottom: p.theme.layout.gutter,
    },
    ...(p.isMultipleRows && {
      columnWrapperStyle: {
        gap: 30,
        alignItems: "center",
        justifyContent: "center",
      },
    }),
  })
)<{ isMultipleRows: boolean }>`` as unknown as typeof __FlatList<ITournament>;

export const ActivityIndicator = styled(__ActivityIndicator).attrs<{
  isDesktopOrLaptop: boolean;
}>((p) => ({
  color: p.theme.palette.text,
  size: p.isDesktopOrLaptop ? 40 : 30,
}))<{ isDesktopOrLaptop: boolean }>``;

export const ListEmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RetryButton = styled(__Button).attrs((p) => ({
  textColor: p.theme.palette.text,
  contentStyle: {
    padding: 5,
    borderRadius: 2,
  },
  labelStyle: {
    fontSize: p.theme.fonts.scale.value(15),
    fontFamily: p.theme.fonts.variants.roboto_bold,
  },
}))`
  min-width: 300px;
  margin-top: ${(p) => p.theme.layout.gutter}px;
  border-radius: ${(p) => p.theme.layout.radius}px;
  border: 1px ${(p) => p.theme.hexToRGB(p.theme.palette.text, 0.2)} solid;
`;
