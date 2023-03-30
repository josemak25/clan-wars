import { useState } from "react";
import {
  runOnJS,
  KeyboardState,
  useDerivedValue,
  useAnimatedKeyboard,
} from "react-native-reanimated";

export const useKeyboard = () => {
  const keyboard = useAnimatedKeyboard();
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const handleKeyboardOpened = (height: number) => {
    if (!keyboardHeight && isKeyboardVisible) {
      setKeyboardHeight(height);
    }
  };

  const handleKeyboardOpening = () => {
    if (!isKeyboardVisible) {
      setIsKeyboardVisible(true);
    }
  };

  const handleKeyboardClosed = () => {
    if (!isKeyboardVisible) {
      setKeyboardHeight(0);
    }
  };

  const handleKeyboardClosing = () => {
    if (isKeyboardVisible) {
      setIsKeyboardVisible(false);
    }
  };

  useDerivedValue(() => {
    if (keyboard.state.value === KeyboardState.OPEN) {
      runOnJS(handleKeyboardOpened)(keyboard.height.value);
    }

    if (keyboard.state.value === KeyboardState.OPENING) {
      runOnJS(handleKeyboardOpening)();
    }

    if (keyboard.state.value === KeyboardState.CLOSED) {
      runOnJS(handleKeyboardClosed)();
    }

    if (keyboard.state.value === KeyboardState.CLOSING) {
      runOnJS(handleKeyboardClosing)();
    }
  });

  return {
    keyboardHeight,
    isKeyboardVisible,
    animatedKeyboardHeight: keyboard.height,
  };
};
