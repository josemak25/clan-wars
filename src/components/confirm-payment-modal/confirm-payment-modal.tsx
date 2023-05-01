import React, { Fragment, useMemo, useState } from "react";
import dayjs from "dayjs";
import { FormattedMessage } from "react-intl";
import { useTheme } from "styled-components/native";

import {
  BottomSheetModal,
  BottomSheetBackdropProps,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

import { Icon } from "../icon";
import messages from "./messages";
import { Providers } from "../../providers";
import { useResponsiveScreen } from "../../hooks";
import { BottomSheetBackdrop } from "../modal-backdrop";
import {
  ITournament,
  ITournamentTeam,
} from "../../providers/store/reducers/tournament/interfaces";

import {
  Title,
  Spacer,
  SubTitle,
  Container,
  TimerIcon,
  RefNumber,
  PlayerName,
  TimeInfoText,
  SubmitButton,
  PlayerNameRow,
  PlayerAvatarRow,
  PlayersContainer,
  GameInfoContainer,
  TimerInfoContainer,
} from "./confirm-payment-modal.styles";
import { Platform } from "react-native";
import { formatCurrency } from "../../helpers";

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
    }, 1000);
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
          isDesktopOrLaptop={isDesktopOrLaptop}
          onLayout={(event) => {
            console.log(event);
            handleContentLayout(event);
          }}
        >
          <Title>
            <FormattedMessage {...messages.title} />
          </Title>
          <Spacer size={20} />
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

          <Spacer size={30} />
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
                {dayjs(selectedTournament?.start_date).format(
                  "MMM D, hh:mm a - hh:mm a"
                )}
              </TimeInfoText>
              <Spacer size={3} />
              <RefNumber>
                clanwars.com/
                {selectedTournament?.id.substring(0, 8)}...
                {selectedTournament?.id.substring(10, 18)}
              </RefNumber>
            </TimerInfoContainer>
          </GameInfoContainer>

          <Spacer size={20} />
          <PlayersContainer>
            <PlayerAvatarRow minWidth={40 * team.length}>
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

          <Spacer size={30} />
          <SubmitButton loading={isLoading} onPress={handleConfirm}>
            Confirm and Submit
          </SubmitButton>
        </Container>
      </Providers>
    </BottomSheetModal>
  );
};
