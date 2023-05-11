import React, { Fragment, useMemo } from "react";
import { Controller } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import { useTheme } from "styled-components/native";

import { Icon } from "../icon";
import messages from "./messages";
import { chunk } from "../../helpers";
import { FormStepProps } from "../../../types";
import { avatarList } from "../icon/interface";
import { useFormValidation } from "../../hooks";
import { ITournamentTeam } from "../../providers/store/reducers/participants/interfaces";

import {
  Label,
  Spacer,
  Avatar,
  ErrorMessage,
  InputContents,
  NextStepButton,
  AvatarScrollView,
  ErrorMessageContainer,
} from "./add-player-modal.styles";

type FormStepOneProps = {
  player?: ITournamentTeam;
  onButtonPress: VoidFunction;
  isScreenLessThanMaxWidth: boolean;
} & Partial<FormStepProps<Partial<ITournamentTeam>>>;

export const FormStepTwo: React.FC<FormStepOneProps> = ({
  watch,
  player,
  errors,
  control,
  setValue,
  clearErrors,
  onButtonPress,
  isScreenLessThanMaxWidth,
}) => {
  const { palette } = useTheme();
  const { avatarValidation } = useFormValidation();
  const avatar = watch?.("avatar") || player?.avatar;
  const chunks = useMemo(() => chunk(avatarList, avatarList.length / 2), []);

  return (
    <InputContents isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}>
      <Controller
        name="avatar"
        control={control}
        rules={avatarValidation}
        defaultValue={player?.avatar}
        render={() => (
          <Fragment>
            <ErrorMessageContainer>
              {<Label error={!!errors?.avatar}>Click to pick an image</Label>}
              {errors?.avatar && (
                <ErrorMessage>{errors?.avatar.message}</ErrorMessage>
              )}
            </ErrorMessageContainer>

            {chunks.map((chunk, key) => (
              <AvatarScrollView key={key}>
                {chunk.map((name) => (
                  <Avatar
                    key={name}
                    onPress={() => {
                      if (errors?.avatar) {
                        clearErrors?.("avatar");
                      }
                      setValue?.("avatar", name);
                    }}
                  >
                    <Icon
                      name="avatar"
                      avatarId={name}
                      color={name === avatar ? palette.primary : undefined}
                    />
                  </Avatar>
                ))}
              </AvatarScrollView>
            ))}
          </Fragment>
        )}
      />

      <Spacer size={60} />
      <NextStepButton
        isValid={!!avatar}
        onPress={onButtonPress}
        style={{
          elevation: 5,
          shadowRadius: 3.84,
          shadowOpacity: 0.25,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
        }}
      >
        <FormattedMessage {...messages.save} />
      </NextStepButton>
    </InputContents>
  );
};
