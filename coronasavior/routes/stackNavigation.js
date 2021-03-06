import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { lightGreen } from '../utils/constants';

import Login from '../screens/login';
import SignUp from '../screens/signup';
import Profile from '../screens/profile';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import QuizDetails from '../screens/quizDetails'
import Ranking from '../screens/ranking';

const Stack = createStackNavigator()

function stackNav() {
  return (
    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
         headerTintColor: '#fff',
         headerBackTitleVisible: false,
         headerStyle: {
             backgroundColor: lightGreen,
         }
        }}
    >
    <Stack.Screen
        name="Home"
        component={Home}
        options={{
            headerShown: true,
            headerLeft: () => null,
            gestureEnabled: false
        }}
    />
    <Stack.Screen
        name="Login"
        component={Login}
        options={{
            headerShown: true,
            headerLeft: () => null,
            gestureEnabled: false
        }}
    />
    <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
            headerShown: true,
            headerLeft: () => null,
            gestureEnabled: false
        }}
    />
    <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
            headerShown: true,
            headerLeft: () => null,
            gestureEnabled: false
        }}
    />
    <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{
            headerShown: true,
            headerLeft: () => null
        }}
    />
    <Stack.Screen
        name="QuizDetails"
        component={QuizDetails}
        options={{
            headerShown: true,
            headerLeft: () => null
        }}
    />
    <Stack.Screen
        name="Ranking"
        component={Ranking}
        options={{
            headerShown: true,
            headerLeft: () => null
        }}
    />
  </Stack.Navigator>
  )
}

export default stackNav
