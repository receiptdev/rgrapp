import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";
import LoginScreen from "./presenter";

class Container extends Component {
    state = {
        username: "",
        password: "",
        isSubmitting: false
    };
    static propTypes = {
        login: PropTypes.func.isRequired,
        fbLogin: PropTypes.func.isRequired
    };
    render() {
        return (
            <LoginScreen
                {...this.state}
                changeUserName={this._changeUserName}
                changePassword={this._changePassword}
                submit={this._submit}
                fbLogin={this._handleFBLogin}
            />
        );
    }
    _changeUserName = text => {
        this.setState({ username: text });
    };
    _changePassword = text => {
        this.setState({ password: text });
    };
    _submit = async () => {
        const { username, password, isSubmitting } = this.state;
        const { login } = this.props;
        if (!isSubmitting) {
            if (username && password) {
                // submit
                this.setState({
                    isSubmitting: true
                });
                // redux action
                const loginResult = await login(username, password);
                if (!loginResult) {
                    Alert.alert("Something went wrong, try again!");
                    this.setState({
                        isSubmitting: false
                    });
                }
            } else {
                Alert.alert("All fields are required");
            }
        }
    };
    _handleFBLogin = async () => {
        const { fbLogin } = this.props;
        this.setState({ isSubmitting: true });
        const facebookResult = await fbLogin();

        if (!facebookResult) {
            this.setState({ isSubmitting: false });
        }
    };
}

export default Container;
