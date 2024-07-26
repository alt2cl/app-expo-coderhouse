import { Pressable, Text, View, } from 'react-native'
import React from 'react'

const ButtonOutline = ({ title, action, isSelected, icon, ...props }) => {
    return (
        <View {...props}>
            <Pressable onPress={action} className={`rounded-lg flex-row border-teal-500 ${isSelected && "bg-teal-500"} border-2 p-2 items-center justify-center`}>
                <Text className={`text-teal-500  font-semibold text-center text-base ${isSelected && "text-white"}`}>
                    {title}
                </Text>
                {
                    icon &&
                    <View className="ml-2">
                        {icon}
                    </View>

                }
            </Pressable>
        </View>

    )
}

export default ButtonOutline

