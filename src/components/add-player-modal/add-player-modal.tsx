import React, { Fragment, useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { shallowEqual } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components/native";
import { SubmitHandler, useForm } from "react-hook-form";
import Animated, {
  FadeInLeft,
  FadeInRight,
  useAnimatedStyle,
  useAnimatedKeyboard,
} from "react-native-reanimated";
import {
  BottomSheetModal,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";

import { generateId } from "../../helpers";
import { Providers } from "../../providers";
import { FormStepOne } from "./form-step-one";
import { FormStepTwo } from "./form-step-two";
import { IAddPlayerFormStep } from "../../../types";
import { BottomSheetBackdrop } from "../modal-backdrop";
import { settingsActions } from "../../providers/store/reducers";
import { useDispatch, useSelector, useResponsiveScreen } from "../../hooks";
import { ITournamentTeam } from "../../providers/store/reducers/participants/interfaces";

import {
  Step,
  Title,
  Spacer,
  Contents,
  SubTitle,
  StepIndex,
  Container,
  StepNumber,
  StepDivider,
  CloseButton,
  StepContainer,
  StepScrollView,
  MaxWidthWrapper,
  InputContainer,
} from "./add-player-modal.styles";

const snapPoints = ["100%"];

const forms = [FormStepOne, FormStepTwo];

const defaultFormSteps: IAddPlayerFormStep[] = [
  {
    isViewable: true,
    id: generateId(),
    key: "player_ign",
    title: "Add player IGN",
  },
  {
    key: "avatar",
    id: generateId(),
    isViewable: false,
    title: "Select player avatar",
  },
];

type AddPlayerModalProps = {
  player?: ITournamentTeam;
  default_player_id: string;
  onSavePlayer: (player: ITournamentTeam) => void;
};

export const AddPlayerModal: React.FC<AddPlayerModalProps> = ({
  player,
  onSavePlayer,
  default_player_id,
}) => {
  const dispatch = useDispatch();
  const keyboard = useAnimatedKeyboard();
  const scrollRef = useRef<ScrollView>(null);
  const { palette, breakpoints } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [formSteps, setFormSteps] = useState(defaultFormSteps);
  const { isMinScreenSize, isDesktopOrLaptop } = useResponsiveScreen();

  const {
    watch,
    reset,
    control,
    trigger,
    setValue,
    clearErrors,
    handleSubmit,
    getFieldState,
    formState: { errors },
  } = useForm<Partial<ITournamentTeam>>();

  const isLastPageOfFormActive = currentIndex === formSteps.length - 1;
  const isScreenLessThanMaxWidth = isMinScreenSize(breakpoints.tablet_viewport);

  const translateStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value / 3 }],
  }));

  const { isAddPlayerModalVisible } = useSelector(
    ({ settings }) => settings,
    shallowEqual
  );

  const validateCurrentFormBeforeRoute = async () => {
    const { key } = formSteps[currentIndex];
    await trigger(key);
    return getFieldState(key).error?.message;
  };

  const goNext = async () => {
    // return if error only route to next form if no errors
    const error = await validateCurrentFormBeforeRoute();
    if (error) return;

    const nextIndex = currentIndex + 1;
    const newFormSteps = formSteps.map((step, i) => ({
      ...step,
      isViewable: step.isViewable || i === nextIndex,
    }));

    setFormSteps(newFormSteps);
    setCurrentIndex(nextIndex);
    scrollRef.current?.scrollToEnd({ animated: true });
  };

  const onRoutePress = (index: number) => {
    setCurrentIndex(index);

    if (index === 0) {
      scrollRef.current?.scrollTo({ x: 0, animated: true });
    } else {
      scrollRef.current?.scrollToEnd({ animated: true });
    }
  };

  const onClose = () => {
    reset();
    clearErrors();
    setCurrentIndex(0);
    setFormSteps(defaultFormSteps);
  };

  const closeModal = () => {
    dispatch(settingsActions.toggleAddPlayerModalVisibility());
  };

  const onSubmit: SubmitHandler<Partial<ITournamentTeam>> = (data) => {
    onSavePlayer({
      ...data,
      kills: 0,
      id: generateId(),
      player_id: default_player_id,
    } as ITournamentTeam);

    dispatch(settingsActions.toggleAddPlayerModalVisibility());
  };

  const BackdropComponent = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...props} closeModal={closeModal} />
  );

  useEffect(() => {
    if (isAddPlayerModalVisible) {
      bottomSheetRef.current?.present();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isAddPlayerModalVisible]);

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
        <Container style={translateStyle}>
          <MaxWidthWrapper>
            <Contents isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}>
              <StepContainer
                isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}
              >
                <Title wrap>Anonymous eSport</Title>
                <Spacer size={15} />
                <SubTitle>Register your player</SubTitle>
                <Spacer size={30} />

                <StepScrollView
                  ref={scrollRef}
                  isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}
                >
                  {formSteps.map(({ id, isViewable, title }, index) => (
                    <Fragment key={id}>
                      <Step
                        isActive={currentIndex === index}
                        onPress={() => onRoutePress(index)}
                        disabled={!isViewable || currentIndex === index}
                      >
                        <StepNumber isActive={currentIndex === index}>
                          <StepIndex isActive={currentIndex === index}>
                            {index + 1}
                          </StepIndex>
                        </StepNumber>
                        <SubTitle isActive={currentIndex === index}>
                          {title}
                        </SubTitle>
                      </Step>

                      {index === 0 && (
                        <StepDivider
                          isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}
                        />
                      )}
                    </Fragment>
                  ))}
                </StepScrollView>
              </StepContainer>

              <InputContainer
                isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}
              >
                {forms.map((Form, index) =>
                  currentIndex === index ? (
                    <Animated.View
                      key={`${index}_form_step`}
                      entering={index === 0 ? FadeInRight : FadeInLeft}
                    >
                      <Form
                        watch={watch}
                        errors={errors}
                        player={player}
                        control={control}
                        setValue={setValue}
                        clearErrors={clearErrors}
                        default_player_id={default_player_id}
                        isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}
                        onButtonPress={
                          isLastPageOfFormActive
                            ? handleSubmit(onSubmit)
                            : goNext
                        }
                      />
                    </Animated.View>
                  ) : null
                )}
              </InputContainer>

              <CloseButton
                size={25}
                onPress={closeModal}
                icon={() => (
                  <Ionicons
                    name="close"
                    color={palette.text}
                    size={isDesktopOrLaptop ? 24 : 20}
                  />
                )}
                style={{
                  elevation: 5,
                  shadowRadius: 3.84,
                  shadowOpacity: 0.25,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                }}
              />
            </Contents>
          </MaxWidthWrapper>
        </Container>
      </Providers>
    </BottomSheetModal>
  );
};
