import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Checkout from './Pages/Checkout';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Checkout" 
          component={Checkout} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
