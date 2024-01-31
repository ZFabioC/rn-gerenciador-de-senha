import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login'
import Home from '../screens/Home'

export default function Routes() {

    const Stack = createNativeStackNavigator()

    return (
   <Stack.Navigator>
        <Stack.Screen
            name='Login'
            component={Login}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name='Home'
            component={Home}
        />
   </Stack.Navigator>
  );
}