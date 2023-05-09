import React from "react";
import { Controller } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";

import messages from "../messages";
import { Input } from "../../../components/input";
import { FormStepProps } from "../../../../types";
import { useFormValidation } from "../../../hooks";

import { Title, Spacer, SubTitle, FormStepWrapper } from "../signup.styles";

export const FormStepOne: React.FC<FormStepProps> = ({
  errors,
  control,
  clearErrors,
}) => {
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
        name="clan_name"
        control={control}
        rules={clanNameValidation}
        render={({ field: { onChange, ...rest } }) => (
          <Input
            {...rest}
            autoFocus
            error={errors.clan_name}
            placeholder="Anonymous eSport"
            label={formatMessage(messages.enter_the_clan_name)}
            onChangeText={(text) => {
              onChange(text);
              if (errors.clan_name) {
                clearErrors("clan_name");
              }
            }}
          />
        )}
      />
    </FormStepWrapper>
  );
};
