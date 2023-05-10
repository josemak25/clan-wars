import React, { Fragment, useMemo, useState } from "react";
import dayjs from "dayjs";
import { Platform } from "react-native";
import { FormattedMessage } from "react-intl";
import { useTheme } from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  BottomSheetModal,
  BottomSheetBackdropProps,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

import { Icon } from "../icon";
import messages from "./messages";
import { APP_NAME } from "../../constants";
import { Providers } from "../../providers";
import { formatCurrency } from "../../helpers";
import { useResponsiveScreen } from "../../hooks";
import { BottomSheetBackdrop } from "../modal-backdrop";
import { ITournament } from "../../providers/store/reducers/tournament/interfaces";
import { ITournamentTeam } from "../../providers/store/reducers/participants/interfaces";

import {
  Title,
  Button,
  Spacer,
  SubTitle,
  Container,
  TimerIcon,
  RefNumber,
  PlayerName,
  TimeInfoText,
  ButtonWrapper,
  PlayerNameRow,
  AmountDivider,
  ButtonContainer,
  AmountContainer,
  PlayerAvatarRow,
  PlayersContainer,
  GameInfoContainer,
  TimerInfoContainer,
  PaymentInfoContainer,
} from "./confirm-payment-modal.styles";

type ConfirmPaymentModalProps = {
  team: ITournamentTeam[];
  confirmPayment: VoidFunction;
  selectedTournament: ITournament | null;
  bottomSheetRef: React.RefObject<BottomSheetModalMethods>;
};

export const ConfirmPaymentModal: React.FC<ConfirmPaymentModalProps> = ({
  team,
  bottomSheetRef,
  confirmPayment,
  selectedTournament,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { isMinScreenSize, isDesktopOrLaptop } = useResponsiveScreen();
  const { palette, layout, hexToRGB, isDarkMode, breakpoints } = useTheme();

  const initialSnapPoints = useMemo(() => ["CONTENT_HEIGHT"], []);

  const {
    animatedSnapPoints,
    handleContentLayout,
    animatedHandleHeight,
    animatedContentHeight,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const MAX_WIDTH =
    breakpoints.tablet_viewport / Platform.select({ default: 1.5, web: 1.3 });
  const isScreenLessThanMaxWidth = isMinScreenSize(MAX_WIDTH);

  const onClose = () => bottomSheetRef.current?.close();

  const BackdropComponent = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...props} closeModal={onClose} />
  );

  const handleConfirm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      confirmPayment();
    }, 500);
  };

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      enablePanDownToClose
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      backdropComponent={BackdropComponent}
      handleIndicatorStyle={{ opacity: 0.3 }}
      containerStyle={[
        { width: "100%", maxWidth: MAX_WIDTH },
        isScreenLessThanMaxWidth && {
          marginLeft: (layout.screen.width - MAX_WIDTH) / 2,
        },
      ]}
      backgroundStyle={{ backgroundColor: palette.light_card_background }}
    >
      <Providers>
        <Container
          onLayout={handleContentLayout}
          isDesktopOrLaptop={isDesktopOrLaptop}
        >
          <Title>
            <FormattedMessage {...messages.title} />
          </Title>
          <Spacer size={10} />
          <SubTitle>
            <FormattedMessage
              {...messages.subtitle}
              values={{
                amount: formatCurrency(
                  Number(selectedTournament?.registration_fee)
                ),
              }}
            />
          </SubTitle>

          <Spacer size={20} />
          <GameInfoContainer>
            <TimerIcon>
              <MaterialCommunityIcons
                size={28}
                name="timer"
                color={hexToRGB(palette.text, 0.4)}
              />
            </TimerIcon>
            <TimerInfoContainer>
              <TimeInfoText>
                {dayjs(selectedTournament?.start_date).format("MMM D, hh:mm a")}
                {dayjs(selectedTournament?.end_date).format(
                  "  •  MMM D, hh:mm a"
                )}
              </TimeInfoText>
              <Spacer size={3} />
              <RefNumber>
                {APP_NAME}.com/
                {selectedTournament?.id.substring(0, 8)}...
                {selectedTournament?.id.substring(10, 18)}
              </RefNumber>
            </TimerInfoContainer>
          </GameInfoContainer>

          <Spacer size={15} />
          <PaymentInfoContainer>
            <Ionicons
              size={24}
              name="information-circle-outline"
              color={hexToRGB(palette.text, 0.3)}
            />
            <Title size={18}>
              <FormattedMessage {...messages.info} />
            </Title>
          </PaymentInfoContainer>

          <Spacer size={30} />
          <PlayersContainer>
            <PlayerAvatarRow minWidth={38 * team.length}>
              {team.map(({ avatar, id }, index) => (
                <Icon
                  key={id}
                  size={40}
                  name="avatar"
                  avatarId={avatar}
                  containerStyle={{
                    borderWidth: 3,
                    left: 30 * index,
                    position: "absolute",
                    borderColor: isDarkMode
                      ? palette.light_card_background
                      : palette.card_background,
                  }}
                />
              ))}
            </PlayerAvatarRow>

            <PlayerNameRow>
              {team.slice(0, team.length / 2).map(({ player_ign }, index) => (
                <PlayerName
                  key={player_ign}
                  isDesktopOrLaptop={isDesktopOrLaptop}
                >
                  {player_ign}
                  {index === 0 ? ", " : " "}
                </PlayerName>
              ))}

              {team.length / 2 >= 1 && (
                <Fragment>
                  <PlayerName isDesktopOrLaptop={isDesktopOrLaptop}>
                    <FormattedMessage {...messages.and} />{" "}
                  </PlayerName>

                  <PlayerName isDesktopOrLaptop={isDesktopOrLaptop} isBold>
                    <FormattedMessage
                      {...messages.others}
                      values={{ num: team.length / 2 }}
                    />
                  </PlayerName>
                </Fragment>
              )}
            </PlayerNameRow>
          </PlayersContainer>

          <Spacer size={10} />
          <AmountDivider />

          <AmountContainer>
            <Title>
              <FormattedMessage {...messages.total_amount} />
            </Title>

            <SubTitle size={35}>
              {formatCurrency(Number(selectedTournament?.registration_fee))}
            </SubTitle>
          </AmountContainer>

          <Spacer size={30} />
          <ButtonContainer isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}>
            <ButtonWrapper size={0.6}>
              <Button
                isCancel
                onPress={onClose}
                mode="outlined"
                style={{ borderColor: hexToRGB(palette.text, 0.2) }}
              >
                Cancel
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button loading={isLoading} onPress={handleConfirm}>
                Confirm and Submit
              </Button>
            </ButtonWrapper>
          </ButtonContainer>
        </Container>
      </Providers>
    </BottomSheetModal>
  );
};
