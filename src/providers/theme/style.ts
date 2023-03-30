// import original module declarations
import "styled-components";
import { ScaledSize } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

import { IColorMode } from "../store/reducers/settings/interfaces";

export enum BREAK_POINTS {
  SMALL_MOBILE = 425, // 425px
  TABLET_VIEWPORT = 768, // 768px
  DESKTOP_VIEWPORT = 1280, // 1280px
}

// All app colorss
export enum LIGHT_MODE_COLORS {
  text = "#11181C",
  error = "#e5484d",
  transparent = "transparent",
}

export enum DARK_MODE_COLORS {
  text = "#EFEFF0",
  error = "#e5484d",
  transparent = "transparent",
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
    dimension: ScaledSize;
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
