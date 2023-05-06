import styled from "styled-components/native";

import { NextStepButton } from "../../screens/signup/signup.styles";
import {
  Contents as __Contents,
  MaxWidthWrapper as __MaxWidthWrapper,
} from "../add-player-modal/add-player-modal.styles";

export {
  Title,
  Spacer,
  SubTitle,
  Container,
} from "../add-player-modal/add-player-modal.styles";

export const Button = styled(NextStepButton).attrs((p) => ({
  textColor: p.theme.colors.dark.text,
  buttonColor: p.theme.palette.primary,
  labelStyle: {
    textTransform: "none",
    fontSize: p.theme.fonts.scale.value(20),
    fontFamily: p.theme.fonts.variants.roboto_regular,
  },
}))`
  width: 100%;
`;

export const Contents = styled(__Contents)`
  align-items: center;
  flex-direction: column;
  border-radius: ${(p) => p.theme.layout.radius}px;
  padding: ${(p) => p.theme.layout.gutter * 1.5}px
    ${(p) => p.theme.layout.gutter * 2}px;
`;

export const MaxWidthWrapper = styled(__MaxWidthWrapper)`
  overflow: unset;
  max-width: ${(p) => p.theme.breakpoints.tablet_viewport / 2}px;
`;

export const CheckBox = styled.View`
  top: -40px;
  z-index: 2;
  min-width: 80px;
  min-height: 80px;
  align-self: center;
  position: absolute;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.palette.success};
  max-width: ${(p) => p.theme.breakpoints.tablet_viewport / 2}px;
`;
