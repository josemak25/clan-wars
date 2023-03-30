import { NavigationProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ICODMCp } from "./index";

export type TabsParamList = {
  ProfileScreen: undefined;
  FundWalletScreen: undefined;
  CollectionScreen: undefined;
  DetailsScreen: { data: ICODMCp };
};

export type StackParamList = {
  Tabs: object;
  ErrorScreen: undefined;
  AboutScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  OnboardingScreen: undefined;
  ForgotPasswordScreen: undefined;
} & TabsParamList;

export type ModalStackParamList = Pick<
  TabsParamList,
  "ProfileScreen" | "FundWalletScreen"
>;

export type TabStackParamList = Pick<TabsParamList, "CollectionScreen"> & {
  ProfileHomeScreen: undefined;
};

export type ProfileStackParamList = Pick<
  TabsParamList,
  "ProfileScreen" | "FundWalletScreen"
>;

export type RootStackScreenProps<Screen extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof TabsParamList> =
  NativeStackScreenProps<TabsParamList, Screen>;

export type StackNavigationProps = NavigationProp<StackParamList>;
