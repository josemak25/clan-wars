import { Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import style, { useTheme } from "styled-components/native";
import { IconButton as __IconButton } from "react-native-paper";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";

import { useResponsiveScreen } from "../hooks";

export const BackButton: React.FC<HeaderBackButtonProps> = ({ canGoBack }) => {
  const { palette } = useTheme();
  const navigation = useNavigation();
  const { isDesktopOrLaptop } = useResponsiveScreen();

  const handleBack = () => {
    if (!canGoBack) return;
    navigation.goBack();
  };

  return (
    <IconButton
      onPress={handleBack}
      size={isDesktopOrLaptop ? 30 : 24}
      icon={() => (
        <Ionicons
          color={palette.text}
          name="ios-chevron-back"
          size={isDesktopOrLaptop ? 24 : 18}
        />
      )}
      style={{
        elevation: 5,
        shadowRadius: 3.84,
        shadowOpacity: 0.12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
      }}
    />
  );
};

const IconButton = style(__IconButton)`
  margin-top: ${Platform.select({ web: 16, default: 0 })}px;
  margin-left: ${Platform.select({ web: 20, default: 0 })}px;
  background-color: ${(p) => p.theme.palette.card_background};
`;
