import React, { useRef, useState } from "react";
import { Keyboard } from "react-native";
import { shallowEqual } from "react-redux";
import Toast from "react-native-toast-message";
import { FormattedMessage, useIntl } from "react-intl";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { SubmitHandler, useForm } from "react-hook-form";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";

import messages from "./messages";
import { useSelector } from "../../hooks";
import { IFormStep } from "../../../types";
import { PaymentModal } from "../../components/paystack";
import { registerForTournament } from "../../config/network";
import { SuccessModal } from "../../components/success-modal";
import { RootStackScreenProps } from "../../../types/navigation";
import { defaultFormSteps, forms, FormStepIndicator } from "./form";
import { generateId, isValidNumber, reportError } from "../../helpers";
import { ConfirmPaymentModal } from "../../components/confirm-payment-modal";
import { ITournamentClan } from "../../providers/store/reducers/participants/interfaces";

import {
  Container,
  GoBackButton,
  NextStepButton,
  ButtonContainer,
  MaxWidthContainer,
  FormStepScrollViewWrapper,
} from "./signup.styles";

export const SignUpScreen: React.FC<RootStackScreenProps<"SignUpScreen">> = ({
  navigation,
}) => {
  const { formatMessage } = useIntl();
  const [isNext, setIsNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const successSheetRef = useRef<BottomSheetModal>(null);
  const [formSteps, setFormSteps] = useState(defaultFormSteps);
  const [paymentReference, setPaymentReference] = useState("");
  const confirmPaymentSheetRef = useRef<BottomSheetModal>(null);
  const [clan, setClan] = useState<ITournamentClan | null>(null);

  const { selectedTournament } = useSelector(
    ({ tournament }) => tournament,
    shallowEqual
  );

  const {
    reset,
    watch,
    control,
    trigger,
    setError,
    setValue,
    clearErrors,
    handleSubmit,
    getFieldState,
    formState: { errors },
  } = useForm<ITournamentClan>();

  const [team = [], phone_number] = watch(["team", "phone_number"]);

  const isFirstPageOfFormActive = currentIndex === 0;
  const isLastPageOfFormActive = currentIndex === formSteps.length - 1;

  const handleFormStep = (stepId: IFormStep["id"]) => {
    const index = formSteps.findIndex(({ id }) => id === stepId);
    setIsNext(index > currentIndex);
    setCurrentIndex(index);
  };

  const validateCurrentFormBeforeRoute = async () => {
    const { key } = formSteps[currentIndex];
    const teamLength = team.filter(({ player_ign }) => player_ign).length;

    if (key === "phone_number" && !isValidNumber(phone_number)) {
      setError("phone_number", {
        message: formatMessage(messages.invalid_contact_phone_number),
      });
    }

    if (key === "team") {
      setError("team", {
        message: !teamLength
          ? "Team is required"
          : teamLength < selectedTournament?.team_size!
          ? `You must add all players`
          : undefined,
      });
    }

    if (key !== "phone_number" && key !== "team") {
      await trigger(key);
    }

    return getFieldState(key).error?.message;
  };

  const goBack = () => {
    setIsNext(false);
    const index = currentIndex - 1;
    setCurrentIndex(index);
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
    setIsNext(true);
    setCurrentIndex(nextIndex);
  };

  const verifyForm: SubmitHandler<ITournamentClan> = (data) => {
    Keyboard.dismiss();
    setIsLoading(!isLoading);
    setClan({ ...data, tournament_id: selectedTournament?.id!! });

    setTimeout(() => {
      setIsLoading(false);
      confirmPaymentSheetRef.current?.present();
    }, 500);
  };

  const resetForm = () => {
    reset();
    setClan(null);
    setCurrentIndex(0);
    setIsLoading(false);
    setIsConfirmed(false);
    setPaymentReference("");
    setFormSteps(defaultFormSteps);
  };

  const submitForm = async (reference: string) => {
    try {
      if (clan && reference === paymentReference) {
        confirmPaymentSheetRef.current?.present();
        setIsLoading(!isLoading);

        await registerForTournament({
          ...clan,
          payment_reference: paymentReference,
        });
        confirmPaymentSheetRef.current?.dismiss();
        successSheetRef.current?.present();
      }
    } catch (error: any) {
      Toast.show({
        type: "error",
        text2: error.message,
        text1: "An Error occurred 😔",
      });
      reportError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <MaxWidthContainer>
        <FormStepIndicator
          steps={formSteps}
          onChange={handleFormStep}
          currentIndex={currentIndex}
        />

        <FormStepScrollViewWrapper>
          {forms.map((Form, index) =>
            currentIndex === index ? (
              <Animated.View
                key={`${index}_form_step`}
                entering={isNext ? FadeInRight : FadeInLeft}
              >
                <Form
                  watch={watch}
                  errors={errors}
                  control={control}
                  setError={setError}
                  setValue={setValue}
                  clearErrors={clearErrors}
                />
              </Animated.View>
            ) : null
          )}
        </FormStepScrollViewWrapper>

        <ButtonContainer>
          {!isFirstPageOfFormActive && (
            <GoBackButton onPress={goBack}>
              <FormattedMessage {...messages.back} />
            </GoBackButton>
          )}

          <NextStepButton
            loading={isLoading}
            onPress={isLastPageOfFormActive ? handleSubmit(verifyForm) : goNext}
          >
            <FormattedMessage
              {...messages[
                isLastPageOfFormActive ? "complete_submission" : "next_step"
              ]}
            />
          </NextStepButton>
        </ButtonContainer>
      </MaxWidthContainer>

      <ConfirmPaymentModal
        team={team}
        isCompletingRegistration={isLoading}
        bottomSheetRef={confirmPaymentSheetRef}
        selectedTournament={selectedTournament}
        confirmPayment={() => {
          setIsConfirmed(true);
          setPaymentReference(generateId());
        }}
      />

      <SuccessModal
        bottomSheetRef={successSheetRef}
        onClose={() => {
          resetForm();
          navigation.replace("HomeScreen");
        }}
      />

      <PaymentModal
        clan={clan}
        isVisible={isConfirmed}
        reference={paymentReference}
        selectedTournament={selectedTournament}
        channels={[
          "bank_transfer",
          "card",
          "mobile_money",
          "bank",
          "ussd",
          "qr",
        ]}
        onSuccess={({ reference }) => submitForm(reference)}
        onClose={() => {
          setIsConfirmed(false);
          confirmPaymentSheetRef.current?.present();
        }}
      />
    </Container>
  );
};
