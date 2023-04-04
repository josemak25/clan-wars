import { NavigationProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParamList = {
  HomeScreen: undefined;
  ErrorScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  DetailsScreen: undefined;
};

export type TabParamList = {
  PaticipatesScreen: undefined;
  StatisticsScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, Screen>;

export type StackNavigationProps = NavigationProp<StackParamList>;

export type RootTabScreenProps<Screen extends keyof TabParamList> =
  NativeStackScreenProps<TabParamList, Screen>;
