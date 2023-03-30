import React, { Fragment, PropsWithChildren } from "react";
import { useTheme } from "styled-components/native";
import Toast, { BaseToast, ToastConfig } from "react-native-toast-message";

import { makeUseStyles } from "../../helpers";
import { useResponsiveFontSize } from "../../hooks";

export const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { insets } = useTheme();
  const { styles } = useStyles();
  const { value: fontValue } = useResponsiveFontSize();

  const config: ToastConfig = {
    /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
    success: (props) => (
      <BaseToast
        {...props}
        style={styles.container}
        text1Style={[styles.text, { fontSize: fontValue(20) }]}
      />
    ),

    /*
     Overwrite 'error' type,
     by modifying the existing `BaseToast` component
    */
    error: (props) => (
      <BaseToast
        {...props}
        style={styles.container}
        text1Style={[styles.text, { fontSize: fontValue(20) }]}
      />
    ),
  };

  return (
    <Fragment>
      {children}
      <Toast config={config} position="top" bottomOffset={insets.bottom + 16} />
    </Fragment>
  );
};

const useStyles = makeUseStyles(
  ({ fonts, palette, isDarkMode, isDesktopOrLaptop }) => ({
    container: {
      minWidth: 240,
      width: "auto",
      borderWidth: 1,
      borderRadius: 10,
      borderLeftWidth: 0,
      borderColor: isDarkMode
        ? palette.GHOST_WHITE_COLOR
        : palette.FOCUSED_INPUT_COLOR,
      backgroundColor: isDesktopOrLaptop
        ? palette.GHOST_WHITE_COLOR
        : palette.WHITE_COLOR,
    },
    text: {
      opacity: 0.7,
      textAlign: "center",
      color: palette.TEXT_COLOR,
      fontFamily: fonts.CIRCULAR_MEDIUM,
    },
  })
);
