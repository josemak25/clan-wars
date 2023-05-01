import React from "react";
import { Controller } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";

import messages from "../messages";
import { FormStepProps } from "../../../../types";
import { Input } from "../../../components/input";
import { useFormValidation } from "../../../hooks";

import {
  Terms,
  Title,
  Spacer,
  SubTitle,
  FormStepWrapper,
} from "../signup.styles";

export const FormStepFive: React.FC<FormStepProps> = ({
  errors,
  control,
  clearErrors,
}) => {
  const { formatMessage } = useIntl();
  const { emailValidation } = useFormValidation();

  return (
    <FormStepWrapper>
      <Title>
        <FormattedMessage {...messages.confirm_submission} />
      </Title>
      <SubTitle>
        <FormattedMessage {...messages.confirm_submission_details} />
      </SubTitle>

      <Spacer size={40} />
      <Controller
        control={control}
        name="contact_email_address"
        // rules={emailValidation}
        render={({ field: { onChange, ref, ...rest } }) => (
          <Input
            {...rest}
            placeholder="info@anonymous.com"
            error={errors.contact_email_address}
            label={formatMessage(messages.best_contact_clan)}
            onChangeText={(text) => {
              onChange(text);
              if (errors.contact_email_address) {
                clearErrors("contact_email_address");
              }
            }}
          />
        )}
      />

      <Spacer size={6} />
      <SubTitle size={16} opacity={1}>
        <FormattedMessage {...messages.agreement} />{" "}
        <Terms size={16}>
          <FormattedMessage {...messages.terms} />
        </Terms>{" "}
        <SubTitle size={16} opacity={1}>
          <FormattedMessage {...messages.and} />
        </SubTitle>{" "}
        <Terms size={16}>
          <FormattedMessage {...messages.privacy_policy} />
        </Terms>
      </SubTitle>
    </FormStepWrapper>
  );
};
