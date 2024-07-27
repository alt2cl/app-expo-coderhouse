import { View, Text } from 'react-native'
import React from 'react'

const ItemResult = ({ item }) => {
    console.log('er item:', item)
    return (
        <View className="">
            <View className="flex-row justify-between">
                <View><Text className="font-bold text-slate-700">Tu resultado: </Text></View>
                <View className="flex-row"><Text className="mb-1 text-slate-500 ">Categoría: </Text>

                    <Text className="mb-1 text-slate-500 font-semibold">{item.category}</Text></View>

            </View>
            <View className="flex-row gap-1 justify-between">
                <View className="bg-teal-500 rounded-md px-3 py-2">
                    <Text className="text-xs text-slate-700 text-center font-semibold mb-1">Tiempo</Text>
                    <Text className="font-semibold text-white text-lg mb-1 text-center">{item.time}</Text>
                </View>
                <View className="bg-cyan-500 rounded-md px-3 py-2 flex-grow">
                    <Text className="text-xs text-slate-700 text-center font-semibold mb-1">Comprensión</Text>
                    <Text className="font-semibold text-white text-lg mb-1 text-center">{item.comprehension} </Text>
                </View>
                <View className="bg-blue-400 rounded-md px-3 py-2">
                    <Text className="text-xs text-slate-700 text-center font-semibold mb-1">Palabras por minuto</Text>
                    <Text className="font-semibold text-white text-lg mb-1 text-center">{item.wpm}</Text>
                </View>
            </View>

        </View>
    )
}

export default ItemResult