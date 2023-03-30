import React, { Fragment, PropsWithChildren, useState } from "react";
import { useDispatch } from "react-redux";
import { FieldError } from "react-hook-form";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTheme } from "styled-components/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleProp, ViewStyle, TextInputProps } from "react-native";

import { Icon, IconType } from "../icon";
import { settingsActions } from "../../providers/store/reducers";

import {
  Label,
  Container,
  TextInput,
  ShowButton,
  ErrorMessage,
  PlayerIdButton,
  ErrorIconContainer,
} from "./input.styles";

type InputProps = {
  name?: string;
  label?: string;
  error?: FieldError;
  playerId?: boolean;
  left_icon?: IconType;
  right_icon?: IconType;
  containerStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

export const Input: React.FC<PropsWithChildren<InputProps>> = (props) => {
  const dispatch = useDispatch();
  const { palette, colors, hexToRGB } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const {
    error,
    label,
    children,
    left_icon,
    right_icon,
    textContentType,
    playerId = false,
    containerStyle = {},
    ...restProps
  } = props;

  const showPasswordToggle = !error && textContentType === "password";
  const secureTextEntry = textContentType === "password" && !isPasswordShown;

  const shadow = {
    elevation: 1,
    shadowRadius: 1.0,
    shadowOpacity: 0.18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
  };

  return (
    <Fragment>
      {label && <Label>{label}</Label>}
      <Container
        error={!!error}
        isFocused={isFocused}
        //@ts-ignore
        style={containerStyle}
      >
        {left_icon && <Icon name={left_icon} />}
        <TextInput
          {...restProps}
          onFocus={(e) => {
            restProps?.onFocus?.(e);
            setIsFocused(!isFocused);
          }}
          onBlur={(e) => {
            restProps?.onBlur?.(e);
            setIsFocused(!isFocused);
          }}
          textContentType={textContentType}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={hexToRGB(
            error ? palette.ERROR_COLOR : palette.LIGHT_TEXT_COLOR,
            0.4
          )}
        />

        {showPasswordToggle && (
          <ShowButton
            style={shadow}
            onPress={() => setIsPasswordShown(!isPasswordShown)}
          >
            <Ionicons
              size={15}
              color={palette.TEXT_COLOR}
              name={isPasswordShown ? "eye-off-outline" : "eye-outline"}
            />
          </ShowButton>
        )}

        {playerId && (
          <PlayerIdButton
            style={shadow}
            onPress={() => dispatch(settingsActions.togglePlayerIdInfoModal())}
          >
            <AntDesign
              size={15}
              name="question"
              color={colors.dark.TEXT_COLOR}
            />
          </PlayerIdButton>
        )}

        {children}

        {error && (
          <ErrorIconContainer>
            <MaterialIcons
              size={20}
              name="error-outline"
              color={hexToRGB(palette.ERROR_COLOR, 0.8)}
            />
          </ErrorIconContainer>
        )}

        {right_icon && <Icon name={right_icon} />}
      </Container>

      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Fragment>
  );
};
