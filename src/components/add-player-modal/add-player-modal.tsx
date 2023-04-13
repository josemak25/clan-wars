import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { shallowEqual } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components/native";
import { Platform, ScrollView } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";
import BottomSheet, {
  BottomSheetBackdropProps,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";

import { generateId } from "../../helpers";
import { FormStepOne } from "./form-step-one";
import { FormStepTwo } from "./form-step-two";
import { IAddPlayerFormStep } from "../../../types";
import { BottomSheetBackdrop } from "../modal-backdrop";
import { RootState } from "../../providers/store/store";
import { settingsActions } from "../../providers/store/reducers";
import { ITournamentTeam } from "../../providers/store/reducers/tournament/interfaces";
import {
  useDispatch,
  useKeyboard,
  useSelector,
  useOnLayout,
  useResponsiveScreen,
} from "../../hooks";

import {
  Step,
  Title,
  Spacer,
  SubTitle,
  StepIndex,
  Container,
  StepNumber,
  StepDivider,
  CloseButton,
  StepContainer,
  StepScrollView,
  InputContainer,
} from "./add-player-modal.styles";

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

export const AddPlayerModal: React.FC = () => {
  const dispatch = useDispatch();
  const { keyboardShown } = useKeyboard();
  const scrollRef = useRef<ScrollView>(null);
  const [contentLayout, onLayout] = useOnLayout();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { palette, layout, breakpoints } = useTheme();
  const [formSteps, setFormSteps] = useState(defaultFormSteps);
  const { isMinScreenSize, isDesktopOrLaptop } = useResponsiveScreen();

  const {
    control,
    trigger,
    clearErrors,
    handleSubmit,
    getFieldState,
    formState: { errors },
  } = useForm<Partial<ITournamentTeam>>();

  const { isAddPlayerModalVisible } = useSelector(
    ({ settings }: RootState) => settings,
    shallowEqual
  );

  const initialSnapPoints = useMemo(
    () => Platform.select({ default: ["CONTENT_HEIGHT"], web: ["50%"] }),
    []
  );

  const {
    animatedSnapPoints,
    handleContentLayout,
    animatedHandleHeight,
    animatedContentHeight,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const BackdropComponent = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...props} closeModal={() => {}} />
  );

  const validateCurrentFormBeforeRoute = async () => {
    const { key } = formSteps[currentIndex];
    await trigger(key);
    return getFieldState(key).error?.message;
  };

  const goNext = async () => {
    // return if error only route to next form if no errors
    // const error = await validateCurrentFormBeforeRoute();
    // if (error) return;

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
    clearErrors();
    setCurrentIndex(0);
    setFormSteps(defaultFormSteps);
    dispatch(settingsActions.toggleAddPlayerModalVisibility());
  };

  const onSubmit: SubmitHandler<Partial<ITournamentTeam>> = (data) => {

  };

  const MAX_WIDTH = breakpoints.tablet_viewport;
  const isScreenLessThanMaxWidth = isMinScreenSize(MAX_WIDTH);
  const bottomInset = layout.screen.height - Number(contentLayout?.height || 0);

  useEffect(() => {
    isAddPlayerModalVisible && bottomSheetRef.current?.expand();
  }, [isAddPlayerModalVisible]);

  if (!isAddPlayerModalVisible) {
    return null;
  }

  return (
    <BottomSheet
      index={0}
      detached
      onClose={onClose}
      ref={bottomSheetRef}
      handleComponent={() => null}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      backdropComponent={BackdropComponent}
      bottomInset={bottomInset / (keyboardShown ? 1.5 : 2)}
      backgroundStyle={{ backgroundColor: palette.transparent }}
      containerStyle={[
        { width: "100%", maxWidth: MAX_WIDTH },
        isScreenLessThanMaxWidth && {
          marginLeft: (layout.screen.width - MAX_WIDTH) / 2,
        },
      ]}
      style={{
        overflow: "hidden",
        borderRadius: layout.radius,
        marginHorizontal: layout.gutter,
      }}
    >
      <Container
        isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}
        onLayout={(event) => {
          onLayout(event);
          handleContentLayout(event);
        }}
      >
        <StepContainer isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}>
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
                  <SubTitle isActive={currentIndex === index}>{title}</SubTitle>
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

        <InputContainer isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}>
          {forms.map((Form, index) =>
            currentIndex === index ? (
              <Animated.View
                key={`${index}_form_step`}
                entering={index === 0 ? FadeInRight : FadeInLeft}
              >
                <Form
                  errors={errors}
                  control={control}
                  isScreenLessThanMaxWidth={isScreenLessThanMaxWidth}
                  onButtonPress={() =>
                    index === 0 ? goNext() : handleSubmit(onSubmit)
                  }
                />
              </Animated.View>
            ) : null
          )}
        </InputContainer>

        <CloseButton
          size={25}
          onPress={onClose}
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
      </Container>
    </BottomSheet>
  );
};
