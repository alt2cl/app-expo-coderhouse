import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackNavigator from "@/navigation/LoginStackNavigator"

import Resultados from '../screens/Resultados';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function ResultadosStackNavigator() {
    //const [user, setUser] = useState(false)
    const { user } = useSelector((state) => state.auth.value)
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
                flex: 1
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShown: false

        }}>
            {user ?
                <Stack.Screen name="Progresos" component={Resultados} options={{ headerShown: true }} />
                :
                <Stack.Screen name="Autenticacion" component={LoginStackNavigator} />
            }
        </Stack.Navigator>

    )

}