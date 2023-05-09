import React from "react";
import { Controller } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";

import messages from "../messages";
import { FormStepProps } from "../../../../types";
import { Input } from "../../../components/input";
import { useFormValidation } from "../../../hooks";

import { Title, Spacer, SubTitle, FormStepWrapper } from "../signup.styles";

export const FormStepFive: React.FC<FormStepProps> = ({
  errors,
  control,
  clearErrors,
}) => {
  const { formatMessage } = useIntl();
  const { phoneValidation } = useFormValidation();

  return (
    <FormStepWrapper>
      <Title>
        <FormattedMessage {...messages.best_contact_clan} />
      </Title>
      <SubTitle>
        <FormattedMessage {...messages.best_contact_clan_details} />
      </SubTitle>

      <Spacer size={40} />
      <Controller
        control={control}
        rules={phoneValidation}
        name="contact_phone_number"
        render={({ field: { onChange, ...rest } }) => (
          <Input
            {...rest}
            autoFocus
            placeholder="+234-813-297-8120"
            error={errors.contact_phone_number}
            label={formatMessage(messages.contact_phone_number)}
            onChangeText={(text) => {
              onChange(text);
              if (errors.contact_phone_number) {
                clearErrors("contact_phone_number");
              }
            }}
          />
        )}
      />
    </FormStepWrapper>
  );
};
