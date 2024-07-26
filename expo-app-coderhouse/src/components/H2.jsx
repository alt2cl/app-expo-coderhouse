import { Text, View } from 'react-native'
import React from 'react'

const H2 = ({ title, center = null }) => {
    return (
        <View className="mb-3 py-2">
            <Text className={`text-2xl text-slate-700 font-bold ${center && "text-center"} `}>{title}</Text>
        </View>
    )
}

export default H2

