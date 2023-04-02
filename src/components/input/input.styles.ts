import styled from "styled-components/native";

export const Container = styled.View<{ error?: boolean; isFocused: boolean }>`
  padding: 0 16px;
  min-height: 50px;
  flex-direction: row;
  border-radius: ${(p) => p.theme.layout.radius}px;
  background-color: ${(p) => {
    return p.error
      ? p.theme.hexToRGB(p.theme.palette.error, 0.08)
      : p.isFocused
      ? p.theme.hexToRGB(p.theme.palette.primary, 0.1)
      : p.theme.palette.background;
  }};
  border: 1.5px solid
    ${(p) => {
      return p.error
        ? p.theme.hexToRGB(p.theme.palette.error, 0.6)
        : p.isFocused
        ? p.theme.hexToRGB(p.theme.palette.primary, 0.4)
        : p.theme.hexToRGB(p.theme.palette.text, 0.08);
    }};
`;

export const TextInput = styled.TextInput<{ error?: boolean }>`
  flex: 1;
  letter-spacing: 0.9px;
  font-size: ${(p) => p.theme.fonts.scale.value(18)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
  color: ${(p) => (p.error ? p.theme.palette.error : p.theme.palette.text)};
`;

export const Label = styled.Text<{ error?: boolean }>`
  font-size: ${(p) => p.theme.fonts.scale.value(16)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
  color: ${(p) => (p.error ? p.theme.palette.error : p.theme.palette.text)};
`;

export const ErrorMessage = styled(Label)`
  color: ${(p) => p.theme.palette.error};
`;

export const ErrorIconContainer = styled.View`
  left: 5px;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessageContainer = styled.View`
  margin-bottom: 8px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
