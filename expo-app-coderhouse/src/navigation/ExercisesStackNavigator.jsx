import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Nivel from '../screens/ejercicios/Nivel';
import Lectura from '../screens/ejercicios/Lectura';
import Test from '../screens/ejercicios/Test';
import Preguntas from '../screens/ejercicios/Preguntas';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

export default function ExercisesStackNavigator() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName="Nivel" screenOptions={{
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
                <Stack.Screen name="Nivel" component={Nivel} />
                <Stack.Screen name="Lectura" component={Lectura} />
                <Stack.Screen name="Test" component={Test} />
                <Stack.Screen name="Preguntas" component={Preguntas} />
            </Stack.Navigator>
        </SafeAreaView>

    )

}