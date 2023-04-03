import React, { Fragment, useEffect, useRef } from "react";
import { useTheme } from "styled-components/native";
import { LayoutRectangle, ScrollView } from "react-native";

import { IFormStep } from "../../../../types";

import {
  StepTitle,
  IconButton,
  StepSubTitle,
  IconButtonContents,
  IconButtonContainer,
  ItemSeparatorComponent,
  FormStepIndicatorContainer,
  FormStepIndicatorScrollView,
} from "../signup.styles";

type FormStepProps = {
  steps: IFormStep[];
  currentIndex: number;
  onChange: (stepId: IFormStep["id"]) => void;
};

export const FormStepIndicator: React.FC<FormStepProps> = ({
  steps,
  onChange,
  currentIndex,
}) => {
  const scrollRef = useRef<ScrollView>(null);
  const { palette, isDarkMode, colors, hexToRGB } = useTheme();
  const buttonsRef = useRef<Record<IFormStep["id"], LayoutRectangle>>({});

  const onStepPress = () => {
    const stepId = steps[currentIndex]?.id;
    const isFirstStep = steps[0].id === stepId;
    const isLastStep = steps[steps.length - 1].id === stepId;

    if (isLastStep) {
      scrollRef.current?.scrollToEnd({ animated: true });
    } else {
      const x = isFirstStep ? 0 : buttonsRef.current[stepId]?.x + 70;
      scrollRef.current?.scrollTo({ x, y: 0, animated: true });
    }

    onChange(stepId);
  };

  useEffect(() => {
    onStepPress();
  }, [currentIndex]);

  return (
    <FormStepIndicatorContainer>
      <FormStepIndicatorScrollView ref={scrollRef}>
        {steps.map(({ icon, id, title, highlighted, isViewable }, index) => (
          <Fragment key={`${id}_form_step_indicator`}>
            <IconButtonContainer
              onLayout={({ nativeEvent }) => {
                buttonsRef.current[id] = nativeEvent.layout;
              }}
            >
              <IconButton
                icon={icon}
                mode="contained"
                disabled={!isViewable}
                onPress={() => onChange(id)}
                iconColor={
                  currentIndex === index
                    ? colors.dark.text
                    : hexToRGB(palette.primary, isDarkMode ? 1 : 0.6)
                }
                containerColor={
                  currentIndex === index
                    ? palette.primary
                    : hexToRGB(palette.primary, isDarkMode ? 0.2 : 0.08)
                }
              />
              {currentIndex === index && (
                <IconButtonContents>
                  <StepSubTitle>
                    Step {++index}/{steps.length}
                  </StepSubTitle>
                  <StepTitle>{title}</StepTitle>
                </IconButtonContents>
              )}
            </IconButtonContainer>

            {highlighted && <ItemSeparatorComponent />}
          </Fragment>
        ))}
      </FormStepIndicatorScrollView>
    </FormStepIndicatorContainer>
  );
};
