import React, { Fragment } from "react";
import dayjs from "dayjs";
import { ListRenderItem } from "react-native";
import { useTheme } from "styled-components/native";

import { generateId } from "../../helpers";
import { Icon } from "../../components/icon";
import { Card } from "../../components/card";
import { RootStackScreenProps } from "../../../types/navigation";

import { Container, FlatList, Header, EmptyCell } from "./home.styles";

const dummy_data = [...Array(23)].map(generateId);

export const HomeScreen: React.FC<RootStackScreenProps<"HomeScreen">> = ({
  navigation,
}) => {
  const { layout, breakpoints } = useTheme();

  const onEventPress = () => {};
  const joinTournament = () => navigation.navigate("SignUpScreen");

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
        <Card
          team_size={4}
          room_size={40}
          price_pool={500000}
          participates={[{}]}
          created_at={new Date()}
          updated_at={new Date()}
          winner_clan_id="hey"
          onEventPress={onEventPress}
          joinTournament={joinTournament}
          start_date={dayjs().add(1, "days").toDate()}
          title="CODM: Private Alcatraz Tournament"
          tags={["COD Warzone", "PC", "Invitational"]}
          // tournament_icon="anonymous"
          cover_image="anonymous"
          host_clan={{
            clan_logo: "anonymous",
            clan_name: "Anonymous eSports",
          }}
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
