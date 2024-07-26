import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


export default function Resultados() {
    const resultado = useSelector((state) => state.resultado.value);
    useEffect(() => {

        //aqui agregar

    }, [])

    return (
        <View className="p-5">
            <View className="border-slate-300 border-b-2 border-dotted pb-3 mb-3">
                <View className="flex-row">
                    <Text className="mb-1 text-slate-500 ">Categoría: </Text>

                    <Text className="mb-1 text-slate-500 font-semibold">{resultado.level}</Text>
                </View>
                <View className="flex-row gap-1 justify-between">
                    <View className="bg-teal-500 rounded-md px-3 py-2">
                        <Text className="text-xs text-slate-700 text-center font-semibold mb-1">Tiempo</Text>
                        <Text className="font-semibold text-white text-lg mb-1 text-center">{resultado.time}</Text>
                    </View>
                    <View className="bg-cyan-500 rounded-md px-3 py-2 flex-grow">
                        <Text className="text-xs text-slate-700 text-center font-semibold mb-1">Comprensión</Text>
                        <Text className="font-semibold text-white text-lg mb-1 text-center">{resultado.comprehension} </Text>
                    </View>
                    <View className="bg-blue-400 rounded-md px-3 py-2">
                        <Text className="text-xs text-slate-700 text-center font-semibold mb-1">Palabras por minuto</Text>
                        <Text className="font-semibold text-white text-lg mb-1 text-center">{resultado.ppm}</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})