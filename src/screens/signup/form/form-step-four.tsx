import React from "react";
import { Controller } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";

import messages from "../messages";
import { FormStepProps } from "../../../../types";
import { Input } from "../../../components/input";
import { useFormValidation } from "../../../hooks";

import { Title, Spacer, SubTitle, FormStepWrapper } from "../signup.styles";

export const FormStepFour: React.FC<FormStepProps> = ({ errors, control }) => {
  const { formatMessage } = useIntl();
  const { clanNameValidation } = useFormValidation();

  return (
    <FormStepWrapper>
      <Title>
        <FormattedMessage {...messages.build_clan_team} />
      </Title>
      <SubTitle>
        <FormattedMessage {...messages.build_clan_team_details} />
      </SubTitle>

      <Spacer size={40} />
      <Controller
        name="clan_logo"
        control={control}
        rules={clanNameValidation}
        render={({ field: { onChange, ref, ...rest } }) => (
          <Input
            {...rest}
            error={errors.clan_logo}
            onChangeText={onChange}
            placeholder="Peaky blinders"
            label={formatMessage(messages.enter_the_clan_name)}
          />
        )}
      />
    </FormStepWrapper>
  );
};
