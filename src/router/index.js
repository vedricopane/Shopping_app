import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home, Categories, Login} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      // initialRouteName="Home"
      activeColor="white"
      barStyle={{backgroundColor: '#5d8aa8'}}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Products',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="black" size={24} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          tabBarLabel: 'Categories',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color="black"
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name='Login' component={Login} /> */}
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
