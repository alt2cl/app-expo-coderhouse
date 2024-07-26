import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile/Profile';
import Pic from '../screens/profile/Pic';

const Stack = createNativeStackNavigator();

export default function ProfileStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="User" component={Profile} />
            <Stack.Screen name="Foto" component={Pic} />
        </Stack.Navigator>

    )

}