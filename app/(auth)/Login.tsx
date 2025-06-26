import { useUser } from "@/hooks/useUser";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { AppwriteException } from "react-native-appwrite";

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { Login } = useUser();

    const handleLogin = async () => {
        if (!email || !pass) {
            setError("Please Fill In The Boxes");
            return;
        }

        setError("");
        setLoading(true);

        try {
            await Login(email.trim(), pass);
            router.replace("/(protected)/Dashboard");
            console.log("hi");
        } catch (error) {
            const message =
                error instanceof AppwriteException
                    ? error.message
                    : error instanceof Error
                    ? error.message
                    : String(error);
            Alert.alert("Login Error", message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex-1 bg-white px-6 justify-center">
            <View className="gap-6">
                <Text className="text-2xl font-bold text-center">Login</Text>
                {!!error && <View>{error}</View>}

                <TextInput
                    placeholder="Email Address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    className="border border-black p-3 rounded-xl"
                />

                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    value={pass}
                    onChangeText={setPass}
                    className="border border-black p-3 rounded-xl"
                />

                <Pressable
                    onPress={handleLogin}
                    className="bg-black p-3 rounded-xl mt-4"
                >
                    <Text className="text-white text-center">Submit</Text>
                </Pressable>
                <Pressable className="flex-row justify-center">
                    <Text>Don't Have An Account?</Text>
                    <Link href="/Register"> Register</Link>
                </Pressable>
                <Pressable className="flex-row justify-center">
                    <Link href="/Dashboard">Guest</Link>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;
