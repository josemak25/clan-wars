import React, { Fragment, PropsWithChildren, useState } from "react";
import { FieldError } from "react-hook-form";
import { useTheme } from "styled-components/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TextInputProps, TextInput as __TextInput } from "react-native";

import {
  Label,
  Container,
  TextInput,
  ErrorMessage,
  ErrorIconContainer,
  ErrorMessageContainer,
} from "./input.styles";

type InputProps = {
  name?: string;
  label?: string;
  error?: FieldError;
  playerId?: boolean;
} & TextInputProps;

export const Input = React.forwardRef<
  __TextInput,
  PropsWithChildren<InputProps>
>((props, ref) => {
  const { palette, hexToRGB } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const {
    error,
    label,
    value,
    children,
    textContentType,
    playerId = false,
    ...restProps
  } = props;

  return (
    <Fragment>
      <ErrorMessageContainer>
        {label && <Label error={!!error}>{label}</Label>}
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </ErrorMessageContainer>
      <Container error={!!error} isFocused={isFocused}>
        <TextInput
          ref={ref}
          {...restProps}
          error={!!error}
          defaultValue={value} // this helps omit controlled form input error from react-hooks-form
          onFocus={(e) => {
            restProps?.onFocus?.(e);
            setIsFocused(!isFocused);
          }}
          onBlur={(e) => {
            restProps?.onBlur?.(e);
            setIsFocused(!isFocused);
          }}
          placeholderTextColor={hexToRGB(
            error ? palette.error : palette.text,
            error ? 1 : 0.4
          )}
        />

        {children}

        {error && (
          <ErrorIconContainer>
            <MaterialIcons
              size={20}
              name="error-outline"
              color={palette.error}
            />
          </ErrorIconContainer>
        )}
      </Container>
    </Fragment>
  );
});
