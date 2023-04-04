import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "styled-components/native";
import { TabParamList } from "../../types/navigation";
import { StatisticsScreen } from "../screens/statistic";
import { PaticipatesScreen } from "../screens/paticipates";

const Tab = createMaterialTopTabNavigator<TabParamList>();

export const TabNaviagtor = () => {
  const { isDarkMode, palette, fonts } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarContentContainerStyle: {
            backgroundColor: palette.light_background,
          },
          tabBarActiveTintColor: palette.text,
          tabBarLabelStyle: {
            fontSize: fonts.scale.value(16),
            fontFamily: fonts.variants.roboto_bold,
          },
          tabBarIndicatorContainerStyle: {
            backgroundColor: "powderblue",
            borderWidth: 1,
            borderColor: "red",
          },
        }}
      >
        <Tab.Screen
          name="StatisticsScreen"
          component={StatisticsScreen}
          options={{ title: "Statistics " }}
        />
        <Tab.Screen
          name="PaticipatesScreen"
          component={PaticipatesScreen}
          options={{ title: "Paticipates" }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
