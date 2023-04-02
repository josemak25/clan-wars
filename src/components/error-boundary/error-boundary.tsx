import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FallbackComponentProps } from "react-native-error-boundary";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

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
            color={palette.primary}
            name="ios-information-circle-outline"
          />
        </Text>
        <Text style={styles.title}>Oops, Something Went Wrong</Text>
        <Text style={[styles.title, styles.subtitle]}>
          The app ran into a problem and could not continue. We apologize for
          any inconvenience this has caused! Press the button below to restart
          the app. Please contact us if this issue persists.
        </Text>
        <TouchableOpacity onPress={handleClearError} style={styles.button}>
          <Text style={styles.text}>Back to Sign In Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const useStyles = makeUseStyles(
  ({ fonts, palette, colors, layout, breakpoints }) => ({
    safeView: {
      flex: 1,
      alignItems: "center",
      backgroundColor: palette.background,
    },
    container: {
      flex: 1,
      padding: layout.gutter,
      justifyContent: "center",
      maxWidth: breakpoints.small_mobile * 1.2,
    },
    title: {
      fontSize: 32,
      textAlign: "center",
      color: palette.primary,
      marginTop: layout.gutter,
      fontFamily: fonts.variants.roboto_bold,
    },
    subtitle: {
      fontSize: 20,
      opacity: 0.7,
      textAlign: "left",
      color: palette.text,
      paddingHorizontal: 10,
      marginVertical: layout.gutter,
      fontFamily: fonts.variants.roboto_regular,
    },
    button: {
      height: 50,
      marginVertical: 45,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: layout.radius / 2,
      backgroundColor: palette.primary,
    },
    text: {
      fontSize: 15,
      color: colors.dark.text,
      fontFamily: fonts.variants.roboto_bold,
    },
  })
);
