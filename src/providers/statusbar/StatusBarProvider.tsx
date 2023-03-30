import React, { Fragment, PropsWithChildren } from "react";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components/native";

export const StatusBarProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <Fragment>
      <StatusBar animated translucent style={isDarkMode ? "light" : "dark"} />
      {children}
    </Fragment>
  );
};
