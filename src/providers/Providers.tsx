import React from "react";
import { PropsWithChildren } from "react";

import { StoreProvider } from "./store";
import { ThemeProvider } from "./theme";
import { SafeAreaProvider } from "./safearea";
import { StatusBarProvider } from "./statusbar";
import { IntlProvider } from "./internationalization";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => (
  <StoreProvider>
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBarProvider>
          <IntlProvider>{children}</IntlProvider>
        </StatusBarProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  </StoreProvider>
);
