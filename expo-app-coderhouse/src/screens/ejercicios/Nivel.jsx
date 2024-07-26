import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import test from './../../config/config.json'
import ListNivelItem from '../../components/ListNivelItem'

const Nivel = ({ navigation, route }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text className="mb-7 text-lg text-slate-600 font-medium">Escoge tu nivel de lectura</Text>
                <ListNivelItem data={test} navigation={navigation} />
            </View>

        </ScrollView>

    )
}

export default Nivel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        paddingVertical: 20
    },
})