import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Checkout from './Pages/Checkout';
import PaymentScreen from './Pages/PaymentScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Checkout" 
          component={Checkout} 
        />
        <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
