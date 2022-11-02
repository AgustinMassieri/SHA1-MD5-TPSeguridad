import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Index from './screens/Index';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Main from './screens/Main';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Index" component={Index}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="Main" component={Main}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default App;