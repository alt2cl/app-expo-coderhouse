import { StyleSheet, Text, View, FlatList } from 'react-native'
import ButtonOutline from './ButtonOutline'
import React, { useState } from 'react'
const QuestionsBox = ({ item, action }) => {
    const [selectedOption, setselectedOption] = useState(null)

    const handleSelectedOption = (title) => {
        console.log('click')
        setselectedOption(title)

    }
    return (

        <View className="p-5 bg-white mb-5 rounded-md shadow-lg shadow-slate-600">
            <Text className="text-slate-700 text-lg text-center font-semibold mb-5">
                {item.title}
            </Text>
            {item.options.map((item) => {
                return (

                    <ButtonOutline key={item.id} title={item.title} className="mb-2" action={() => handleSelectedOption(item.title)} isSelected={item.title == selectedOption} />

                )
            })}
            {/* <FlatList
                data={item.options}
                renderItem={({ item }) => {
                    return (
                        <ButtonOutline title={item.title} className="mb-2" action={() => handleSelectedOption(item.title)} isSelected={item.title == selectedOption} />
                    )
                }}
            /> */}
        </View>

    )
}

export default QuestionsBox

const styles = StyleSheet.create({})