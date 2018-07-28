import { createBottomTabNavigator } from "react-navigation";
import CameraScreen from "../screens/CameraScreen";
import LibraryScreen from "../screens/LibraryScreen";

const AddPhotoNavigation = createBottomTabNavigator(
    {
        Camera: {
            screen: CameraScreen,
            navigationOptions: {
                tabBarLabel: "Photo"
            }
        },
        Library: {
            screen: LibraryScreen,
            navigationOptions: {
                tabBarLabel: "Library"
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: true,
            upperCaseLabel: true,
            activeTintColor: "black",
            inactiveTintColor: "#bbb",
            style: {
                backgroundColor: "white",
                alignItems: "center"
            },
            labelStyle: {
                fontSize: 14,
                fontWeight: "600"
            },
            showIcon: false
        }
    }
);

export default AddPhotoNavigation;
