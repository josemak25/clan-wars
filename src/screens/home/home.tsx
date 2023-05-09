import React, { Fragment } from "react";
import { useTheme } from "styled-components/native";
import { ListRenderItem, Platform } from "react-native";

import { Icon } from "../../components/icon";
import { Tournament } from "../../components/tournament";
import { FallbackScreen } from "../../components/fallback";
import { RootStackScreenProps } from "../../../types/navigation";
import { useDispatch, useResponsiveScreen, useTournaments } from "../../hooks";
import { ITournament } from "../../providers/store/reducers/tournament/interfaces";
import {
  settingsActions,
  tournamentActions,
} from "../../providers/store/reducers";

import {
  Header,
  FlatList,
  Container,
  EmptyCell,
  ActivityIndicator,
  ListEmptyContainer,
} from "./home.styles";

export const HomeScreen: React.FC<RootStackScreenProps<"HomeScreen">> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const { layout, breakpoints } = useTheme();
  const { isDesktopOrLaptop } = useResponsiveScreen();
  const { data, isLoading, isEmpty, error, onRetry } = useTournaments();

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

  const numColumns = Math.max(
    1,
    Math.floor(layout.screen.width / (breakpoints.small_mobile + layout.gutter))
  );

  const lastCells = data.length % numColumns;
  const isFillEmptyCells = lastCells !== 0;
  const numberOfEmptyCells = isFillEmptyCells ? numColumns - lastCells : 0;

  const RenderEmptyCell = () => (
    <Fragment>
      {[...Array(numberOfEmptyCells)].map((_, index) => (
        <EmptyCell key={`empty_cell_${index}`} />
      ))}
    </Fragment>
  );

  const renderItem: ListRenderItem<ITournament> = ({ item, index }) => (
    <Fragment>
      <Tournament
        {...item}
        onEventPress={() => onEventPress(item)}
        joinTournament={() => joinTournament(item)}
      />

      {index === data.length - 1 && isFillEmptyCells && <RenderEmptyCell />}
    </Fragment>
  );

  const ListEmptyComponent = () => (
    <ListEmptyContainer>
      {isLoading && <ActivityIndicator isDesktopOrLaptop={isDesktopOrLaptop} />}

      {!isLoading && isEmpty && (
        <FallbackScreen
          icon="empty"
          iconSize={100}
          isModal={false}
          resetError={onRetry}
          title="no_tournament_data_title"
          subtitle="no_tournament_data_subtitle"
        />
      )}

      <FallbackScreen
        error={error}
        isVisible={!!error}
        resetError={onRetry}
        subtitle="fetching_data_subtitle"
      />
    </ListEmptyContainer>
  );

  return (
    <Container>
      <FlatList
        data={data}
        numColumns={numColumns}
        renderItem={renderItem}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll
        //@ts-ignore
        isMultipleRows={numColumns > 1}
        ListEmptyComponent={ListEmptyComponent}
        ListHeaderComponent={
          <Header>
            <Icon name="logo" isOnlyIcon={false} />
          </Header>
        }
      />
    </Container>
  );
};
