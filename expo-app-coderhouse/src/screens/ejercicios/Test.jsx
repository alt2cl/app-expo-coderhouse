import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import data from './../../config/lecturas.json'
import Title from '@/components/Title'
import Counter from '@/components/Counter'
import ButtonPrimary from '@/components/ButtonPrimary'
import { SimpleLineIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'
import { setResultado } from '@/features/ResultadoSlice'





const Test = ({ navigation, route }) => {
    const [stop, setStop] = useState(false)
    const [timeCounter, setTimeCounter] = useState('')
    const titleHistory = route.params.titleHistory
    const currentLevel = route.params.currentLevel
    const thisLevel = data.lecturas[currentLevel]
    const nodoLevel = thisLevel.find(item => item.title == titleHistory)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('nodoLevel: ', nodoLevel.words)

        console.log(calculateWPM(timeCounter, nodoLevel.words))




    }, [timeCounter])

    const calculateWPM = (time, wordCount) => {
        const [hours, minutes, seconds, centiseconds] = time.split(':').map(Number);

        // Convertir todo el tiempo a minutos
        const totalMinutes = (hours * 60) + minutes + (seconds / 60) + (centiseconds / 6000);

        // Calcular palabras por minuto
        const wpm = wordCount / totalMinutes;
        return Math.round(wpm);
    };

    const handleStop = () => {
        setStop(true)
    }

    const handleNextStep = () => {

        dispatch(
            setResultado({
                time: timeCounter,
                level: currentLevel,
                wpm: calculateWPM(timeCounter, nodoLevel.words),
                correct: 0,
                comprehension: "",
            })

        )

        setTimeout(() => {
            navigation.navigate('Preguntas', { nodoLevel: nodoLevel })


        }, 500);


    }

    const handleTime = (finalTime) => {
        console.log('final time >>', finalTime)
        setTimeCounter(finalTime)
    }

    return (
        <ScrollView>
            <Counter stop={stop} onStop={handleTime} />
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