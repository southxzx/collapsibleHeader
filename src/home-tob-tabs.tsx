import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {View} from 'react-native';
import HomeScreen from './home';

const Tab = createMaterialTopTabNavigator();

const HomeTopTab: React.FC<any> = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        lazy: true,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default HomeTopTab;
