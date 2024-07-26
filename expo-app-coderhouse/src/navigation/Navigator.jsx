
import { NavigationContainer } from '@react-navigation/native'
import MainTabNavigator from './MainTabNavigator'
import { SafeAreaView, Text } from 'react-native'

const Navigator = () => {
    return (
        <NavigationContainer>
            <MainTabNavigator />
        </NavigationContainer>



    )

}

export default Navigator

