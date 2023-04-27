import React from "react";
import { PropsWithChildren } from "react";

import { AuthProvider } from "./auth";
import { StoreProvider } from "./store";
import { ThemeProvider } from "./theme";
import { SafeAreaProvider } from "./safearea";
import { StatusBarProvider } from "./statusbar";
import { IntlProvider } from "./internationalization";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <StatusBarProvider>
              <IntlProvider>{children}</IntlProvider>
            </StatusBarProvider>
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </StoreProvider>
  );
};
