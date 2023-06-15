import { Platform, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import { useResponsiveScreen } from "./useResponsiveScreen";

export function useResponsiveFontSize() {
  const insets = useSafeAreaInsets();
  const { height, width } = useWindowDimensions();
  // const { isDesktopOrLaptop } = useResponsiveScreen();

  const offset = width > height ? 0 : insets.top;
  const standardLength = width > height ? width : height;
  const deviceHeight = standardLength - offset;

  const percentage = (percent: number): number => {
    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
  };

  // guideline height for standard 5" device screen is 680
  const value = (
    fontSize: number
    // standardScreenHeight = !isDesktopOrLaptop ? height : width + 100
    // standardScreenHeight = Math.max(height, width) + 100
  ): number => {
    // const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
    // return Math.round(heightPercent) ;

    // return fontSize;

    return Platform.select({ default: fontSize, web: fontSize - 2 });
  };

  return { value, percentage };
}
