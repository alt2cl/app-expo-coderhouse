import { StyleSheet, Text, View, Image, Pressable } from 'react-native'

import { useDispatch, useSelector } from "react-redux";
import { useGetProfileimageQuery } from '@/services/resultServices'
import { clearUser } from '@/features/AuthSlice';
import ButtonPrimary from '@/components/ButtonPrimary';
import { truncateSessionTable } from '@/persistence/index';


const MyProfile = ({ navigation }) => {

    const dispatch = useDispatch()
    const { imageCamera, localId } = useSelector((state) => state.auth.value)
    const { data: imageFromBase } = useGetProfileimageQuery(localId)
    const launchCamera = async () => {
        navigation.navigate("Image Selector");
    };

    const launchLocation = async () => {
        navigation.navigate("List Address");
    };

    // const defaultImageRoute = require('./../../assets/img/niveles/adultos.png');

    const defaultImageRoute = require('./../../../assets/img/niveles/adultos.png');


    const signOut = async () => {
        try {
            const response = await truncateSessionTable()
            console.log(response)
            dispatch(clearUser())
        } catch (error) {
            console.log({ errorSignOutDB: error })
        }
    }

    return (
        <View className="p-5 flex-1">
            <View className="mb-5 mt-5" >
                {imageFromBase || imageCamera ? (
                    <Image
                        source={{ uri: imageFromBase?.image || imageCamera }}
                        style={styles.img}
                        resizeMode="cover"
                    />
                ) : (
                    <Image
                        style={styles.img}
                        resizeMode="cover"
                        source={defaultImageRoute}
                    />
                )}

            </View>

            <ButtonPrimary
                className="mb-5"
                action={launchCamera}
                title={
                    imageFromBase || imageCamera
                        ? "Modificar foto"
                        : "Agregar foto"
                }
            />
            {/* <ButtonPrimary title="My address" action={launchLocation} /> */}

            <ButtonPrimary action={signOut} title="Salir de la sesion" />
        </View>
    );
}

export default MyProfile

const styles = StyleSheet.create({

    img: {
        height: 200,
        width: 200,
        borderRadius: 100,
        margin: 'auto'
    }
})
