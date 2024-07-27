import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStackNavigator from "@/navigation/LoginStackNavigator"

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSession } from '@/persistence'
import { setUser } from '@/features/AuthSlice'

import Resultados from '../screens/Resultados';

const Stack = createNativeStackNavigator();

export default function ResultadosStackNavigator() {
    const { user } = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            try {
                const response = await getSession();
                if (response.rows.length) {
                    const user = response.rows._array[0]

                    dispatch(setUser({
                        email: user.email,
                        localId: user.localId,
                        idToken: user.token,
                    }))
                }

            } catch (error) {
                console.error(error)
            }
        })()
    })






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