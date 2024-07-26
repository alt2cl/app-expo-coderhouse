import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import data from './../../config/lecturas.json'
import Title from '@/components/Title'
import Counter from '@/components/Counter'
import ButtonPrimary from '@/components/ButtonPrimary'
import { SimpleLineIcons } from '@expo/vector-icons';



const Test = ({ navigation, route }) => {
    const [stop, setStop] = useState(false)
    const titleHistory = route.params.titleHistory
    const currentLevel = route.params.currentLevel
    const thisLevel = data.lecturas[currentLevel]
    const nodoLevel = thisLevel.find(item => item.title == titleHistory)

    const handleStop = () => {
        setStop(true)
    }

    const handleNextStep = () => {
        navigation.navigate('Preguntas', { nodoLevel: nodoLevel })
    }
    return (
        <ScrollView>
            <Counter stop={stop} />
            <View className="p-5 ">
                <View className="py-4 px-7 pb-10 bg-white mb-5 rounded-lg shadow-lg shadow-slate-600">
                    <Title title={nodoLevel.title} size="h2" />
                    <Text className="text-base text-slate-800" > {nodoLevel.history}</Text>
                </View>

                {
                    stop ? <>
                        <Title title={"Bien hecho! continuemos..."} size="h4" center />
                        <ButtonPrimary title={"Vámos a las preguntas!"} action={handleNextStep} icon={<SimpleLineIcons name="arrow-right-circle" size={24} color="white" />} />

                    </>
                        :
                        <ButtonPrimary title={"Terminar"} action={handleStop} />

                }
            </View>

        </ScrollView>

    )
}

export default Test

const styles = StyleSheet.create({})