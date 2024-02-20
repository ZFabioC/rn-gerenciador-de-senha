import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import GeneratePass from '../screens/Home/screens/GeneratePass';
import SavePass from '../screens/Home/screens/SavePass';
import SavedPass from '../screens/Home/screens/SavedPass';

export default function RoutesBottomNavigation() {

    const Tab = createBottomTabNavigator()

 return (
    <Tab.Navigator>
        <Tab.Screen
            name='Salvar Senha'
            component={SavePass}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return <AntDesign name="save" size={size} color={color} />
                }

            }}
        />
        <Tab.Screen
            name='Gerar Senha'
            component={GeneratePass}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return <AntDesign name="setting" size={size} color={color} />
                }
            }}
        />
        <Tab.Screen
            name='Senhas Salvas'
            component={SavedPass}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    return <AntDesign name="lock" size={size} color={color} />
                }
            }}
        />
    </Tab.Navigator>
    );
}