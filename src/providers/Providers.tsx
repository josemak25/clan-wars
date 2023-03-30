import React from "react";
import { PropsWithChildren } from "react";

import { StoreProvider } from "./store";
import { ThemeProvider } from "./theme";
import { ToastProvider } from "./toast";
import { SafeAreaProvider } from "./safearea";
import { StatusBarProvider } from "./statusbar";
import { IntlProvider } from "./internationalization";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => (
  <StoreProvider>
    <SafeAreaProvider>
      <ThemeProvider>
        <ToastProvider>
          <StatusBarProvider>
            <IntlProvider>{children}</IntlProvider>
          </StatusBarProvider>
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  </StoreProvider>
);
