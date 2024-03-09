import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login'
import Home from '../screens/Home'

export default function Routes() {

    const Stack = createNativeStackNavigator()

    return (
   <Stack.Navigator 
        backBehavior='none'
        screenOptions={{
            headerShown: false,
            gestureEnabled: false
        }}
    >
        
        <Stack.Screen
            name='Login'
            component={Login}
        />
        <Stack.Screen
            name='Home'
            component={Home}
        />
   </Stack.Navigator>
  );
}