import React, { Fragment } from "react";
import { shallowEqual } from "react-redux";
import { useTheme } from "styled-components/native";
import { ListRenderItem, Platform } from "react-native";

import { Icon } from "../../components/icon";
import { FallbackScreen } from "../../components/fallback";
import { RootStackScreenProps } from "../../../types/navigation";
import { ITournament } from "../../providers/store/reducers/tournament/interfaces";
import {
  useDispatch,
  useSelector,
  useTournaments,
  useResponsiveScreen,
} from "../../hooks";
import {
  Tournament,
  TOURNAMENT_MAX_WIDTH,
  TOURNAMENT_MIN_WIDTH,
} from "../../components/tournament";
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
  const { layout } = useTheme();
  const dispatch = useDispatch();
  const { isDesktopOrLaptop } = useResponsiveScreen();
  const { data, isLoading, isEmpty, error, onRetry } = useTournaments();

  const { isDetailModalVisible } = useSelector(
    ({ settings }) => settings,
    shallowEqual
  );

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
    Math.floor(
      layout.screen.width /
        (isDesktopOrLaptop
          ? TOURNAMENT_MAX_WIDTH + layout.gutter
          : TOURNAMENT_MIN_WIDTH)
    )
  );

  const lastCells = data.length % numColumns;
  const isFillEmptyCells = lastCells !== 0;
  const numberOfEmptyCells = isFillEmptyCells ? numColumns - lastCells : 0;

  const RenderEmptyCell = () => (
    <Fragment>
      {[...Array(numberOfEmptyCells)].map((_, index) => (
        <EmptyCell
          key={`empty_cell_${index}`}
          width={
            isDesktopOrLaptop ? TOURNAMENT_MAX_WIDTH : TOURNAMENT_MIN_WIDTH
          }
        />
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
        scrollEnabled={!isDetailModalVisible}
        //@ts-ignore
        isMultipleRows={numColumns > 1}
        isDesktopOrLaptop={isDesktopOrLaptop}
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
