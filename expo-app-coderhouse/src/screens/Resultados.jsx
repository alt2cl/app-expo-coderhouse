import { ScrollView, View } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetResultByIdQuery, usePostResultMutation } from '@/services/resultServices';
import HeadSection from '@/components/HeadSection';
import ButtonOutline from '@/components/ButtonOutline';
import ItemResult from '@/components/ItemResult';
import { resetAll } from '@/features/ResultadoSlice';

export default function Resultados({ navigation }) {
    const resultado = useSelector((state) => state.resultado.value);
    const { localId: UID } = useSelector((state) => state.auth.value);
    const dispatch = useDispatch();

    const [postResult] = usePostResultMutation();

    const { data: historial, isSuccess, refetch } = useGetResultByIdQuery(UID);

    const handleSubmitResultado = () => {

        postResult({
            result: {
                category: 2,
                comprehension: resultado.comprehension,
                time: resultado.time,
                wpm: resultado.wpm,
            },
            localId: UID,
        });

        dispatch(resetAll());
        refetch();
    };

    return (
        <ScrollView>
            <View className="p-5">
                <View className="border-slate-300 border-b-2 border-dotted pb-3 mb-3">
                    {(resultado.time) ? (
                        <>
                            <ItemResult item={resultado} />
                            <View className="flex-row gap-3 justify-between mt-1">
                                <ButtonOutline title="Agregar al historial" className="flex-grow" action={handleSubmitResultado} />
                                <ButtonOutline title="Hagámoslo de nuevo" className="flex-grow" action={() => navigation.navigate('Nivel')} />
                            </View>
                        </>
                    ) : (
                        <ButtonOutline title="Realiza un test de lectura" className="flex-grow" action={() => navigation.navigate('Nivel')} />
                    )}
                </View>

                <HeadSection title={"HISTORIAL DE PROGRESOS"} size="base" />
                {isSuccess &&
                    historial?.map((item) => (
                        <ItemResult item={item.result} key={item.id} />
                    ))
                }
            </View>
        </ScrollView>
    );
}
