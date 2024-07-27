import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native'
import ExercisesStackNavigator from './ExercisesStackNavigator'
import ResultadosStackNavigator from './ResultadosStackNavigator'
import ProfileStackNavigator from './ProfileStackNavigator'
import { SimpleLineIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
  const { user } = useSelector((state) => state.auth.value)
  const [isTabEnabled, setIsTabEnabled] = useState(false)

  useEffect(() => {
    if (user == null) {
      setIsTabEnabled(false)
    } else {
      setIsTabEnabled(true)

    }

  }, [user])

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}>
      <Tab.Screen name="Ejercicios" component={ExercisesStackNavigator} options={{
        tabBarIcon: ({ focused }) => {
          return (
            <SimpleLineIcons name="eyeglass" size={24} color="#3f5864" />
          )
        },
        tabBarLabel: ({ focused }) => {
          return <Text className={`text-xs  ${focused ? 'text-teal-500' : 'text-slate-600'}`}>Ejercicios</Text>
        }
      }} />
      <Tab.Screen name="Resultados" component={ResultadosStackNavigator} options={{
        tabBarIcon: ({ focused }) => {
          return (<SimpleLineIcons name="graph" size={26} color="#3f5864" />)
        },
        tabBarLabel: ({ focused }) => {
          return <Text className={`text-xs ${focused ? 'text-teal-500' : 'text-slate-600'}`}>Resultados</Text>
        }
      }} />
      <Tab.Screen name="Perfil" component={ProfileStackNavigator} options={{
        tabBarIcon: ({ focused }) => {
          {
            return (
              <SimpleLineIcons name="user" size={24} color="#3f5864" />
            )
          }
        }
        ,
        tabBarLabel: ({ focused }) => {
          return <Text className={`text-xs ${focused ? 'text-teal-500' : 'text-slate-600'}`}>Perfil</Text>
        }

      }}

        listeners={({ navigation }) => ({
          tabPress: (e) => {
            if (!isTabEnabled) {
              e.preventDefault();
            }
          },
        })}


      />
    </Tab.Navigator>

  )
}

export default MainTabNavigator

const styles = StyleSheet.create({
  tabBar: {
    paddingBottom: 30,
    paddingTop: 10,
    height: 85
  }
})