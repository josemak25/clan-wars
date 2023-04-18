import React, { Fragment } from "react";
import { useTheme } from "styled-components/native";
import { ListRenderItem, Platform } from "react-native";

import { Icon } from "../../components/icon";
import { Tournament } from "../../components/tournament";
import { useDispatch, useTournaments } from "../../hooks";
import { RootStackScreenProps } from "../../../types/navigation";
import {
  settingsActions,
  tournamentActions,
} from "../../providers/store/reducers";
import { ITournament } from "../../providers/store/reducers/tournament/interfaces";

import { Container, FlatList, Header, EmptyCell } from "./home.styles";

import { dummy_data } from "./data";

export const HomeScreen: React.FC<RootStackScreenProps<"HomeScreen">> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const tournament_data = useTournaments();
  const { layout, breakpoints } = useTheme();

  const onEventPress = (tournament: ITournament) => {
    dispatch(tournamentActions.setSelectedTournament(tournament));

    Platform.select({
      default: () => navigation.navigate("DetailsScreen"),
      web: () => dispatch(settingsActions.toggleDetailModalVisibility()),
    })();
  };

  const joinTournament = (tournament: ITournament) => {
    dispatch(tournamentActions.setSelectedTournament(tournament));
    navigation.navigate("SignUpScreen");
  };

  const numColumns = Math.min(
    3,
    Math.floor(layout.screen.width / (breakpoints.small_mobile + layout.gutter))
  );

  const lastCells = dummy_data.length % numColumns || 0;
  const isFillEmptyCells = lastCells !== 0;
  const numberOfEmptyCells = isFillEmptyCells ? numColumns - lastCells : 0;

  const RenderEmptyCell = () => (
    <Fragment>
      {[...Array(numberOfEmptyCells)].map((_, index) => (
        <EmptyCell key={`empty_cell_${index}`} />
      ))}
    </Fragment>
  );

  const renderItem: ListRenderItem<typeof dummy_data[number]> = ({
    item,
    index,
  }) => (
    <Fragment>
      <Tournament
        {...item}
        onEventPress={() => onEventPress(item)}
        joinTournament={() => joinTournament(item)}
      />

      {index === dummy_data.length - 1 && isFillEmptyCells && (
        <RenderEmptyCell />
      )}
    </Fragment>
  );

  return (
    <Container>
      <FlatList
        data={dummy_data}
        numColumns={numColumns}
        renderItem={renderItem}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll
        isMultipleRows={numColumns > 1}
        ListHeaderComponent={
          <Header>
            <Icon name="logo" isOnlyIcon={false} />
          </Header>
        }
      />
    </Container>
  );
};
