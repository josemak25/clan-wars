import Animated from "react-native-reanimated";
import styled, { css } from "styled-components/native";
import { IconButton as __IconButton } from "react-native-paper";

import { NextStepButton as __NextStepButton } from "../../screens/signup/signup.styles";

export { Spacer } from "../../screens/signup/signup.styles";
export {
  Label,
  ErrorMessage,
  ErrorMessageContainer,
} from "../input/input.styles";

export const Container = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.hexToRGB(p.theme.colors.light.text, 0.7)};
`;

export const MaxWidthWrapper = styled.View`
  overflow: hidden;
  border-radius: ${(p) => p.theme.layout.radius}px;
  max-width: ${(p) => p.theme.breakpoints.tablet_viewport - 50}px;
  width: ${(p) => p.theme.layout.screen.width - p.theme.layout.gutter * 2}px;
`;

export const Contents = styled.View<{ isScreenLessThanMaxWidth?: boolean }>`
  background-color: ${(p) => p.theme.palette.background};
  flex-direction: ${(p) => (p.isScreenLessThanMaxWidth ? "row" : "column")};
`;

export const Title = styled.Text<{ wrap?: boolean; isActive?: boolean }>`
  color: ${(p) => p.theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(30)}px;
  opacity: ${({ isActive = true }) => (isActive ? 1 : 0.5)};
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};

  ${(p) =>
    p.wrap &&
    css`
      width: 90%;
    `}
`;

export const SubTitle = styled(Title)`
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
`;

export const StepContainer = styled(Contents)`
  flex-direction: column;
  background-color: ${(p) => p.theme.palette.light_background};
  padding: ${(p) =>
    p.theme.layout.gutter * (p.isScreenLessThanMaxWidth ? 2 : 1)}px;
`;

export const InputContainer = styled(StepContainer)`
  background-color: ${(p) => p.theme.palette.card_background};

  ${(p) =>
    p.isScreenLessThanMaxWidth &&
    css`
      flex: 1;
    `};
`;

export const StepScrollView = styled.ScrollView.attrs<{
  isScreenLessThanMaxWidth: boolean;
}>((p) => ({
  showsHorizontalScrollIndicator: false,
  horizontal: !p.isScreenLessThanMaxWidth,
  scrollEnabled: !p.isScreenLessThanMaxWidth,
  contentContainerStyle: {
    gap: 15,
  },
}))<{
  isScreenLessThanMaxWidth: boolean;
}>``;

export const Step = styled.TouchableOpacity<{ isActive: boolean }>`
  height: 70px;
  min-width: 250px;
  border-radius: 50px;
  align-items: center;
  flex-direction: row;
  gap: ${(p) => p.theme.layout.gutter * 1.2}px;
  padding: ${(p) => p.theme.layout.gutter / 1.5}px;
  background-color: ${(p) =>
    p.isActive
      ? p.theme.hexToRGB(
          p.theme.isDarkMode
            ? p.theme.palette.background
            : p.theme.palette.text,
          p.theme.isDarkMode ? 0.6 : 0.08
        )
      : p.theme.palette.transparent};
`;

export const StepDivider = styled(Contents)`
  width: ${(p) => (p.isScreenLessThanMaxWidth ? 1 : 50)}px;
  height: ${(p) => (p.isScreenLessThanMaxWidth ? 30 : 1)}px;
  background-color: ${(p) => p.theme.hexToRGB(p.theme.palette.text, 0.1)};
  align-self: ${(p) => (p.isScreenLessThanMaxWidth ? "flex-start" : "center")};
  margin-left: ${(p) =>
    p.isScreenLessThanMaxWidth
      ? p.theme.layout.gutter * 2.2
      : p.theme.layout.gutter / 1.5}px;
`;

export const StepNumber = styled.View<{ isActive: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${(p) =>
    p.isActive ? p.theme.colors.dark.text : p.theme.palette.transparent};
  border: 1px
    ${(p) =>
      p.isActive
        ? p.theme.palette.transparent
        : p.theme.hexToRGB(p.theme.palette.text, 0.1)}
    solid;
`;

export const StepIndex = styled(Title)`
  opacity: 1;
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
  color: ${(p) =>
    p.isActive && p.theme.isDarkMode
      ? p.theme.colors.light.text
      : p.theme.palette.text};
`;

export const CloseButton = styled(__IconButton)`
  position: absolute;
  top: ${(p) => p.theme.layout.gutter / 2}px;
  right: ${(p) => p.theme.layout.gutter / 2}px;
  background-color: ${(p) => p.theme.hexToRGB(p.theme.palette.text, 0.08)};
`;

export const InputContents = styled(StepContainer)`
  background-color: ${(p) => p.theme.palette.transparent};
  width: ${(p) => (p.isScreenLessThanMaxWidth ? 95 : 100)}%;
  padding: ${(p) => (p.isScreenLessThanMaxWidth ? 80 : 20)}px 0px 0px 0px;
`;

export const NextStepButton = styled(__NextStepButton).attrs<{
  isValid: boolean;
}>((p) => ({
  buttonColor: p.theme.hexToRGB(
    p.isValid
      ? p.theme.palette.primary
      : p.theme.isDarkMode
      ? p.theme.palette.background
      : p.theme.palette.text,
    p.isValid ? 1 : p.theme.isDarkMode ? 0.6 : 0.3
  ),
}))<{
  isValid: boolean;
}>`
  border-radius: ${(p) => p.theme.layout.radius * 5}px;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${(p) => p.theme.layout.gutter}px;
  border-radius: ${(p) => p.theme.layout.radius}px;
  background-color: ${(p) =>
    p.theme.hexToRGB(
      p.theme.isDarkMode ? p.theme.palette.background : p.theme.palette.text,
      p.theme.isDarkMode ? 0.6 : 0.08
    )};
`;

export const UserIGN = styled(Title)`
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
`;

export const UserContents = styled.View`
  gap: 3px;
  margin-left: ${(p) => p.theme.layout.radius * 2}px;
`;

export const AvatarScrollView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    gap: 10,
    flexWrap: "wrap",
    flexDirection: "row",
  },
})<{}>`
  margin: 8px 0px;
`;

export const Avatar = styled.TouchableOpacity`
  border-radius: 100%;
`;
