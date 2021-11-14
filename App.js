import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Text, Box, Center } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Details from './details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const stackStyle = {

  headerTintColor: 'white',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#f60000'
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={stackStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );

}

function DetailsScreen() {
  return (
    <Stack.Navigator  screenOptions={stackStyle}>
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );

}





export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


