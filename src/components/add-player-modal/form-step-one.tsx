import React from "react";
import { Controller } from "react-hook-form";
import { FormattedMessage } from "react-intl";

import { Icon } from "../icon";
import { Input } from "../input";
import messages from "./messages";
import { FormStepProps } from "../../../types";
import { useFormValidation } from "../../hooks";
import { ITournamentTeam } from "../../providers/store/reducers/participants/interfaces";

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
  default_player_id: string;
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
  default_player_id,
  isScreenLessThanMaxWidth,
}) => {
  const { playerIgnValidation } = useFormValidation();
  const player_id = player?.player_id || default_player_id;
  const player_ign = watch?.("player_ign") || player?.player_ign;

  return (
    <InputContents isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}>
      <UserContainer>
        <Icon name="avatar" avatarId={player?.avatar} />
        <UserContents>
          {player_ign && <UserIGN>{player_ign}</UserIGN>}
          <SubTitle isActive={false}>
            {player_id.substring(0, 8)}...{player_id.substring(10, 22)}
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
