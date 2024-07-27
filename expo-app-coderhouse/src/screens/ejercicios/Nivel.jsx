import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import test from './../../config/config.json'
import ListNivelItem from '../../components/ListNivelItem'

const Nivel = ({ navigation, route }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text className="mb-14 text-lg text-slate-600 text-center font-medium px-4 mt-5">Pon a prueba tus habilidades de lectura, escoge una categoría y comencemos!</Text>
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