import React from "react";
import { Text } from "react-native";
import ThemedVIew from "./component/ThemedVIew";

const New = () => {
    return (
        <ThemedVIew safeView={true}>
            <Text className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, veniam cum illum voluptate necessitatibus a eligendi
                sint nulla optio, minus ducimus ipsam reiciendis ad tempora
                laboriosam dolorem ratione sequi voluptatem placeat velit
                commodi molestiae eveniet aperiam. Enim hic doloribus facilis
                maxime, reiciendis voluptates suscipit, quos voluptatem, quaerat
                non tempora ab!
            </Text>
        </ThemedVIew>
    );
};

export default New;
