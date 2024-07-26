import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { StyleSheet, Text, View } from 'react-native'
import ExercisesStackNavigator from './ExercisesStackNavigator'
import ResultadosStackNavigator from './ResultadosStackNavigator'
import ProfileStackNavigator from './ProfileStackNavigator'
import { SimpleLineIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}>
      <Tab.Screen name="Ejercicios" component={ExercisesStackNavigator} options={{
        tabBarIcon: ({ facused }) => {
          return (
            <SimpleLineIcons name="eyeglass" size={24} color="black" />
          )
        }
      }} />
      <Tab.Screen name="Resultados" component={ResultadosStackNavigator} options={{
        tabBarIcon: ({ focused }) => {
          return (<SimpleLineIcons name="graph" size={24} color="black" />)
        }
      }} />
      <Tab.Screen name="Perfil" component={ProfileStackNavigator} options={{
        tabBarIcon: () => {
          {
            return (
              <SimpleLineIcons name="user" size={24} color="black" />
            )
          }
        }
      }} />
    </Tab.Navigator>

  )
}

export default MainTabNavigator

const styles = StyleSheet.create({
  tabBar: {
    paddingBottom: 30,
    height: 85
  }
})