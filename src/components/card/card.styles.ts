import { Button } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled(Button)`
  flex: 1;
  height: 600px;
  max-width: 500px;
  flex-direction: column;
  width: ${({ theme }) => theme.layout.gutter - 40}px;
`;

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  border-radius: 10px;
  /* border-top-left-radius: 10px;
  border-top-right-radius: 10px; */
  padding: ${(p) => p.theme.layout.gutter}px;
  background-color: ${({ theme }) => theme.palette.background};
`;

export const BackgroundImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

export const ContentContainer = styled.View`
  flex-direction: column;
  padding-top: ${(p) => p.theme.layout.gutter}px;
`;

export const TimerHolder = styled.View`
  flex-direction: column;
`;

export const Timer = styled.Text`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.palette.text};
  font-size: ${(p) => p.theme.fonts.scale.value(14)}px;
  font-family: ${(p) => p.theme.fonts.variants.roboto_regular};
`;

export const Title = styled(Timer)`
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: ${(p) => p.theme.layout.gutter}px;
`;

export const FirstButton = styled(Button).attrs((p) => ({
  textColor: p.theme.colors.dark.text,
  buttonColor: p.theme.palette.transparent,
  contentStyle: {
    minWidth: 100,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: p.theme.layout.gutter / 3,
  },
  labelStyle: {
    textTransform: "capitalize",
    fontSize: p.theme.fonts.scale.value(18),
    fontFamily: p.theme.fonts.variants.roboto_regular,
  },
}))`
  margin-left: 5px;
  border-radius: ${(p) => p.theme.layout.radius}px;
  border: 0.5px solid ${({ theme }) => theme.palette.text};
`;

export const ButtonText = styled(Timer)`
  text-align: center;
`;

export const SecondButton = styled(FirstButton).attrs((p) => ({
  contentStyle: {
    paddingVertical: 2,
    paddingHorizontal: p.theme.layout.gutter / 5,
  },
  labelStyle: {
    textTransform: "capitalize",
    fontFamily: p.theme.fonts.variants.roboto_regular,
  },
}))``;

export const ThirdButton = styled(FirstButton).attrs((p) => ({
  contentStyle: {
    paddingVertical: 2,
    paddingHorizontal: p.theme.layout.gutter / 3,
  },
  labelStyle: {
    fontFamily: p.theme.fonts.variants.roboto_regular,
  },
}))``;

export const BorderLine = styled.View``;

export const PriceContainer = styled.View`
  flex-direction: row;
  margin-top: 25px;
  padding-top: ${(p) => p.theme.layout.gutter / 2}px;
`;

export const PriceWrapper = styled.View`
  margin-left: 15px;
  align-items: center;
  flex-direction: column;
`;

export const CodSubtitle = styled(Timer)``;

export const PriceTrophy = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: center;
`;

export const PriceSubtitle = styled(Title)`
  margin-left: 3px;
  font-weight: 700;
  font-size: ${(p) => p.theme.fonts.scale.value(18)}px;
`;

export const Footer = styled.View`
  /* border: 2px solid red; */
  flex-direction: row;
  border-top: 1px solid grey;
  padding: 15px 0px;
  padding: 15px 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  /* background-color: ${({ theme }) => theme.palette.footerBackground}; */
`;

export const Profile = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ProfilePicture = styled.Image`
  width: 55px;
  border-radius: ${(p) => p.theme.layout.radius * 5}px;
`;

export const ProfileDetail = styled.View`
  margin-left: 8px;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  /* border: 1px solid green; */
`;

export const Description = styled(Title)`
  margin-bottom: 2px;
  font-size: ${(p) => p.theme.fonts.scale.value(13)}px;
`;

export const Name = styled(Title)`
  font-size: ${(p) => p.theme.fonts.scale.value(20)}px;
`;

export const ButtonFooterContainer = styled(ButtonContainer)`
  flex-direction: row;
  justify-content: flex-end;
`;

export const FooterButton = styled(FirstButton).attrs((p) => ({
  buttonColor: p.theme.palette.primary,
  contentStyle: {
    paddingVertical: 3,
    paddingHorizontal: p.theme.layout.gutter / 2,
  },
}))`
  border: 0px;
`;
