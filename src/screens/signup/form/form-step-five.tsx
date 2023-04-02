import React from "react";
import { Controller } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";

import messages from "../messages";
import { FormStepProps } from "../../../../types";
import { Input } from "../../../components/input";
import { useFormValidation } from "../../../hooks";

import { Title, Spacer, SubTitle, FormStepWrapper } from "../signup.styles";

export const FormStepFive: React.FC<FormStepProps> = ({ errors, control }) => {
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
        name="team_name"
        control={control}
        rules={emailValidation}
        render={({ field: { onChange, ref, ...rest } }) => (
          <Input
            {...rest}
            onChangeText={onChange}
            error={errors.team_name}
            placeholder="info@anonymous.com"
            label={formatMessage(messages.best_contact_clan)}
          />
        )}
      />
    </FormStepWrapper>
  );
};
