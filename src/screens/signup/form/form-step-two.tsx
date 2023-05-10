import React from "react";
import { Controller } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";

import messages from "../messages";
import { FormStepProps } from "../../../../types";
import { Input } from "../../../components/input";
import { useFormValidation } from "../../../hooks";

import { Title, Spacer, SubTitle, FormStepWrapper } from "../signup.styles";

export const FormStepTwo: React.FC<FormStepProps> = ({
  errors,
  control,
  clearErrors,
}) => {
  const { formatMessage } = useIntl();
  const { teamNameValidation } = useFormValidation();

  return (
    <FormStepWrapper>
      <Title>
        <FormattedMessage {...messages.meet_the_team_clan} />
      </Title>
      <SubTitle>
        <FormattedMessage {...messages.fill_team_details} />
      </SubTitle>

      <Spacer size={40} />
      <Controller
        name="team_name"
        control={control}
        rules={teamNameValidation}
        render={({ field: { onChange, ...rest } }) => (
          <Input
            {...rest}
            error={errors.team_name}
            placeholder="Peaky blinders"
            label={formatMessage(messages.enter_the_team_name)}
            onChangeText={(text) => {
              onChange(text);
              if (errors.team_name) {
                clearErrors("team_name");
              }
            }}
          />
        )}
      />
    </FormStepWrapper>
  );
};
