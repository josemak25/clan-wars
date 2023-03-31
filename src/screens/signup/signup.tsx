import React, { Fragment, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { FormattedMessage, useIntl } from "react-intl";
import { Controller, useForm } from "react-hook-form";

import messages from "./messages";
import { generateId } from "../../helpers";
import { Input } from "../../components/input";
import { RootStackScreenProps } from "../../../types/navigation";
import { ISignupUser } from "../../providers/store/reducers/session/interfaces";

import {
  Title,
  Spacer,
  SubTitle,
  Container,
  StepTitle,
  IconButton,
  GoBackButton,
  StepSubTitle,
  NextStepButton,
  ButtonContainer,
  HeaderContainer,
  MaxWidthContainer,
  IconButtonContents,
  IconButtonContainer,
  ItemSeparatorComponent,
} from "./signup.styles";

const defaultForm = [
  {
    icon: "android",
    isActive: true,
    id: generateId(),
    highlighted: true,
    title: "type of service",
  },
  {
    isActive: false,
    id: generateId(),
    icon: "basketball",
    highlighted: true,
    title: "contact details",
  },
  {
    icon: "ansible",
    isActive: false,
    id: generateId(),
    highlighted: true,
    title: "written content",
  },
  {
    icon: "camera",
    isActive: false,
    id: generateId(),
    highlighted: true,
    title: "illustration",
  },
  {
    isActive: false,
    id: generateId(),
    highlighted: true,
    icon: "alarm-bell",
    title: "project bracket",
  },
  {
    isActive: false,
    id: generateId(),
    icon: "gauge-full",
    title: "confirmation",
  },
];

export const SignUpScreen: React.FC<RootStackScreenProps<"SignUpScreen">> = ({
  navigation,
}) => {
  const { formatMessage } = useIntl();
  const { palette, colors, hexToRGB } = useTheme();
  const [formSteps, setFormSteps] = useState(defaultForm);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupUser>();

  const onSubmit: SubmitHandler<ISignupUser> = (data) => {};

  const isLastPageOfFormActive = formSteps[formSteps.length - 1].isActive;

  const handleFormStep = (id: string) => {
    const steps = formSteps.map((step) => ({
      ...step,
      isActive: step.id === id ? true : false,
    }));

    setFormSteps(steps);
  };

  return (
    <Container>
      <MaxWidthContainer>
        <HeaderContainer>
          {formSteps.map(
            ({ icon, id, title, isActive, highlighted }, index) => (
              <Fragment key={id}>
                <IconButtonContainer>
                  <IconButton
                    icon={icon}
                    mode="contained"
                    onPress={() => handleFormStep(id)}
                    iconColor={
                      isActive
                        ? colors.dark.text
                        : hexToRGB(palette.primary, 0.6)
                    }
                    containerColor={
                      isActive
                        ? palette.primary
                        : hexToRGB(palette.primary, 0.06)
                    }
                  />
                  {isActive && (
                    <IconButtonContents>
                      <StepSubTitle>
                        Step {++index}/{formSteps.length}
                      </StepSubTitle>
                      <StepTitle>{title}</StepTitle>
                    </IconButtonContents>
                  )}
                </IconButtonContainer>

                {highlighted && <ItemSeparatorComponent />}
              </Fragment>
            )
          )}
        </HeaderContainer>

        <Title>
          <FormattedMessage {...messages.meet_you} />
        </Title>
        <SubTitle>
          <FormattedMessage {...messages.fill_details} />
        </SubTitle>

        <Spacer size={40} />
        <Controller
          control={control}
          name="email_address"
          // rules={emailValidation}
          render={({ field: { onChange, ref, ...rest } }) => (
            <Input
              {...rest}
              onChangeText={onChange}
              placeholder="Tom Bekker"
              error={errors.email_address}
              label={formatMessage(messages.enter_your_name)}
            />
          )}
        />

        <Spacer size={30} />
        <Controller
          control={control}
          name="email_address"
          // rules={emailValidation}
          render={({ field: { onChange, ref, ...rest } }) => (
            <Input
              {...rest}
              onChangeText={onChange}
              placeholder="Tom Bekker"
              // error={errors.email_address}
              label={formatMessage(messages.enter_your_name)}
              error={{ type: "required", message: "Your name is required" }}
            />
          )}
        />

        <ButtonContainer>
          <GoBackButton onPress={() => {}}>
            <FormattedMessage {...messages.back} />
          </GoBackButton>
          <NextStepButton onPress={() => {}}>
            <FormattedMessage
              {...messages[
                isLastPageOfFormActive ? "complete_submission" : "next_step"
              ]}
            />
          </NextStepButton>
        </ButtonContainer>
      </MaxWidthContainer>
    </Container>
  );
};
