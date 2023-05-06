import React from "react";
import { FallbackComponentProps } from "react-native-error-boundary";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import { Icon } from "../icon";
import messages from "./messages";
import { IconType } from "../icon/interface";
import { makeUseStyles, reportError } from "../../helpers";
import { translator } from "../../providers/internationalization";

type FallbackScreenProps = FallbackComponentProps & {
  icon?: IconType;
  title?: keyof typeof messages;
  subtitle?: keyof typeof messages;
  buttonText?: keyof typeof messages;
};

export const FallbackScreen: React.FC<FallbackScreenProps> = ({
  error,
  resetError,
  icon = "error",
  title = "default_title",
  subtitle = "default_subtitle",
  buttonText = "default_button_text",
}) => {
  const { styles } = useStyles();

  const handleClearError = () => {
    reportError(error);
    resetError();
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Icon size={90} name={icon} />
        <Text style={styles.title}>
          {translator?.formatMessage?.(messages[title])}
        </Text>
        <Text style={[styles.title, styles.subtitle]}>
          {translator?.formatMessage?.(messages[subtitle])}
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleClearError}>
          <Text style={styles.text}>
            {translator?.formatMessage?.(messages[buttonText])}
          </Text>
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
      minWidth: 300,
      borderWidth: 1,
      marginVertical: 45,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: layout.radius / 2,
      borderColor: hexToRGB(palette.text, 0.2),
    },
    text: {
      fontSize: 15,
      color: palette.text,
      fontFamily: fonts.variants.roboto_bold,
    },
  })
);
