import styled from "styled-components/native";

export const FlatList = styled.FlatList.attrs((p) => ({
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
`;
