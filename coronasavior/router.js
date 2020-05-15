import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { lightGreen } from './utils/constants'

import Login from './screens/login';
import SignUp from './screens/signup';
import Profile from './screens/profile';
import Home from './screens/home';

const Routes = createAppContainer(
    createStackNavigator({
        Login : {
            screen: Login,
            navigationOptions: {
                headerShown: true,
                headerLeft: () => null
            }
        },
        SignUp : {
            screen: SignUp,
            navigationOptions: {
                headerShown: true,
                headerLeft: () => null
            }
        },
        Profile : {
            screen: Profile,
            navigationOptions: {
                headerShown: true,
                headerLeft: () => null
            }
        },
        Home : {
            screen: Home,
            navigationOptions: {
                headerShown: true,
                headerLeft: () => null
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: lightGreen,
            }
        }
    })
);

export default Routes;