import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View, SafeAreaView, Pressable } from "react-native";
import { FallbackComponentProps } from "react-native-error-boundary";

import { makeUseStyles, reportError } from "../../helpers";

export const CrashScreen: React.FC<FallbackComponentProps> = ({
  error,
  resetError,
}) => {
  const { styles, palette } = useStyles();

  const handleClearError = () => {
    reportError(error);
    resetError();
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text style={{ width: "100%" }}>
          <Ionicons
            size={60}
            color={palette.CHAMOISEE}
            name="ios-information-circle-outline"
          />
        </Text>
        <Text style={styles.title}>Oops, Something Went Wrong</Text>
        <Text style={[styles.title, styles.subtitle]}>
          The app ran into a problem and could not continue. We apologize for
          any inconvenience this has caused! Press the button below to restart
          the app and sign back in. Please contact us if this issue persists.
        </Text>
        <Pressable onPress={handleClearError} style={styles.button}>
          <Text style={styles.text}>Back to Sign In Screen</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const useStyles = makeUseStyles(
  ({ fonts, palette, colors, breakpoints, isDesktopOrLaptop }) => ({
    safeView: {
      flex: 1,
      alignItems: "center",
      backgroundColor: isDesktopOrLaptop
        ? palette.GHOST_WHITE_COLOR
        : palette.WHITE_COLOR,
    },
    container: {
      flex: 1,
      padding: 20,
      justifyContent: "center",
      maxWidth: breakpoints.SMALL_MOBILE * 1.2,
    },
    title: {
      fontSize: 32,
      textAlign: "center",
      color: palette.CHAMOISEE,
      fontFamily: fonts.CIRCULAR_BOLD,
    },
    subtitle: {
      fontSize: 20,
      opacity: 0.7,
      textAlign: "left",
      marginVertical: 16,
      paddingHorizontal: 10,
      color: palette.TEXT_COLOR,
      fontFamily: fonts.CIRCULAR_MEDIUM,
    },
    button: {
      height: 50,
      borderRadius: 5,
      marginVertical: 45,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: palette.CHAMOISEE,
    },
    text: {
      fontSize: 15,
      color: colors.dark.TEXT_COLOR,
      fontFamily: fonts.CIRCULAR_SEMI_BOLD,
    },
  })
);
