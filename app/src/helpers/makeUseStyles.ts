import { useMemo } from "react";
import { useTheme } from "styled-components/native";
import { StyleSheet, useWindowDimensions } from "react-native";

import { hexToRGB } from "./hexToRGB";
import { useColorScheme } from "../hooks/useColorScheme";
import { useResponsiveScreen } from "../hooks/useResponsiveScreen";
import { IColorMode } from "../providers/store/reducers/settings/interfaces";
import {
  FONTS,
  BREAK_POINTS,
  DARK_MODE_COLORS,
  LIGHT_MODE_COLORS,
} from "../providers/theme/style";

type GetStylesPayload = Omit<
  ReturnType<typeof useTheme>,
  "fonts" | "toggleTheme" | "insets"
> &
  ReturnType<typeof useResponsiveScreen> & {
    fonts: { variants: typeof FONTS };
  };

export function makeUseStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(
  getStyles: (payload: GetStylesPayload) => T | StyleSheet.NamedStyles<T>
): () => GetStylesPayload & { styles: T } {
  return () => {
    const systemTheme = useColorScheme();
    const screen = useResponsiveScreen();
    const dimension = useWindowDimensions();

    const isDarkMode = systemTheme === IColorMode.DARK;

    const theme = {
      hexToRGB,
      dimension,
      isDarkMode,
      breakpoints: BREAK_POINTS,
      fonts: { variants: FONTS },
      palette: isDarkMode ? DARK_MODE_COLORS : LIGHT_MODE_COLORS,
      layout: { radius: 10, gutter: 16, screen: dimension },
      colors: { light: LIGHT_MODE_COLORS, dark: DARK_MODE_COLORS },
    };

    const styles = useMemo(
      () => StyleSheet.create(getStyles({ ...theme, ...screen })),
      [theme, screen]
    );

    return { ...theme, ...screen, styles };
  };
}
