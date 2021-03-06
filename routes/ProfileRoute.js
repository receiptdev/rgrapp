import { createStackNavigator } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const ProfileRoute = createStackNavigator(
    {
        Home: {
            screen: ProfileScreen,
            navigationOptions: ({ screenProps }) => ({
                headerTitle: screenProps.username
            })
        },
        ...sharedRoutes
    },
    { ...sharedOptions }
);

export default ProfileRoute;
