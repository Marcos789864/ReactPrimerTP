import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carga from './screens/Carga';
import index from './screens/index'; 


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Carga" component={Carga} />
        <Stack.Screen name="index" component={index} />
      </Stack.Navigator>
    </NavigationContainer>
  );}