import React from "react";
import { PropsWithChildren } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { AuthProvider } from "./auth";
import { StoreProvider } from "./store";
import { ThemeProvider } from "./theme";
import { NetworkProvider } from "./network";
import { SafeAreaProvider } from "./safearea";
import { StatusBarProvider } from "./statusbar";
import { IntlProvider } from "./internationalization";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <BottomSheetModalProvider>
              <StatusBarProvider>
                <IntlProvider>
                  <NetworkProvider>{children}</NetworkProvider>
                </IntlProvider>
              </StatusBarProvider>
            </BottomSheetModalProvider>
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </StoreProvider>
  );
};
