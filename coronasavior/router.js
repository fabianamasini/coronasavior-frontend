import React from 'react';
import { createStackNavigator }  from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import stackNav from './routes/stackNavigation'
import drawerNav from './routes/drawerNavigation'

const Stack = createStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Stack' component={stackNav}/>
        <Stack.Screen name='Drawer' component={drawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
