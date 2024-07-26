import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import QuestionsBox from '@/components/QuestionsBox'
import ButtonPrimary from '@/components/ButtonPrimary'
import { SimpleLineIcons } from '@expo/vector-icons';




const Preguntas = ({ navigation, route }) => {
    console.log('route params', route.params.nodoLevel)

    const nodoLevel = route.params.nodoLevel

    return (
        <ScrollView style={{ flex: 1 }}>
            <View className="p-4 pt-7">
                {
                    nodoLevel.questions.map((item, index) => {
                        return (
                            <QuestionsBox item={item} key={'question-' + index} />
                        )
                    })
                }
                <ButtonPrimary
                    title="Ver resultados"
                    action={() => navigation.navigate('Resultados')}
                    icon={<SimpleLineIcons name="arrow-right-circle" size={24} color="white" />}
                />
            </View>

        </ScrollView>

    )
}

export default Preguntas

const styles = StyleSheet.create({})