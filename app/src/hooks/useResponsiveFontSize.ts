import { PixelRatio, Platform } from "react-native";
import { useMediaQuery } from "react-responsive";

export function useResponsiveFontSize() {
  const isMobile = useMediaQuery({ maxWidth: 500 });

  const value = (fontSize: number): number => {
    const fontScale = PixelRatio.getFontScale();

    const size = Platform.select({
      web: isMobile ? fontSize - 1 / fontScale : fontSize / fontScale,
      default: isMobile ? fontSize + 2 / fontScale : fontSize / fontScale,
    });

    return size;
  };

  return { value };
}
