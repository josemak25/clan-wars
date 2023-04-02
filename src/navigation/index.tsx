import React from "react";
import {
  Theme,
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { usePrepareApp } from "../hooks";
import { SignUpScreen } from "../screens/signup";
import { StackParamList } from "../../types/navigation";
import { OnboardingScreen } from "../screens/onboarding";

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
        initialRouteName="OnboardingScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: "Sign up", headerShown: true }}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ title: "Onboarding" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
