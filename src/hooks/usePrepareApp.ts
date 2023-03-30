import { useCallback } from "react";
import {
  useFonts,
  RobotoCondensed_700Bold,
  RobotoCondensed_300Light,
  RobotoCondensed_400Regular,
} from "@expo-google-fonts/roboto-condensed";
import * as SplashScreen from "expo-splash-screen";
import { useTheme } from "styled-components/native";

export const usePrepareApp = () => {
  const { fonts } = useTheme();

  const [appIsReady] = useFonts({
    [fonts.variants.roboto_bold]: RobotoCondensed_700Bold,
    [fonts.variants.roboto_light]: RobotoCondensed_300Light,
    [fonts.variants.roboto_regular]: RobotoCondensed_400Regular,
  });

  const onAppIsReady = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return { appIsReady, onAppIsReady };
};
