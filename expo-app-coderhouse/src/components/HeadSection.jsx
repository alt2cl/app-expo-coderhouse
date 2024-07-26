import { Text, View } from 'react-native'
import React from 'react'

const HeadSection = ({ title }) => {
    return (
        <View className="mb-3 py-5">
            <Text className="text-lg text-teal-500 font-medium text-center">{title}</Text>
        </View>
    )
}

export default HeadSection

