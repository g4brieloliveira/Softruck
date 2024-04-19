import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../modules/Home";
import Settings from "../modules/Settings";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/Theme";

const Tab = createBottomTabNavigator();

export default function Routes() {
  const { t } = useTranslation("translation", {
    keyPrefix: "tab",
  });
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: t(route.name),
        tabBarStyle: {
          backgroundColor: colors.tabBackground,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: typeof Ionicons.defaultProps.name = "";

          if (route.name === "Home") {
            iconName = focused ? "map" : "map-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.tabIcon,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
