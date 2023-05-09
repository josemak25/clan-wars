import styled from "styled-components/native";
import { FlatList as __FlatList } from "react-native";
import { ITournamentClan } from "../../providers/store/reducers/participants/interfaces";

export { ActivityIndicator, ListEmptyContainer } from "../home/home.styles";

export const FlatList = styled(__FlatList).attrs((p) => ({
  contentContainerStyle: {
    gap: 50,
    flexGrow: 1,
    paddingTop: p.theme.layout.gutter,
    paddingBottom: p.theme.layout.gutter * 2,
  },
}))`
  flex: 1;
  padding-top: ${(p) => p.theme.layout.gutter}px;
  background-color: ${(p) => p.theme.palette.background};
` as unknown as typeof __FlatList<ITournamentClan>;
