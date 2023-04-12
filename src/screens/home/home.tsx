import React, { Fragment } from "react";
import dayjs from "dayjs";
import { useTheme } from "styled-components/native";
import { ListRenderItem, Platform } from "react-native";

import { useDispatch } from "../../hooks";
import { generateId } from "../../helpers";
import { Icon } from "../../components/icon";
import { Tournament } from "../../components/tournament";
import { RootStackScreenProps } from "../../../types/navigation";
import {
  settingsActions,
  tournamentActions,
} from "../../providers/store/reducers";
import { ITournament } from "../../providers/store/reducers/tournament/interfaces";

import { Container, FlatList, Header, EmptyCell } from "./home.styles";

const dummy_tournament = {
  team_size: 4,
  room_size: 40,
  price_pool: 500000,
  participates: [{}],
  winner_clan_id: "hey",
  created_at: Date.now(),
  updated_at: Date.now(),
  registration_fee: "25000.00",
  start_date: dayjs().add(1, "days").toString(),
  title: "CODM: Private Alcatraz Tournament",
  tags: ["COD Warzone", "PC", "Invitational"],
  cover_image: "anonymous",
  host_clan: {
    clan_logo: "anonymous",
    clan_name: "Anonymous eSports",
  },
} as ITournament;

const dummy_data = [...Array(23)].map(generateId);

export const HomeScreen: React.FC<RootStackScreenProps<"HomeScreen">> = ({
  navigation,
}) => {
  const dispatch = useDispatch();

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
    Math.floor(
      layout.screen.width / breakpoints.small_mobile + layout.gutter * 2
    )
  );

  const lastCells = dummy_data.length % numColumns;
  const isFillEmptyCells = lastCells !== 0;
  const numberOfEmptyCells = isFillEmptyCells ? numColumns - lastCells : 0;

  const RenderEmptyCell = () => {
    return (
      <Fragment>
        {[...Array(numberOfEmptyCells)].map((_, index) => (
          <EmptyCell key={`empty_cell_${index}`} />
        ))}
      </Fragment>
    );
  };

  const renderItem: ListRenderItem<typeof dummy_data[number]> = ({ index }) => {
    return (
      <Fragment>
        <Tournament
          {...dummy_tournament}
          joinTournament={() => joinTournament(dummy_tournament)}
          onEventPress={() => onEventPress(dummy_tournament)}
        />

        {index === dummy_data.length - 1 && isFillEmptyCells && (
          <RenderEmptyCell />
        )}
      </Fragment>
    );
  };

  return (
    <Container>
      <FlatList
        data={dummy_data}
        numColumns={numColumns}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll
        isMultipleRows={numColumns > 1}
        keyExtractor={(key) => String(key)}
        ListHeaderComponent={
          <Header>
            <Icon name="logo" isOnlyIcon={false} />
          </Header>
        }
        renderItem={renderItem}
      />
    </Container>
  );
};
