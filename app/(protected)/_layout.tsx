import { Colors } from "@/assets/colors/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import UsersOnly from "../component/UsersOnly";
const _layout = () => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme ?? "light"];
    return (
        <UsersOnly>
            <Tabs
                screenOptions={{
                    tabBarStyle: {
                        paddingTop: 8,
                        height: 100,
                        backgroundColor: theme.navBackground,
                    },
                    tabBarActiveTintColor: theme.iconColorFocused,
                    tabBarInactiveTintColor: theme.iconColor,
                }}
            >
                <Tabs.Screen
                    name="Dashboard"
                    options={{
                        title: "Profile",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                size={24}
                                name={focused ? "person" : "person-outline"}
                                color={
                                    focused
                                        ? theme.iconColorFocused
                                        : theme.iconColor
                                }
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Books"
                    options={{
                        title: "Information",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                size={24}
                                name={focused ? "book" : "book-outline"}
                                color={
                                    focused
                                        ? theme.iconColorFocused
                                        : theme.iconColor
                                }
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Create"
                    options={{
                        title: "Create+",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                size={24}
                                name={focused ? "create" : "create-outline"}
                                color={
                                    focused
                                        ? theme.iconColorFocused
                                        : theme.iconColor
                                }
                            />
                        ),
                    }}
                />
            </Tabs>
        </UsersOnly>
    );
};

export default _layout;
