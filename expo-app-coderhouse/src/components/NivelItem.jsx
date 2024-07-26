import { Pressable, Text, View } from 'react-native'
import { Image } from 'expo-image';

import React, { useState } from 'react'

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


const NivelItem = ({ test, navigation }) => {



    const images = {
        'adultos.png': require('./../../assets/img/niveles/adultos.png'),
        'jovenes.png': require('./../../assets/img/niveles/jovenes.png'),
        'infantes.png': require('./../../assets/img/niveles/infantes.png'),
        'ninos.png': require('./../../assets/img/niveles/ninos.png'),
        'funcional.png': require('./../../assets/img/niveles/funcional.png')
    };

    const handleNavigate = (currentLevel) => {
        navigation.navigate('Lectura', { currentLevel: currentLevel })
    }

    return (
        <View key={test.id} className="bg-slate-100 border-2 border-white shadow-lg shadow-slate-600 rounded-xl p-4 mb-7 h-50 w-[48%]">
            <Pressable onPress={() => handleNavigate(test.slug)}  >
                <View className="-mt-7">
                    <Image style={{
                        width: '100%',
                        height: 160,
                    }}
                        source={images[test.image]}
                        contentFit="cover"
                        transition={1000}
                        placeholder={{ blurhash }}
                        className="rounded w-full"
                    />

                </View>
                <View>
                    <Text className={`text-center font-semibold text-lg bg-teal-500 rounded-xl pb-1 mb-1 -mt-3 -mx-2 text-white`}>{test.title}</Text>
                    <Text className="text-center text-gray-500">{test.subtitle}</Text>

                </View>


            </Pressable>
        </View>

    )
}

export default NivelItem

