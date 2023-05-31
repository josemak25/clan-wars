import React, {
  useMemo,
  useEffect,
  useCallback,
  PropsWithChildren,
} from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components/native";
import { shallowEqual } from "react-redux";
import { useWindowDimensions } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  FONTS,
  BREAK_POINTS,
  DARK_MODE_COLORS,
  LIGHT_MODE_COLORS,
} from "../theme/style";
import GlobalStyle from "./reset";
import { hexToRGB } from "../../helpers";
import { settingsActions } from "../store/reducers";
import { IColorMode } from "../store/reducers/settings/interfaces";
import {
  useDispatch,
  useSelector,
  useColorScheme,
  useResponsiveFontSize,
} from "../../hooks";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const scale = useResponsiveFontSize();
  const systemTheme = useColorScheme();
  const dimension = useWindowDimensions();
  const { colorMode } = useSelector(({ settings }) => settings, shallowEqual);

  const isDarkMode = colorMode === IColorMode.DARK;

  const toggleTheme = useCallback(
    (colorMode?: IColorMode) => {
      let theme = colorMode || isDarkMode ? IColorMode.LIGHT : IColorMode.DARK;
      return dispatch(settingsActions.changeColorMode(theme));
    },
    [dispatch, colorMode]
  );

  // Conditionally change the theme-color from dark to light-mode and vise-versa
  const theme: DefaultTheme = useMemo(
    () => ({
      insets,
      hexToRGB,
      isDarkMode,
      toggleTheme,
      breakpoints: BREAK_POINTS,
      fonts: { scale, variants: FONTS },
      layout: { radius: 10, gutter: 16, screen: dimension },
      palette: isDarkMode ? DARK_MODE_COLORS : LIGHT_MODE_COLORS,
      colors: { light: LIGHT_MODE_COLORS, dark: DARK_MODE_COLORS },
    }),
    [isDarkMode, toggleTheme]
  );

  useEffect(() => {
    dispatch(settingsActions.changeColorMode(systemTheme));
  }, [systemTheme]);

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <PaperProvider>{children}</PaperProvider>
    </StyledThemeProvider>
  );
};
