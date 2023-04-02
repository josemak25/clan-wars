import React from "react";
import { Controller } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";

import messages from "../messages";
import { Input } from "../../../components/input";
import { FormStepProps } from "../../../../types";
import { useFormValidation } from "../../../hooks";

import { Title, Spacer, SubTitle, FormStepWrapper } from "../signup.styles";

export const FormStepOne: React.FC<FormStepProps> = ({ errors, control }) => {
  const { formatMessage } = useIntl();
  const { clanNameValidation } = useFormValidation();

  return (
    <FormStepWrapper>
      <Title>
        <FormattedMessage {...messages.meet_the_clan} />
      </Title>
      <SubTitle>
        <FormattedMessage {...messages.fill_clan_details} />
      </SubTitle>

      <Spacer size={40} />
      <Controller
        control={control}
        name="clan_name"
        rules={clanNameValidation}
        render={({ field: { onChange, ref, ...rest } }) => (
          <Input
            {...rest}
            onChangeText={onChange}
            error={errors.clan_name}
            placeholder="Anonymous clan"
            label={formatMessage(messages.enter_the_clan_name)}
          />
        )}
      />
    </FormStepWrapper>
  );
};
