import { StyleSheet, Text, View, FlatList } from 'react-native'
import ButtonOutline from './ButtonOutline'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setPercent } from '@/features/ResultadoSlice'




const QuestionsBox = ({ item, action, countQuestions }) => {
    const [selectedOption, setSelectedOption] = useState(null)
    const dispatch = useDispatch()

    const correctAnswer = item.correct_answer

    console.log('correctAnswer:', correctAnswer)

    const handleSelectedOption = (item) => {
        console.log('click id:', item.id)
        setSelectedOption(item.id)

        if (item.id == correctAnswer) {
            console.log('respuesta correcta', correctAnswer)
            const valueperitem = 100 / countQuestions

            dispatch(
                setPercent({
                    comprehension: valueperitem,
                })
            )
        }

    }






    return (

        <View className="p-5 bg-white mb-5 rounded-md shadow-lg shadow-slate-600">
            <Text className="text-slate-700 text-lg text-center font-semibold mb-5">
                {item.title}
            </Text>
            {item.options.map((item) => {
                return (

                    <ButtonOutline
                        key={item.id}
                        title={item.title}
                        className="mb-2"
                        action={() => handleSelectedOption(item)}
                        isSelected={item.id == selectedOption}
                    />

                )
            })}

        </View>

    )
}

export default QuestionsBox

const styles = StyleSheet.create({})