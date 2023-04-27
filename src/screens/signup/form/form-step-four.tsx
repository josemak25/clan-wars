import React from "react";
import { FormattedMessage } from "react-intl";
import { Controller, useFieldArray } from "react-hook-form";

import messages from "../messages";
import { Icon } from "../../../components/icon";
import { FormStepProps } from "../../../../types";
import { useFormValidation, useDispatch } from "../../../hooks";
import { settingsActions } from "../../../providers/store/reducers";

import {
  Title,
  Spacer,
  SubTitle,
  TeamButton,
  PlayerName,
  TeamScrollView,
  FormStepWrapper,
} from "../signup.styles";

export const FormStepFour: React.FC<FormStepProps> = ({
  errors,
  control,
  clearErrors,
}) => {
  const dispatch = useDispatch();
  const { clanNameValidation } = useFormValidation();
  const { fields, append, prepend } = useFieldArray({
    control,
    name: "team",
  });

  const onTeamClick = () => {
    dispatch(settingsActions.toggleAddPlayerModalVisibility());
  };

  return (
    <FormStepWrapper>
      <Title>
        <FormattedMessage {...messages.build_clan_team} />
      </Title>
      <SubTitle>
        <FormattedMessage {...messages.build_clan_team_details} />
      </SubTitle>

      <Spacer size={40} />
      <TeamScrollView>
        <Controller
          name="team"
          control={control}
          rules={clanNameValidation}
          render={({ field: { onChange } }) => (
            <TeamButton onPress={onTeamClick}>
              <Icon name="user" />
              <PlayerName>
                <FormattedMessage {...messages.add_team_leader} />
              </PlayerName>
            </TeamButton>
          )}
        />

        <Controller
          name="team"
          control={control}
          rules={clanNameValidation}
          render={({ field: { onChange } }) => (
            <TeamButton onPress={onTeamClick}>
              <Icon name="user" />
              <PlayerName>
                <FormattedMessage {...messages.add_second_player} />
              </PlayerName>
            </TeamButton>
          )}
        />

        <Controller
          name="team"
          control={control}
          rules={clanNameValidation}
          render={({ field: { onChange } }) => (
            <TeamButton onPress={onTeamClick}>
              <Icon name="user" />
              <PlayerName>
                <FormattedMessage {...messages.add_third_player} />
              </PlayerName>
            </TeamButton>
          )}
        />

        <Controller
          name="team"
          control={control}
          rules={clanNameValidation}
          render={({ field: { onChange } }) => (
            <TeamButton onPress={onTeamClick}>
              <Icon name="user" />
              <PlayerName>
                <FormattedMessage {...messages.add_fourth_player} />
              </PlayerName>
            </TeamButton>
          )}
        />
      </TeamScrollView>
    </FormStepWrapper>
  );
};
