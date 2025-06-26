import { Colors } from "@/assets/colors/colors";
import { useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemedVIew = ({ safeView = false, ...props }) => {
    const theme = useColorScheme();
    const color = Colors[theme ?? "light"];

    if (!safeView) {
        return (
            <View style={{ backgroundColor: color.background }} {...props} />
        );
    } else {
        return (
            <SafeAreaView
                style={{ backgroundColor: color.background }}
                {...props}
            />
        );
    }
};

export default ThemedVIew;
