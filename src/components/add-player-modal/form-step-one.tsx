import React, { useRef } from "react";
import { Platform } from "react-native";
import { Controller } from "react-hook-form";
import { FormattedMessage } from "react-intl";

import { Icon } from "../icon";
import { Input } from "../input";
import messages from "./messages";
import { generateId } from "../../helpers";
import { FormStepProps } from "../../../types";
import { useFormValidation } from "../../hooks";
import { ITournamentTeam } from "../../providers/store/reducers/tournament/interfaces";

import {
  Spacer,
  UserIGN,
  SubTitle,
  UserContents,
  InputContents,
  UserContainer,
  NextStepButton,
} from "./add-player-modal.styles";

type FormStepOneProps = {
  player?: ITournamentTeam;
  onButtonPress: VoidFunction;
  isScreenLessThanMaxWidth: boolean;
} & Partial<FormStepProps<Partial<ITournamentTeam>>>;

export const FormStepOne: React.FC<FormStepOneProps> = ({
  watch,
  player,
  errors,
  control,
  clearErrors,
  onButtonPress,
  isScreenLessThanMaxWidth,
}) => {
  const { playerIgnValidation } = useFormValidation();
  const player_ign = watch?.("player_ign") || player?.player_ign;
  const user_id = useRef(player?.player_id || generateId()).current;

  return (
    <InputContents isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}>
      <UserContainer>
        <Icon name="avatar" avatarId={player?.avatar} />
        <UserContents>
          {player_ign && <UserIGN>{player_ign}</UserIGN>}
          <SubTitle isActive={false}>
            {user_id.substring(0, 8)}...{user_id.substring(10, 22)}
          </SubTitle>
        </UserContents>
      </UserContainer>

      <Spacer size={15} />
      <Controller
        name="player_ign"
        control={control}
        rules={playerIgnValidation}
        defaultValue={player?.player_ign}
        render={({ field: { onChange, ref, ...rest } }) => (
          <Input
            {...rest}
            maxLength={14}
            value={rest.value || ""}
            label="Enter player IGN"
            placeholder="十・Drifter"
            error={errors?.player_ign}
            autoFocus={Platform.OS !== "web"}
            onChangeText={(text) => {
              onChange(text);
              if (errors?.player_ign) {
                clearErrors?.("player_ign");
              }
            }}
          />
        )}
      />

      <Spacer size={60} />
      <NextStepButton
        isValid={!!player_ign}
        onPress={onButtonPress}
        style={{
          elevation: 5,
          shadowRadius: 3.84,
          shadowOpacity: 0.25,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
        }}
      >
        <FormattedMessage {...messages.next_step} />
      </NextStepButton>
    </InputContents>
  );
};
