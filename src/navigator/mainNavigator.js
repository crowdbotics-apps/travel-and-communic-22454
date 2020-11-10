import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings170122Navigator from '../features/Settings170122/navigator';
import Settings170107Navigator from '../features/Settings170107/navigator';
import NotificationList170106Navigator from '../features/NotificationList170106/navigator';
import Maps170105Navigator from '../features/Maps170105/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings170122: { screen: Settings170122Navigator },
Settings170107: { screen: Settings170107Navigator },
NotificationList170106: { screen: NotificationList170106Navigator },
Maps170105: { screen: Maps170105Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
