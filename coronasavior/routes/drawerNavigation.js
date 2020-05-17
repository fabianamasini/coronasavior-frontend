import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import Profile from '../screens/profile';
import Home from '../screens/home';

const Drawer = createDrawerNavigator()

function drawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Profile' component={Profile}/>
    </Drawer.Navigator>
  )
}

export default drawerNav;
