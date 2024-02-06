import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
                headerShown: false
            }}
        />
        <Tab.Screen
            name='Gerar Senha'
            component={GeneratePass}
            options={{
                headerShown: false
            }}
        />
        <Tab.Screen
            name='Senhas Salvas'
            component={SavedPass}
            options={{
                headerShown: false
            }}
        />
    </Tab.Navigator>
    );
}