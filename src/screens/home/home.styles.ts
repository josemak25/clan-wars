import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform, FlatList as __FlatList } from "react-native";
import { ActivityIndicator as __ActivityIndicator } from "react-native-paper";

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
        paddingHorizontal: p.theme.layout.gutter * 2,
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
