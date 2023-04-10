import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";
import { useTheme } from "styled-components/native";
import { Controller, useFieldArray } from "react-hook-form";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";

import messages from "../messages";
import { Icon } from "../../../components/icon";
import { FormStepProps } from "../../../../types";
import { useFormValidation } from "../../../hooks";
import { BottomSheetBackdrop } from "../../../components/modal-backdrop";

import {
  Title,
  Spacer,
  SubTitle,
  TeamButton,
  PlayerName,
  TeamScrollView,
  FormStepWrapper,
} from "../signup.styles";

const snapPoints = ["50%"];

export const FormStepFour: React.FC<FormStepProps> = ({ errors, control }) => {
  const { palette, layout } = useTheme();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { clanNameValidation } = useFormValidation();
  const { fields, append, prepend } = useFieldArray({
    control,
    name: "team",
  });

  const onClose = () => bottomSheetRef.current?.close();

  const BackdropComponent = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...props} closeModal={onClose} />
  );

  return (
    <FormStepWrapper>
      <Title>
        <FormattedMessage {...messages.build_clan_team} />
      </Title>
      <SubTitle>
        <FormattedMessage {...messages.build_clan_team_details} />
      </SubTitle>

      <Spacer size={40} />
      <TeamScrollView>
        <Controller
          name="team"
          control={control}
          rules={clanNameValidation}
          render={({ field: { onChange } }) => (
            <TeamButton>
              <Icon name="user" />
              <PlayerName>
                <FormattedMessage {...messages.add_team_leader} />
              </PlayerName>
            </TeamButton>
          )}
        />

        <Controller
          name="team"
          control={control}
          rules={clanNameValidation}
          render={({ field: { onChange } }) => (
            <TeamButton>
              <Icon name="user" />
              <PlayerName>
                <FormattedMessage {...messages.add_second_player} />
              </PlayerName>
            </TeamButton>
          )}
        />
        <Controller
          name="team"
          control={control}
          rules={clanNameValidation}
          render={({ field: { onChange } }) => (
            <TeamButton>
              <Icon name="user" />
              <PlayerName>
                <FormattedMessage {...messages.add_third_player} />
              </PlayerName>
            </TeamButton>
          )}
        />
        <Controller
          name="team"
          control={control}
          rules={clanNameValidation}
          render={({ field: { onChange } }) => (
            <TeamButton>
              <Icon name="user" />
              <PlayerName>
                <FormattedMessage {...messages.add_fourth_player} />
              </PlayerName>
            </TeamButton>
          )}
        />
      </TeamScrollView>

      <BottomSheet
        index={0}
        enablePanDownToClose
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleComponent={() => null}
        backdropComponent={BackdropComponent}
        containerHeight={layout.screen.height}
        style={{
          maxWidth: 705,
          margin: "auto",
          overflow: "hidden",
          borderRadius: layout.radius,
        }}
        backgroundStyle={{ backgroundColor: palette.background }}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <SubTitle>Do your design work here babe</SubTitle>
        </BottomSheetView>
      </BottomSheet>
    </FormStepWrapper>
  );
};
