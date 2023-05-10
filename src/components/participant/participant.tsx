import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components/native";

import { Icon } from "../icon";
import { AvatarType } from "../icon/interface";

import {
  Name,
  Avatar,
  Profile,
  KillCount,
  Container,
  PlayerDetail,
  TrophyWrapper,
} from "./participant.styles";

export type ParticipantProps = {
  name: string;
  image_uri?: string;
  kill_count: number;
  avatar?: AvatarType;
  image_preview: string;
  iconBackground?: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
};

export const Participant: React.FC<ParticipantProps> = (props) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Profile>
        {props.image_uri && (
          <Avatar
            uri={props.image_uri}
            preview={{ uri: props.image_preview }}
          />
        )}

        {props.avatar && (
          <Icon size={40} name="avatar" avatarId={props.avatar} />
        )}

        <PlayerDetail>
          <Name>{props.name}</Name>
          {props.icon && (
            <TrophyWrapper background={props.iconBackground}>
              <Ionicons name={props.icon} size={20} color={colors.dark.text} />
            </TrophyWrapper>
          )}
        </PlayerDetail>
      </Profile>
      <KillCount>{props.kill_count}</KillCount>
    </Container>
  );
};
