import React from 'react';

import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/TabBar';
import MainScreen from '../screens/Main';
import SettingsScreen from '../screens/Settings';

const BottomTabs = createBottomTabNavigator();

const getTabBarIcon = name => ({ color, size }) => (
  <Feather name={name} color={color} size={size} />
);

export default function AppNavigator() {
  return (
    <BottomTabs.Navigator tabBar={props => <TabBar {...props} />}>
      <BottomTabs.Screen name="Main" component={MainScreen} />
      <BottomTabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: getTabBarIcon('settings'),
        }}
      />
    </BottomTabs.Navigator>
  );
}
