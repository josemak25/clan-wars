import React, { Fragment } from "react";
import { Linking } from "react-native";
import { Controller } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import * as ImagePicker from "expo-image-picker";
import { useTheme } from "styled-components/native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

import messages from "../messages";
import { FormStepProps } from "../../../../types";
import { useLogoUpload, useFormValidation, useOnLayout } from "../../../hooks";

import {
  Image,
  Title,
  Spacer,
  SubTitle,
  UploadIcon,
  ErrorMessage,
  LogoContents,
  LogoContainer,
  UploadProgress,
  FormStepWrapper,
  ProgressSubTitle,
  UploadProgressBar,
  UploadIconContainer,
  LogoUploadContainer,
  ErrorMessageContainer,
} from "../signup.styles";

export const FormStepThree: React.FC<FormStepProps> = ({ errors, control }) => {
  const { layout, palette, hexToRGB } = useTheme();
  const [progressLayout, onLayout] = useOnLayout();
  const { clanLogoValidation } = useFormValidation();
  const [_, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const { isComplete, isLoading, progress, uploadLogo, cancelUpload } =
    useLogoUpload();

  // const progress = (progressLayout?.width || 0) - 3.5;

  const pickLogo = async (): Promise<void> => {
    const status = await requestPermission();

    if (!status?.granted && status?.canAskAgain) {
      // ask for permission again
      return pickLogo();
    }

    if (!status?.canAskAgain) {
      // redirect user to setting
      return Linking.openSettings();
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      aspect: [4, 3],
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      const uri = result.assets[0].base64 || result.assets[0].uri;
      const fileSize = getLogoSize(uri);

      console.log("====================================");
      console.log(result.assets[0], { fileSize });
      console.log("====================================");
      uploadLogo({ ...result.assets[0], uri, fileSize });
    }
  };

  return (
    <FormStepWrapper>
      <Title>
        <FormattedMessage {...messages.our_clan_logo} />
      </Title>
      <SubTitle>
        <FormattedMessage {...messages.clan_logo_details} />
      </SubTitle>

      <Spacer size={40} />
      <Controller
        name="clan_logo"
        control={control}
        rules={clanLogoValidation}
        render={() => (
          <Fragment>
            {errors.clan_logo && (
              <ErrorMessageContainer>
                <ErrorMessage>{errors.clan_logo.message}</ErrorMessage>
              </ErrorMessageContainer>
            )}

            <LogoContainer>
              <LogoContents onPress={pickLogo} error={!!errors.clan_logo}>
                <Image source={require("../../../../assets/gallery.png")} />
                <Title size={16} error={!!errors.clan_logo}>
                  <FormattedMessage {...messages.click_to_add_image} />
                </Title>
                <SubTitle size={12}>
                  <FormattedMessage {...messages.image_support} />
                </SubTitle>
              </LogoContents>

              {isLoading ? (
                <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
                  <LogoUploadContainer onLayout={onLayout}>
                    <UploadProgress
                      progress={progress}
                      isUploadComplete={isComplete}
                    />

                    <Title size={16}>
                      <FormattedMessage
                        {...messages[
                          isComplete ? "upload_completed" : "uploading_logo"
                        ]}
                      />
                    </Title>

                    {!isComplete && (
                      <Fragment>
                        <ProgressSubTitle size={12}>
                          50% • 5 seconds left
                        </ProgressSubTitle>
                        <UploadProgressBar
                          progress={progress - layout.gutter * 2}
                        />
                      </Fragment>
                    )}

                    <UploadIconContainer>
                      <UploadIcon
                        size={15}
                        mode="contained"
                        onPress={cancelUpload}
                        isUploadComplete={isComplete}
                        icon={
                          isComplete
                            ? "checkbox-marked-circle-outline"
                            : "window-close"
                        }
                        iconColor={hexToRGB(
                          isComplete ? palette.success : palette.error,
                          0.8
                        )}
                        containerColor={hexToRGB(
                          isComplete ? palette.success : palette.error,
                          0.04
                        )}
                      />
                    </UploadIconContainer>
                  </LogoUploadContainer>
                </Animated.View>
              ) : null}
            </LogoContainer>
          </Fragment>
        )}
      />
    </FormStepWrapper>
  );
};

const getLogoSize = (image: string) => {
  let y = 1;

  if (image.endsWith("==")) {
    y = 2;
  }

  const x_size = image.length * (3 / 4) - y;
  const size = x_size / 1024;
  return Number(size.toFixed(2));
};
