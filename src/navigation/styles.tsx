import { Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import style, { useTheme } from "styled-components/native";
import { IconButton as __IconButton } from "react-native-paper";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export const BackButton: React.FC<HeaderBackButtonProps> = ({ canGoBack }) => {
  const { palette } = useTheme();
  const navigation = useNavigation();

  const handleBack = () => {
    if (!canGoBack) return;
    navigation.goBack();
  };

  return (
    <IconButton
      onPress={handleBack}
      icon={() => (
        <Ionicons size={20} name="ios-chevron-back" color={palette.text} />
      )}
    />
  );
};

const IconButton = style(__IconButton)`
  margin-top: ${Platform.select({ web: 5, default: 0 })}px;
  margin-left: ${Platform.select({ web: 20, default: 0 })}px;
`;
