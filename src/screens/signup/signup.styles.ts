import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Button as __Button,
  IconButton as __IconButton,
} from "react-native-paper";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding-top: ${(p) => p.theme.layout.gutter * 2}px;
  background-color: ${(p) => p.theme.palette.background};
`;

export const MaxWidthContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 0px ${(p) => p.theme.layout.gutter}px;
  max-width: ${(p) => p.theme.breakpoints.tablet_viewport - 100}px;
`;

export const HeaderContainer = styled.ScrollView.attrs((p) => ({
  bounces: false,
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    height: 60,
    flexGrow: 1,
    borderWidth: 1,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    borderRadius: p.theme.layout.radius,
    borderColor: p.theme.hexToRGB(p.theme.palette.text, 0.08),
  },
}))`
  width: 100%;
  max-height: 60px;
  margin-bottom: 40px;
`;

export const Title = styled(Text)`
  color: ${(p) => p.theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(35)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_bold};
`;

export const SubTitle = styled(Title)`
  opacity: 0.6;
  margin-top: 10px;
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
`;

export const Spacer = styled.View<{ size?: number }>`
  height: ${(p) => p.size || 0}px;
`;

export const ItemSeparatorComponent = styled.View`
  height: 50%;
  margin: 0px 12px;
  align-self: center;
  border: 0.5px ${(p) => p.theme.hexToRGB(p.theme.palette.text, 0.08)} solid;
`;

export const ButtonContainer = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StepTitle = styled(Title)`
  text-transform: capitalize;
  font-size: ${(p) => p.theme.fonts.scale.value(16)}px;
`;

export const StepSubTitle = styled(SubTitle)`
  margin: 0px;
  opacity: 0.6;
  color: ${(p) => p.theme.palette.primary};
  font-size: ${(p) => p.theme.fonts.scale.value(15)}px;
`;

export const IconButton = styled(__IconButton)`
  cursor: pointer;
  transition: 150ms background-color;

  &:hover {
    background-color: red;
  }
`;

export const IconButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconButtonContents = styled.View`
  margin-left: 5px;
  margin-right: 5px;
`;

export const NextStepButton = styled(__Button).attrs((p) => ({
  textColor: p.theme.colors.dark.text,
  buttonColor: p.theme.palette.primary,
  contentStyle: {
    minWidth: 120,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: p.theme.layout.gutter,
  },
  labelStyle: {
    textTransform: "capitalize",
    fontSize: p.theme.fonts.scale.value(20),
    fontFamily: p.theme.fonts.variants.roboto_regular,
  },
}))`
  border-radius: ${(p) => p.theme.layout.radius}px;
`;

export const GoBackButton = styled(NextStepButton).attrs<{
  $buttonColor: string;
}>((p) => ({
  icon: "keyboard-backspace",
  buttonColor: p.theme.palette.transparent,
  textColor: p.theme.hexToRGB(p.theme.palette.text, 0.5),
}))`
  margin: 0px ${(p) => p.theme.layout.gutter}px;
`;
