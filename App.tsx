import "react-native-gesture-handler";
import "@expo/match-media";

import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import ErrorBoundary from "react-native-error-boundary";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Providers } from "./src/providers";
import { Navigation } from "./src/navigation";
import { CrashScreen } from "./src/components/error-boundary";
import * as serviceWorkerRegistration from "./src/service-worker-registration";

if (__DEV__) {
  // Configure Reactotron in dev environment
  require("./src/config/reactotron");
  // Ignore react errors that aren't so serious
  require("./src/helpers/ignoreWarnings");
}

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ErrorBoundary FallbackComponent={CrashScreen}>
        <Providers>
          <Navigation />
        </Providers>
      </ErrorBoundary>
    </GestureHandlerRootView>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
