import { FlatList, StyleSheet, Text, View } from 'react-native'
import HeadSection from '@/components/HeadSection'
import Title from '@/components/Title'
import ButtonPrimary from '@/components/ButtonPrimary'
import { SimpleLineIcons } from '@expo/vector-icons';


import data from '@/config/lecturas.json'
import ButtonOutline from '@/components/ButtonOutline'
import { useState } from 'react'

const Lectura = ({ navigation, route }) => {

    const [titleHistory, setTitleHistory] = useState(null)
    const currentLevel = route.params.currentLevel.toLowerCase()
    const arraylist = data.lecturas[currentLevel]

    const handleSelectedHistory = (title) => {
        setTitleHistory(title)
    }

    const titlesection = 'TEST ' + route.params.currentLevel.toUpperCase()

    return (
        <View className="p-4">
            <HeadSection size="base" title={titlesection} />
            <View className="p-5 mb-5 bg-white rounded-lg shadow-lg shadow-slate-600 ">
                <Title title="Elige un cuento" center size="h4" />
                <FlatList
                    data={arraylist}
                    renderItem={({ item, index }) => {
                        return (
                            <ButtonOutline title={item.title} className="mb-2" action={() => handleSelectedHistory(item.title)} isSelected={item.title == titleHistory} />
                        )
                    }}
                />
            </View>
            {titleHistory &&
                <>
                    <Title title="¿Estas listo?" center size="h2" />

                    <ButtonPrimary
                        title={"Comenzar"}
                        action={() => navigation.navigate('Test', { titleHistory: titleHistory, currentLevel: currentLevel })}
                        icon={<SimpleLineIcons name="arrow-right-circle" size={24} color="white" />}
                    />

                </>


            }

        </View>
    )
}

export default Lectura

const styles = StyleSheet.create({})