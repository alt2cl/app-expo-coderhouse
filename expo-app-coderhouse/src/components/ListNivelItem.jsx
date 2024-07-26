import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import NivelItem from '@/components/NivelItem'

const ListNivelItem = ({ data, navigation }) => {

    return (
        <View style={styles.wrap}>

            <View style={styles.grid}>
                {data.tests.map((item, index) => {
                    return (
                        <NivelItem test={item} navigation={navigation} key={'nivel-' + index} />
                    )

                })}
            </View>
        </View>
    )
}

export default ListNivelItem

const styles = StyleSheet.create({
    wrap: {
        flex: 1,

    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    }
})