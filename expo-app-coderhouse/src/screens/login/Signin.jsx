import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '@/components/InputForm'
import Title from '@/components/Title'
import { useDispatch } from 'react-redux'
import { setUser } from '@/features/AuthSlice'
import ButtonPrimary from '@/components/ButtonPrimary'
import ButtonOutline from '@/components/ButtonOutline'
import { signinSchema } from '@/validaciones/loginSchema'
import { useSignInMutation } from '@/services/authService'
import { insertSession } from '@/persistence'


const Signin = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorAuth, setErrorAuth] = useState("")
    const [triggerSignIn, result] = useSignInMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (result.isSuccess && result?.data) {
            insertSession({
                email: result.data.email,
                localId: result.data.localId,
                token: result.data.idToken

            }).then((response) => {
                console.log('response', response)
                dispatch(
                    setUser({
                        email: result.data.email,
                        idToken: result.data.idToken,
                        localId: result.data.localId
                    })
                )

            })

        } else if (result.isError) {
            console.log('Error de autenticación: ', result.error.data);
            setErrorAuth('Este usuario no existe')
        }

    }, [result])


    const handleSubmit = () => {
        try {
            setErrorEmail("")
            setErrorPassword("")
            signinSchema.validateSync({ email, password })
            triggerSignIn({ email, password, returnSecureToken: true })

        } catch (error) {
            console.log('error: ', error.path)
            if (error.path == 'email') {
                setErrorEmail(error.message)
            } else if (error.path == 'password') {
                setErrorPassword(error.message)
            }

        }


    }

    return (
        <View className="p-5">
            <View className="bg-slate-100 border-white border-2 shadow-lg shadow-slate-600 p-5 pb-10 rounded-lg">
                <Title title={"Ingreso"} />
                <Text className="text-slate-600 mb-5 text-base">Para ver tus resultados debes registrate</Text>

                <View className="border-b-2 border-slate-300 mb-5 border-dotted"></View>
                <InputForm
                    className="mb-5"
                    label={"Email"}
                    onChange={setEmail}
                    error={errorEmail}
                />
                <InputForm
                    className="mb-5"
                    label={"Contraseña"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure
                />
                {errorAuth && <Text className="text-red-500">{errorAuth}</Text>}

                <ButtonPrimary title={"Entrar y ver resultados"} action={handleSubmit} className="mt-2" />
                <View className="mt-8">
                    <Text className="text-center text-slate-600 font-semibold mb-4">¿No tienes una cuenta?</Text>
                    <ButtonOutline title={"Registrar"} action={() => navigation.navigate("Signup")} />
                </View>

            </View>
        </View>
    )
}

export default Signin

