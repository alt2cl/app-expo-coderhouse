import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Signup from '@/screens/login/Signup';
import Signin from '../screens/login/Signin';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

export default function LoginStackNavigator({ route }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName="Signin" screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                    flex: 1
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },

            }}  >
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={Signup} />


            </Stack.Navigator>
        </SafeAreaView>

    )

}