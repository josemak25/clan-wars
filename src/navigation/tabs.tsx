import { useTheme } from "styled-components/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { TabParamList } from "../../types/navigation";
import { StatisticsScreen } from "../screens/statistic";
import { ParticipatesScreen } from "../screens/participates";

const Tab = createMaterialTopTabNavigator<TabParamList>();

export const TabNavigator = () => {
  const { palette, hexToRGB, fonts } = useTheme();

  return (
    <Tab.Navigator
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
        name="ParticipatesScreen"
        component={ParticipatesScreen}
        options={{ title: "Participates" }}
      />
    </Tab.Navigator>
  );
};
