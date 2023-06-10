import React, { Fragment, PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfig,
} from "react-native-toast-message";

import { makeUseStyles } from "../../helpers/makeUseStyles";

export const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { bottom } = useSafeAreaInsets();
  const { styles, layout } = useStyles();

  const config: ToastConfig = {
    /*
  Overwrite 'success' type,
  by modifying the existing `BaseToast` component
*/
    success: (props) => (
      <BaseToast {...props} style={styles.container} text1Style={styles.text} />
    ),

    /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
    error: (props) => (
      <ErrorToast
        {...props}
        style={styles.container}
        text1Style={styles.text}
      />
    ),
  };

  return (
    <Fragment>
      {children}
      <Toast
        config={config}
        position="bottom"
        bottomOffset={bottom + layout.gutter}
      />
    </Fragment>
  );
};

const useStyles = makeUseStyles(({ layout, palette, fonts }) => ({
  container: {
    width: 240,
    borderLeftWidth: 0,
    borderRadius: layout.gutter * 5,
    backgroundColor: palette.light_background,
  },
  text: {
    opacity: 0.7,
    fontSize: 14,
    textAlign: "center",
    color: palette.text,
    fontFamily: fonts.variants.roboto_regular,
  },
}));
