import { UserProvider } from "@/contexts/useContext";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../assets/colors/colors";

export default function RootLayout() {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme ?? "light"];
    return (
        <UserProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                    headerTintColor: theme.title,
                    headerStyle: { backgroundColor: theme.background },
                }}
            >
                <Stack.Screen name="index" options={{ title: "Home" }} />
                <Stack.Screen
                    name="(auth)"
                    options={{ title: "Authentication" }}
                />
                <Stack.Screen
                    name="(protected)"
                    options={{ title: "protection" }}
                />
            </Stack>
        </UserProvider>
    );
}
