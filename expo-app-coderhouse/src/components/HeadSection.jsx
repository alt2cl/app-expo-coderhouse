import { Text, View } from 'react-native'
import React from 'react'

const HeadSection = ({ title, size = "medium" }) => {
    return (
        <View className="mb-3 py-5">
            <Text className={`text-${size} text-teal-500 font-semibold text-center`}>{title}</Text>
        </View>
    )
}

export default HeadSection

