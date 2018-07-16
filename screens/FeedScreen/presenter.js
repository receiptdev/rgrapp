import React from "react";
import { Text } from "react-native";

const FeedScreen = props => (
    <Text onPress={() => props.navigation.navigate("Likes")}>Feed</Text>
);

export default FeedScreen;
