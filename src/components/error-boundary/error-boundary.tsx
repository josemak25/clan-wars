import React from "react";
import { FallbackComponentProps } from "react-native-error-boundary";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import { Icon } from "../icon";
import { makeUseStyles, reportError } from "../../helpers";

export const CrashScreen: React.FC<FallbackComponentProps> = ({
  error,
  resetError,
}) => {
  const { styles } = useStyles();

  const handleClearError = () => {
    reportError(error);
    resetError();
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Icon size={100} name="error" />
        <Text style={styles.title}>Oops, Something Went Wrong</Text>
        <Text style={[styles.title, styles.subtitle]}>
          The app ran into a problem and could not continue. We apologize for
          any inconvenience this has caused! Press the button below to restart
          the app. Please contact us if this issue persists.
        </Text>
        <TouchableOpacity onPress={handleClearError} style={styles.button}>
          <Text style={styles.text}>Try again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const useStyles = makeUseStyles(
  ({ fonts, palette, layout, hexToRGB, breakpoints }) => ({
    safeView: {
      flex: 1,
      alignItems: "center",
      backgroundColor: palette.background,
    },
    container: {
      flex: 1,
      alignItems: "center",
      padding: layout.gutter,
      justifyContent: "center",
      maxWidth: breakpoints.small_mobile,
    },
    title: {
      fontSize: 32,
      textAlign: "center",
      color: palette.text,
      marginTop: layout.gutter * 2,
      fontFamily: fonts.variants.roboto_bold,
    },
    subtitle: {
      fontSize: 20,
      opacity: 0.7,
      paddingHorizontal: 10,
      marginTop: layout.gutter,
      marginVertical: layout.gutter,
      fontFamily: fonts.variants.roboto_regular,
    },
    button: {
      height: 50,
      borderWidth: 1,
      marginVertical: 45,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: layout.radius / 2,
      minWidth: breakpoints.small_mobile / 1.2,
      borderColor: hexToRGB(palette.text, 0.2),
    },
    text: {
      fontSize: 15,
      color: palette.text,
      fontFamily: fonts.variants.roboto_bold,
    },
  })
);
