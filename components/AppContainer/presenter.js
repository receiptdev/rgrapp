import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, StyleSheet } from "react-native";

class AppContainer extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired
    };
    render() {
        const { isLoggedIn } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} />
                {isLoggedIn ? (
                    <Text>You are logged In</Text>
                ) : (
                    <Text>I don't know you</Text>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default AppContainer;