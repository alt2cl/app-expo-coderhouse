import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const InputForm = ({ label, onChange, error = " ", isSecure = false, ...props }) => {
    const [inputText, setInputText] = useState(null);

    const onChangeText = (text) => {
        setInputText(text);
        onChange(text);
    };
    return (
        <View {...props}>
            <Text className="text-slate-600 mb-2 font-medium">{label}</Text>
            <TextInput
                className="p-2 px-4 rounded-lg w-full bg-slate-600 text-slate-200 text-lg mb-0"
                value={inputText}
                onChangeText={onChangeText}
                secureTextEntry={isSecure}
            />
            {error && <Text className="text-red-500 pt-1">{error}</Text>}

        </View>
    );
};

export default InputForm;


