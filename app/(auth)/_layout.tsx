import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name="Register" />
            <Stack.Screen name="Login" />
        </Stack>
    );
};

export default _layout;
