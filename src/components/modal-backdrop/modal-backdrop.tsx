import React, { useMemo } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { makeUseStyles } from "../../helpers";

export const BottomSheetBackdrop: React.FC<
  BottomSheetBackdropProps & {
    closeModal?: VoidFunction;
  }
> = ({ style, animatedIndex, closeModal }) => {
  const { colors } = useStyles();

  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-0.7, 0],
      [0, 0.7],
      Extrapolate.CLAMP
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      { backgroundColor: colors.light.text },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return (
    <TouchableWithoutFeedback disabled={!closeModal} onPress={closeModal}>
      <Animated.View style={containerStyle} />
    </TouchableWithoutFeedback>
  );
};

const useStyles = makeUseStyles(() => ({}));
