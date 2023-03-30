import styled from "styled-components/native";

export const Container = styled.View<{ error?: boolean; isFocused: boolean }>`
  padding: 0 16px;
  min-height: 38px;
  border-radius: 5px;
  flex-direction: row;
  background-color: ${({ theme, error }) => {
    return error
      ? theme.hexToRGB(theme.palette.ERROR_COLOR, 0.02)
      : theme.palette.INPUT_COLOR;
  }};
  border: 1px solid
    ${({ theme, error, isFocused }) => {
      if (error) {
        return theme.hexToRGB(theme.palette.ERROR_COLOR, 0.3);
      }

      if (isFocused) {
        return theme.isDarkMode
          ? theme.palette.INPUT_BORDER_COLOR
          : theme.hexToRGB(theme.palette.INPUT_COLOR, 0.4);
      }

      return theme.isDarkMode
        ? theme.palette.LIGHT_TEXT_COLOR
        : theme.palette.INPUT_BORDER_COLOR;
    }};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  letter-spacing: 0.9px;
  color: ${({ theme }) => theme.palette.TEXT_COLOR};
  font-family: ${({ theme }) => theme.fonts.CIRCULAR_REGULAR};
`;

export const ErrorMessage = styled.Text`
  margin-top: 8px;
  color: ${({ theme }) => theme.palette.ERROR_COLOR};
  font-size: ${({ theme }) => theme.font.value(12)}px;
  font-family: ${({ theme }) => theme.fonts.CIRCULAR_MEDIUM};
`;

export const Label = styled.Text`
  margin-bottom: 8px;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.font.value(14)}px;
  color: ${({ theme }) => theme.palette.LIGHT_TEXT_COLOR};
  font-family: ${({ theme }) => theme.fonts.CIRCULAR_REGULAR};
`;

export const ShowButton = styled.Pressable`
  left: 8px;
  margin: auto;
  height: 22.8px;
  padding: 0 10px;
  margin-left: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.isDarkMode
      ? theme.palette.LIGHT_TEXT_COLOR
      : theme.palette.WHITE_COLOR};
`;

export const PlayerIdButton = styled(ShowButton)`
  background-color: #6242fc;
`;

export const ErrorIconContainer = styled.View`
  left: 10px;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
`;
