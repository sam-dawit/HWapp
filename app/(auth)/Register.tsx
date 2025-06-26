import { useUser } from "@/hooks/useUser";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, Pressable, Text, TextInput, View } from "react-native";
import { AppwriteException } from "react-native-appwrite";

export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { Register } = useUser();

    const handleRegister = async () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert("Missing Fields", "Please fill out all fields");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Password Error", "Passwords do not match");
            return;
        }
        try {
            await Register(email, password);
        } catch (error) {
            const message =
                error instanceof AppwriteException
                    ? error.message
                    : error instanceof Error
                    ? error.message
                    : String(error);
            Alert.alert("Login Error", message);
        }

        // ✅ Navigate using expo-router
        router.replace("/(protected)/Dashboard");
    };

    return (
        <View className="flex-1 justify-center items-center bg-white px-4">
            <Text className="text-2xl font-bold mb-4">Register</Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                className="border w-full p-3 mb-3 rounded-md"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className="border w-full p-3 mb-3 rounded-md"
            />

            <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                className="border w-full p-3 mb-6 rounded-md"
            />

            <Button title="Register" onPress={handleRegister} />
            <Pressable className="flex-row">
                <Text>Have An Account? </Text>
                <Link href="/Login">Login</Link>
            </Pressable>
        </View>
    );
}
