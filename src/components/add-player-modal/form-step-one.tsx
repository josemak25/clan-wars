import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";
import { Controller, useForm } from "react-hook-form";

import { Icon } from "../icon";
import { Input } from "../input";
import messages from "./messages";
import { generateId } from "../../helpers";
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
import { FormStepProps } from "../../../types";

type FormStepOneProps = {
  onButtonPress: VoidFunction;
  isScreenLessThanMaxWidth: boolean;
} & FormStepProps<Partial<ITournamentTeam>>;

export const FormStepOne: React.FC<FormStepOneProps> = ({
  errors,
  control,
  onButtonPress,
  isScreenLessThanMaxWidth,
}) => {
  const user_id = useRef(generateId()).current;
  const { playerIgnValidation } = useFormValidation();
  const { watch } = useForm<Partial<ITournamentTeam>>();

  const player_ign = watch("player_ign");

  return (
    <InputContents isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}>
      <UserContainer>
        <Icon name="avatar" />
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
        render={({ field: { onChange, ref, ...rest } }) => (
          <Input
            {...rest}
            maxLength={14}
            onChangeText={onChange}
            label="Enter player IGN"
            placeholder="十・Drifter"
            error={errors.player_ign}
          />
        )}
      />

      <Spacer size={60} />
      <NextStepButton
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
