import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile/Profile';
import Pic from '../screens/profile/Pic';

const Stack = createNativeStackNavigator();

export default function ProfileStackNavigator() {
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
            <Stack.Screen name="Peril de usuario" component={Profile} options={{ headerShown: true }} />
            <Stack.Screen name="Foto" component={Pic} />
        </Stack.Navigator>

    )

}