import { NavigationProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParamList = {
  ErrorScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  OnboardingScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, Screen>;

export type StackNavigationProps = NavigationProp<StackParamList>;
