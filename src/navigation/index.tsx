import React from "react";
import {
  Theme,
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { Platform } from "react-native";
import { useTheme } from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabNaviagtor } from "./tab";
import { BackButton } from "./styles";
import { usePrepareApp } from "../hooks";
import { HomeScreen } from "../screens/home";
import { SignUpScreen } from "../screens/signup";
import { StackParamList } from "../../types/navigation";

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigation = () => {
  const { isDarkMode, palette } = useTheme();
  const { appIsReady, onAppIsReady } = usePrepareApp();

  if (!appIsReady) {
    return null;
  }

  const theme: Theme = {
    ...DefaultTheme,
    colors: {
      ...(isDarkMode ? DarkTheme.colors : DefaultTheme.colors),
      background: palette.background,
    },
  };

  return (
    <NavigationContainer theme={theme} onReady={onAppIsReady}>
      <Stack.Navigator
        initialRouteName="DetailsScreen"
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
          headerTintColor: palette.text,
          headerTitleStyle: { color: palette.transparent },
          headerStyle: { backgroundColor: palette.background },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitleStyle: { color: palette.transparent },
            title: Platform.select({ default: "", web: "tournaments" }),
          }}
        />

        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: "sign up",
            headerShown: true,
            headerLeft: (props) => <BackButton {...props} />,
          }}
        />

        <Stack.Screen name="DetailsScreen" component={TabNaviagtor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
