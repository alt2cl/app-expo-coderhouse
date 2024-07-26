import { Pressable, Text, View } from 'react-native'
import React from 'react'

const ButtonPrimary = ({ title, action, icon, bgColor, ...props }) => {
    return (
        <View {...props}>
            <Pressable onPress={action} className={`rounded-lg flex-row ${bgColor ? bgColor : "bg-teal-500"}  p-4 justify-center items-center`}>
                <Text className="text-white font-semibold text-center  text-base">
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

export default ButtonPrimary

