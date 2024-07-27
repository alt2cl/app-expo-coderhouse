import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import QuestionsBox from '@/components/QuestionsBox'
import ButtonPrimary from '@/components/ButtonPrimary'
import { SimpleLineIcons } from '@expo/vector-icons';
import HeadSection from '@/components/HeadSection';


const Preguntas = ({ navigation, route }) => {

    const nodoLevel = route.params.nodoLevel
    const questionCount = nodoLevel.questions.length

    return (
        <ScrollView style={{ flex: 1 }}>

            <View className="p-4 pb-20 ">
                <HeadSection size="base" title={'RESPONDE LAS SIGUIENTES PREGUNTAS'} />

                {
                    nodoLevel.questions.map((item, index) => {
                        return (
                            <QuestionsBox index={index + 1} item={item} key={'question-' + index} countQuestions={questionCount} />
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