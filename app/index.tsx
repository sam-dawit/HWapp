import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
    return (
        <View className="flex-1 justify-center items-center p-4">
            <Text className="text-2xl font-bold">Welcome to my App</Text>

            <View className="flex-row gap-8 ">
                <Link
                    href="/Login"
                    className="text-white text-lg p-6 bg-slate-400 rounded-xl  "
                >
                    Login
                </Link>

                <Link
                    href="/Register"
                    className="text-white text-lg p-6 bg-slate-400 rounded-xl  "
                >
                    Register
                </Link>
            </View>
        </View>
    );
}
