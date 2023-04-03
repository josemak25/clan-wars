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
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
          headerTintColor: palette.text,
          headerLeft: (props) => <BackButton {...props} />,
          headerStyle: { backgroundColor: palette.background },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: Platform.select({ default: "", web: "home" }) }}
        />

        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: true, title: "sign up" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
