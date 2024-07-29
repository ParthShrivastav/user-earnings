import { router, Tabs, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Button, Divider, Menu } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [visible, setVisible] = React.useState(false);
  const [days, setDays] = React.useState("30 days");

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const handleDays = (value: string) => {
    setDays(value);
    router.setParams({ days: value });
    closeMenu();
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
      safeAreaInsets={{ bottom: 0, top: 0 }}
      initialRouteName="earnings"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Users",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="earnings"
        initialParams={{ days: "30 days" }}
        options={{
          title: "Earnings",
          headerShown: true,
          headerStatusBarHeight: 0,
          headerTitleAlign: "left",
          headerRight: () => (
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              theme={{ roundness: 10 }}
              style={{ marginVertical: 0 }}
              anchor={
                <Pressable
                  style={{
                    borderWidth: 1,
                    borderColor: "#efefef",
                    borderRadius: 10,
                    marginRight: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: 8,
                  }}
                  onPress={openMenu}
                >
                  <Text>{days}</Text>
                  <Ionicons
                    name="chevron-down"
                    size={18}
                    color="grey"
                    style={{ marginLeft: 15 }}
                  />
                </Pressable>
              }
            >
              {[
                "30 days",
                "90 days",
                "Previous Month",
                "Past Year",
                "Lifetime",
              ].map((item) => (
                <>
                  <Menu.Item
                    onPress={() => handleDays(item)}
                    title={item}
                    titleStyle={{ color: "grey", fontWeight: "bold" }}
                    style={{ backgroundColor: "white" }}
                  />
                  <Divider />
                </>
              ))}
            </Menu>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "wallet" : "wallet-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
