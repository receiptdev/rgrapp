import { createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/LogInScreen";

const LoggedOutNavigation = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    }
});

export default LoggedOutNavigation;
