import { useUser } from "@/hooks/useUser";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

function HomeScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-lg">Home Screen</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-lg">Settings Screen</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

const Dashboard = () => {
    const { logout, user } = useUser();
    return (
        <View>
            <Text>{user.email}</Text>
            <Text>Home</Text>

            <Text>Settings</Text>
            <Pressable className="flex-row justify-center" onPress={logout}>
                <Text> Logout</Text>
            </Pressable>
            <Pressable className="flex-row justify-center" onPress={logout}>
                <Link href="/"> Home</Link>
            </Pressable>
        </View>
    );
};

export default Dashboard;
