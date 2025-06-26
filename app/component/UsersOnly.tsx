import { useUser } from "@/hooks/useUser";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

const UsersOnly = ({ children }: any) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && user === null) {
            router.replace("/");
        }
    }, [user, authChecked, router]);

    if (!authChecked || !user) {
        <Text>Loading...</Text>;
    }

    return children;
};

export default UsersOnly;
