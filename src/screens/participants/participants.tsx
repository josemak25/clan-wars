import React from "react";
import { ListRenderItem } from "react-native";

import { Clan } from "../../components/clan";
import { FallbackScreen } from "../../components/fallback";
import { RootTabScreenProps } from "../../../types/navigation";
import { useParticipants, useResponsiveScreen } from "../../hooks";
import { ITournamentClan } from "../../providers/store/reducers/participants/interfaces";

import {
  FlatList,
  ActivityIndicator,
  ListEmptyContainer,
} from "./participants.styles";

export const ParticipantsScreen: React.FC<
  RootTabScreenProps<"ParticipantsScreen">
> = () => {
  const { isDesktopOrLaptop } = useResponsiveScreen();
  const { data, isLoading, isEmpty, error, onRetry } = useParticipants();

  const renderItem: ListRenderItem<ITournamentClan> = ({ item }) => (
    <Clan {...item} />
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
          title="no_participant_data_title"
          subtitle="no_participant_data_subtitle"
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
    <FlatList
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};
