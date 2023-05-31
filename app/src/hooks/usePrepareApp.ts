import { useCallback, useEffect } from "react";
import {
  useFonts,
  RobotoCondensed_700Bold,
  RobotoCondensed_300Light,
  RobotoCondensed_400Regular,
} from "@expo-google-fonts/roboto-condensed";
import * as SplashScreen from "expo-splash-screen";

import { FONTS } from "../providers/theme/style";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export const usePrepareApp = () => {
  const [appIsReady] = useFonts({
    [FONTS.roboto_bold]: RobotoCondensed_700Bold,
    [FONTS.roboto_light]: RobotoCondensed_300Light,
    [FONTS.roboto_regular]: RobotoCondensed_400Regular,
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

  useEffect(() => {
    onAppIsReady();
  }, [appIsReady]);

  return appIsReady;
};
