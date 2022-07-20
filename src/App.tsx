import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './app/login/pages';
import HomePage from './app/home/pages';
import CreditForm from './app/credit-add/pages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="CreditForm" component={CreditForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
