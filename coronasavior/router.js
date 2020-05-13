import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/login.js';
import SignUp from './screens/signup.js';
import Profile from './screens/profile.js';

const Routes = createAppContainer(
    createStackNavigator({
        Login : {
            screen: Login,
            navigationOptions: {
                headerShown: false
            }
        },
        SignUp : {
            screen: SignUp,
            navigationOptions: {
                headerShown: false
            }
        },
        Profile : {
            screen: Profile,
            navigationOptions: {
                headerShown: false
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#7eaddd',
            }
        }
    })
);

export default Routes;
