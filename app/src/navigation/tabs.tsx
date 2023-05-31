import { useTheme } from "styled-components/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { TabParamList } from "../../types/navigation";
import { StatisticsScreen } from "../screens/statistic";
import { ParticipantsScreen } from "../screens/participants";

const Tab = createMaterialTopTabNavigator<TabParamList>();

export const TabNavigator = () => {
  const { palette, hexToRGB, fonts } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="StatisticsScreen"
      screenOptions={{
        tabBarActiveTintColor: palette.text,
        tabBarInactiveTintColor: hexToRGB(palette.text, 0.4),
        tabBarLabelStyle: {
          fontSize: fonts.scale.value(16),
          fontFamily: fonts.variants.roboto_bold,
        },
        tabBarIndicatorContainerStyle: {
          backgroundColor: palette.light_background,
        },
      }}
    >
      <Tab.Screen
        name="StatisticsScreen"
        component={StatisticsScreen}
        options={{ title: "Statistics" }}
      />
      <Tab.Screen
        name="ParticipantsScreen"
        component={ParticipantsScreen}
        options={{ title: "Participates" }}
      />
    </Tab.Navigator>
  );
};
