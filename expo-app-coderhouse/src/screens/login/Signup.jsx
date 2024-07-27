import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '@/components/InputForm'
import Title from '@/components/Title'
import ButtonPrimary from '@/components/ButtonPrimary'
import { useSignUpMutation } from '@/services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '@/features/AuthSlice'
import { signupSchema } from '@/validaciones/loginSchema'

const Signup = () => {

    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
    const dispatch = useDispatch()
    const [triggerSignUp, result] = useSignUpMutation()


    useEffect(() => {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken,
                    localId: result.data.localId
                })
            )
        }

    }, [result])


    const onSubmit = () => {

        try {
            setErrorEmail("")
            setErrorPassword("")
            setErrorConfirmPassword("")
            signupSchema.validateSync({ email, password, confirmPassword })
            triggerSignUp({ email, password, returnSecureToken: true })
        } catch (error) {

            switch (error.path) {
                case "email":
                    setErrorEmail(error.message);
                case "password":
                    setErrorPassword(error.message);
                case "confirmPassword":
                    setErrorConfirmPassword(error.message);
                default:
                    break;
            }

        }

    }

    return (
        <View className="p-5">
            <View className="bg-slate-100 border-white border-2 shadow-lg shadow-slate-600 p-5 pb-10 rounded-lg">
                <Title title={"Registrar"} />
                <Text className="text-slate-600 mb-5 text-base">Para ver tus resultados debes registrate</Text>
                <View className="border-b-2 border-slate-300 mb-5 border-dotted"></View>
                <InputForm
                    className="mb-5"
                    label={"email"}
                    onChange={setEmail}
                    error={errorEmail}
                />
                <InputForm
                    className="mb-5"
                    label={"password"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure
                />
                <InputForm
                    className="mb-5"
                    label={"confirm password"}
                    onChange={setConfirmPassword}
                    error={errorConfirmPassword}
                    isSecure
                />
                <ButtonPrimary title={"Registrar"} action={onSubmit} className="mt-2" />


            </View>
        </View>
    )
}

export default Signup

