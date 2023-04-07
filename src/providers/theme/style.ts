// import original module declarations
import "styled-components";
import { ScaledSize } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

import { IColorMode } from "../store/reducers/settings/interfaces";

export enum BREAK_POINTS {
  small_mobile = 425, // 425px
  tablet_viewport = 768, // 768px
  desktop_viewport = 1280, // 1280px
}

// All app colorss
export enum LIGHT_MODE_COLORS {
  text = "#11181C",
  error = "#e5484d",
  success = "#4BB543",
  primary = "#5f31e0",
  background = "#f2f2f2",
  secondary = "f2f2f2",
  transparent = "transparent",
  card_background = "#ffffff",
  light_background = "#f5f5f6",
  light_card_background = "#f2f2f2",
}

export enum DARK_MODE_COLORS {
  text = "#ffffff",
  error = "#e5484d",
  success = "#4BB543",
  primary = "#5f31e0",
  secondary = "#212230",
  background = "#212121",
  transparent = "transparent",
  card_background = "#313131",
  light_background = "#333333",
  light_card_background = "#454545",
}

// All app font sizes
export enum FONTS {
  roboto_bold = "roboto_bold",
  roboto_light = "roboto_light",
  roboto_regular = "roboto_regular",
}

declare module "styled-components/native" {
  export interface DefaultTheme {
    // App dimension
    layout: {
      radius: number;
      gutter: number;
      screen: ScaledSize;
    };
    // App insets
    insets: EdgeInsets;
    // All Global App Font typings
    fonts: {
      variants: typeof FONTS;
      // scale app font
      scale: {
        value: (number: number) => number;
        percentage: (number: number) => number;
      };
    };
    // App dark mode condition
    isDarkMode: boolean;
    // App break points
    breakpoints: typeof BREAK_POINTS;
    // Toggle App theme
    toggleTheme: (colorMode?: IColorMode) => void;
    // All Global App palette typings
    palette: typeof DARK_MODE_COLORS | typeof LIGHT_MODE_COLORS;
    // All Global App colors typings
    colors: { light: typeof LIGHT_MODE_COLORS; dark: typeof DARK_MODE_COLORS };
    // App color converter
    hexToRGB: (hexColor: string, alpha?: number | undefined) => string;
  }
}
