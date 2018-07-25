import { createStackNavigator } from "react-navigation";
import AddPhotoNavigation from "./AddPhotoNavigation";
import TabsNavigation from "./TabsNavigation";

const RootNavigation = createStackNavigator(
    {
        Tabs: {
            screen: TabsNavigation,
            navigationOptions: {
                header: null
            }
        },
        TakePhoto: {
            screen: AddPhotoNavigation,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        mode: "modal"
    }
);

export default RootNavigation;
