import "react-native-gesture-handler";
import "@expo/match-media";

import { Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Providers } from "./src/providers";
import { usePrepareApp } from "./src/hooks";
import { Navigation } from "./src/navigation";
import { WebTabs } from "./src/navigation/tabs-web";
import { ErrorBoundary } from "./src/components/error-boundary";
import * as serviceWorkerRegistration from "./src/service-worker-registration";

if (__DEV__) {
  // Configure Reactotron in dev environment
  require("./src/config/reactotron");
  // Ignore react errors that aren't so serious
  require("./src/helpers/ignoreWarnings");
}

export default function App() {
  const appIsReady = usePrepareApp();

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ErrorBoundary>
        <Providers>
          <Navigation />
          {Platform.select({ web: <WebTabs /> })}
        </Providers>
      </ErrorBoundary>
    </GestureHandlerRootView>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
