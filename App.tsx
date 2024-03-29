import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './src/screens/Home';
import { NativeEventEmitter } from 'react-native';
import RegisterScreen from './src/screens/Register';
import LoginScreen from './src/screens/Login';
const eventEmitter = new NativeEventEmitter();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ HomeScreen }
          options={{title: 'Home', headerShown: false}}          
        />
        <Stack.Screen
          name="Login"
          component={ LoginScreen }
          options={{title: 'Login', headerShown: false}}          
        />
        <Stack.Screen
          name="Register"
          component={ RegisterScreen }
          options={{title: 'Register', headerShown: false}}          
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;