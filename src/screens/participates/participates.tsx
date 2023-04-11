import React from "react";
import { ListRenderItem } from "react-native";

import { generateId } from "../../helpers";
import { Clan } from "../../components/clan";
import { RootTabScreenProps } from "../../../types/navigation";

import { FlatList } from "./participates.styles";

const dummy_data = [...Array(10)].map(generateId);

export const ParticipatesScreen: React.FC<
  RootTabScreenProps<"ParticipatesScreen">
> = () => {
  const renderItem: ListRenderItem<typeof dummy_data[number]> = () => {
    return (
      <Clan
        id={generateId()}
        created_at={Date.now()}
        updated_at={Date.now()}
        clan_leader_id="123456789"
        team_name="Peaky blinders"
        clan_name="Anonymous eSport"
        clan_logo="anonymous"
        contact_email_address="amakiri@gmail.com"
        team={[
          {
            id: generateId(),
            player_ign: "+ Drifter",
            avatar: "anonymous",
            created_at: Date.now(),
            updated_at: Date.now(),
            player_id: "123456789",
            total_kills: Math.floor(Math.random() * 40),
          },
          {
            id: generateId(),
            player_ign: "+ Mistake",
            avatar: "anonymous",
            created_at: Date.now(),
            updated_at: Date.now(),
            player_id: generateId(),
            total_kills: Math.floor(Math.random() * 40),
          },
          {
            player_ign: "+ Jose",
            avatar: "anonymous",
            id: generateId(),
            created_at: Date.now(),
            updated_at: Date.now(),
            player_id: generateId(),
            total_kills: Math.floor(Math.random() * 40),
          },
          {
            player_ign: "+ Gold",
            avatar: "anonymous",
            id: generateId(),
            created_at: Date.now(),
            updated_at: Date.now(),
            player_id: generateId(),
            total_kills: Math.floor(Math.random() * 40),
          },
        ]}
      />
    );
  };

  return (
    <FlatList
      data={dummy_data}
      renderItem={renderItem}
      keyExtractor={(key) => String(key)}
      showsVerticalScrollIndicator={false}
    />
  );
};
