import React from "react";
import { FormattedMessage } from "react-intl";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components/native";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import {
  BottomSheetModal,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";

import messages from "./messages";
import { Providers } from "../../providers";
import { BottomSheetBackdrop } from "../modal-backdrop";

import {
  Title,
  Button,
  Spacer,
  CheckBox,
  Contents,
  SubTitle,
  Container,
  MaxWidthWrapper,
} from "./success-modal.styles";

type SuccessModalModalProps = {
  bottomSheetRef: React.RefObject<BottomSheetModalMethods>;
};

const snapPoints = ["100%"];

export const SuccessModal: React.FC<SuccessModalModalProps> = ({
  bottomSheetRef,
}) => {
  const { palette, colors } = useTheme();

  const onClose = () => bottomSheetRef.current?.close();

  const BackdropComponent = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...props} />
  );

  return (
    <BottomSheetModal
      onDismiss={onClose}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      handleComponent={() => null}
      backdropComponent={BackdropComponent}
      backgroundStyle={{ backgroundColor: palette.transparent }}
    >
      <Providers>
        <Container>
          <MaxWidthWrapper>
            <CheckBox>
              <Ionicons
                size={35}
                color={colors.dark.text}
                name="md-checkmark-sharp"
              />
            </CheckBox>

            <Contents>
              <Spacer size={40} />
              <Title>
                <FormattedMessage {...messages.title} />
              </Title>
              <Spacer size={20} />
              <SubTitle isActive={false}>
                <FormattedMessage {...messages.subtitle} />
              </SubTitle>

              <Spacer size={40} />
              <Button onPress={onClose}>
                <FormattedMessage {...messages.close} />
              </Button>
            </Contents>
          </MaxWidthWrapper>
        </Container>
      </Providers>
    </BottomSheetModal>
  );
};
