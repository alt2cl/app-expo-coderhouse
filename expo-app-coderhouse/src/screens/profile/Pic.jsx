import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage } from '../features/User/UserSlice';
import { useGetProfileimageQuery, usePostProfileImageMutation } from '../services/shopServices';
import AddButton from '../components/AddButton';
import ButtonPrimary from '@/components/ButtonPrimary';
const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [isImageFromCamera, setIsImageFromCamera] = useState(false);

    const dispatch = useDispatch();

    const [triggerPostImage, result] = usePostProfileImageMutation();
    const { localId } = useSelector((state) => state.auth.value);
    const { data: imageFromBase } = useGetProfileimageQuery(localId);
    //console.log(localId)


    const pickLibraryImage = async () => {
        try {
            setIsImageFromCamera(false)
            const permissionGallery = await verifyGalleryPermissions()
            if (permissionGallery) {
                const result = await ImagePicker.launchImageLibraryAsync({
                    base64: true,
                    allowsEditing: true,
                    aspect: [1, 1],
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 0.2,
                })

                console.log(result);

                if (!result.canceled) {
                    const image = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setImage(image)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const verifyGalleryPermissions = async () => {
        const { granted } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        return granted;
    };

    const verifyCameraPermisson = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (!status) {
            return false;
        }
        return true;
    };

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermisson();
        setIsImageFromCamera(true);
        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                base64: true,
                quality: 0.2,
            });

            //console.log(result);

            if (!result.canceled) {
                setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
            }
        }
    };

    const confirmImage = async () => {
        try {
            dispatch(setCameraImage(image));
            triggerPostImage({ image, localId });
            if (isImageFromCamera) {
                ExpoLibrary.createAssetAsync(imageURI);
            }
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View className="flex-1 justify-center">
            {image || imageFromBase ? (
                <>
                    <Image
                        style={styles.img}
                        resizeMode="cover"
                        source={{ uri: image || imageFromBase?.image }}
                    />
                    <ButtonPrimary title="Take another photo" action={pickImage} />

                    <ButtonPrimary
                        title="Pick photo from gallery"
                        action={pickLibraryImage}
                    />

                    <ButtonPrimary title="Confirm photo" action={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.containerPhoto}>
                        <Text>No photo to show...</Text>
                    </View>
                    <AddButton title="Take a photo" action={pickImage} />
                    <ButtonPrimary
                        title="Pick photo from gallery"
                        action={pickLibraryImage}
                    />

                </>
            )}
        </View>
    );
}

export default ImageSelector

const styles = StyleSheet.create({


    img: {
        marginVertical: 20,
        height: 200,
        width: 200,
        borderRadius: 100
    },
    containerPhoto: {
        marginVertical: 20,
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
