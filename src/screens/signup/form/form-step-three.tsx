import React, { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { Controller } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { Linking, Platform } from "react-native";
import { useTheme } from "styled-components/native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

import messages from "../messages";
import { getLogoSize } from "../../../helpers";
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
  Label,
} from "../signup.styles";

export const FormStepThree: React.FC<FormStepProps> = ({
  watch,
  errors,
  control,
  setValue,
  setError,
  clearErrors,
}) => {
  const { layout, palette, hexToRGB } = useTheme();
  const [progressLayout, onLayout] = useOnLayout();
  const { clanLogoValidation } = useFormValidation();
  const [_, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const {
    isLoading,
    isComplete,
    uploadLogo,
    cancelUpload,
    progress: uploadedProgress,
  } = useLogoUpload();

  const progress =
    (Number(progressLayout?.width || 0) / 100) *
    (isComplete ? 100 : uploadedProgress);

  const [clan_logo, clan_name] = watch(["clan_logo", "clan_name"]);

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
      base64: true,
      aspect: [4, 3],
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.canceled) return;

    const file = result.assets[0];
    const EXTENSIONS = ["png", "jpeg", "jpg", "gif"];
    const extension = Platform.select({
      web: file.uri?.split(";")[0].split("/")[1],
      default: file.uri.substring(file.uri.length - 4).split(".")[1],
    });

    if (!EXTENSIONS.includes(extension)) {
      return setError("clan_logo", { message: "Image format not supported" });
    }

    const fileSize = getLogoSize(file.uri!, file.fileSize);

    if (fileSize > 600) {
      return setError("clan_logo", { message: "Max file size is 500kb" });
    }

    if (errors.clan_logo) {
      clearErrors("clan_logo");
    }

    const fileName = `${clan_name.trim().split(" ").join("-")}-${
      file.fileName || Date.now()
    }`.toLowerCase();

    uploadLogo({ ...file, extension, fileName })
      .then((url) => setValue("clan_logo", url))
      .catch((error) => setError("clan_logo", { message: error.message }));
  };

  const handleCancelUpload = () => {
    setValue("clan_logo", "");
    cancelUpload();
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
            <ErrorMessageContainer>
              <Label error={!!errors.team?.message}>
                <FormattedMessage {...messages.pick_a_clan_logo} />
              </Label>

              {errors.clan_logo && (
                <ErrorMessage>{errors.clan_logo.message}</ErrorMessage>
              )}
            </ErrorMessageContainer>

            <LogoContainer>
              <LogoContents onPress={pickLogo} error={!!errors.clan_logo}>
                <Image
                  source={require("../../../../assets/gallery.png")}
                  defaultSource={require("../../../../assets/gallery.png")}
                />
                <Title size={16} error={!!errors.clan_logo}>
                  <FormattedMessage {...messages.click_to_add_image} />
                </Title>
                <SubTitle size={12}>
                  <FormattedMessage {...messages.image_support} />
                </SubTitle>
              </LogoContents>

              {isLoading || clan_logo ? (
                <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
                  <LogoUploadContainer onLayout={onLayout}>
                    <UploadProgress
                      progress={progress}
                      isUploadComplete={isComplete}
                    />

                    <Title size={16} zIndex={1}>
                      <FormattedMessage
                        {...messages[
                          isComplete ? "upload_completed" : "uploading_logo"
                        ]}
                      />
                    </Title>

                    {!isComplete && (
                      <Fragment>
                        <ProgressSubTitle size={12}>
                          {uploadedProgress}%{/* • {timeLeft} seconds left */}
                        </ProgressSubTitle>
                        <UploadProgressBar
                          progress={progress ? progress - layout.gutter * 2 : 0}
                        />
                      </Fragment>
                    )}

                    <UploadIconContainer>
                      <UploadIcon
                        size={15}
                        mode="contained"
                        onPress={handleCancelUpload}
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
