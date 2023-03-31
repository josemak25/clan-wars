import React from "react";
import dayjs from "dayjs";

import { ICODMCp } from "../../../types";
import { formatCurrency } from "../../helpers";
import {
  Name,
  Timer,
  Title,
  Footer,
  Wrapper,
  Profile,
  Container,
  BorderLine,
  ButtonText,
  CodSubtitle,
  Description,
  FirstButton,
  PriceTrophy,
  SecondButton,
  ThirdButton,
  PriceWrapper,
  FooterButton,
  ProfileDetail,
  ProfilePicture,
  PriceSubtitle,
  PriceContainer,
  ButtonContainer,
  BackgroundImage,
  ContentContainer,
  ButtonFooterContainer,
} from "./card.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { APP_NAME } from "../../constants";

type CardProps = ICODMCp & {
  onPress: VoidFunction;
};

export const Card: React.FC<CardProps> = (props) => {
  // const { amount, image, cover, old_amount, title } = props;

  return (
    <Container>
      <Wrapper>
        <BackgroundImage
          source={{
            uri: "https://c4.wallpaperflare.com/wallpaper/448/153/260/cod-black-ops-2-wallpaper-preview.jpg",
          }}
        />

        <ContentContainer>
          <Timer>{dayjs().format("dddd, DD MMMM")}.Starting at 6: 00 AM</Timer>
          <Title>COD: Warzone Platinum Tournament</Title>

          <ButtonContainer>
            <FirstButton>
              <ButtonText>COZ Warzone</ButtonText>
            </FirstButton>

            <SecondButton>
              <ButtonText>pc</ButtonText>
            </SecondButton>

            <ThirdButton>
              <ButtonText>Invitational</ButtonText>
            </ThirdButton>
          </ButtonContainer>

          <BorderLine
            style={{
              borderBottomColor: "grey",
              borderWidth: 0.5,
              marginTop: 20,
            }}
          />

          <PriceContainer>
            <PriceWrapper>
              <CodSubtitle>Price Pool</CodSubtitle>
              <PriceTrophy>
                <Ionicons size={16} name={"trophy"} color="grey" />
                <PriceSubtitle>$400</PriceSubtitle>
              </PriceTrophy>
            </PriceWrapper>

            <PriceWrapper>
              <CodSubtitle>Team Size</CodSubtitle>
              <PriceTrophy>
                <Ionicons size={16} name={"person-outline"} color="grey" />
                <PriceSubtitle>3VS3</PriceSubtitle>
              </PriceTrophy>
            </PriceWrapper>

            <PriceWrapper>
              <CodSubtitle>Paticipantices</CodSubtitle>
              <PriceTrophy>
                <Ionicons size={16} name={"time"} color="grey" />
                <PriceSubtitle>13/256</PriceSubtitle>
              </PriceTrophy>
            </PriceWrapper>
          </PriceContainer>
        </ContentContainer>

        <Footer>
          <Profile>
            <ProfilePicture
              source={{
                uri: "https://leadership.ng/wp-content/uploads/2023/03/davido.png",
              }}
            />

            <ProfileDetail>
              <Description>Organised by</Description>
              <Name>{APP_NAME}</Name>
            </ProfileDetail>
          </Profile>

          <FooterButton>
            <ButtonText>Event Details</ButtonText>
            <Ionicons size={16} name="arrow-forward-circle" color="white" />
          </FooterButton>
        </Footer>
      </Wrapper>
    </Container>
  );
};
