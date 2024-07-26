import { Text, View } from 'react-native'
import React from 'react'

const Title = ({ title, center = null, size = 'h2' }) => {
    return (
        <View className="mb-3 py-2">
            <Text className={`
                ${size == "h2" && "text-2xl"}
                ${size == "h3" && "text-xl"}
                ${size == "h4" && "text-lg"}
                ${size == "h5" && " text-base"}
                 text-slate-700 font-bold 
                 ${center && "text-center"} `}>{title}</Text>
        </View>
    )
}

export default Title

