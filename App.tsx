/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/**
 * Redux methods
 */ 
import { store } from './src/redux/store';

/**
 * Created Screens 
 */ 
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import CreditScreen from './src/screens/CreditScreen';
import LoginScreen from './src/screens/LoginScreen';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

const App = ():React.ReactElement => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator >
            {/* <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen} /> */}
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='About' component={AboutScreen} />
            <Stack.Screen name='Credit' component={CreditScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
