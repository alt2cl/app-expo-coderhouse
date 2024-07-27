import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const Counter = ({ stop, onStop }) => {

    const [cen, setCen] = useState(0);
    const [seg, setSeg] = useState(0);
    const [min, setMin] = useState(0);
    const [hrs, setHrs] = useState(0);

    useEffect(() => {
        let interval;

        if (!stop) {
            interval = setInterval(() => {
                setCen(prevCen => {
                    if (prevCen === 99) {
                        setSeg(prevSeg => {
                            if (prevSeg === 59) {
                                setMin(prevMin => {
                                    if (prevMin === 59) {
                                        setHrs(prevHrs => prevHrs + 1);
                                        return 0;
                                    }
                                    return prevMin + 1;
                                });
                                return 0;
                            }
                            return prevSeg + 1;
                        });
                        return 0;
                    }
                    return prevCen + 1;
                });
            }, 10);
        } else {
            // Llama a onStop con el tiempo formateado
            if (onStop) {
                onStop(`${formatNumber(hrs)}:${formatNumber(min)}:${formatNumber(seg)}:${formatNumber(cen)}`);
            }
        }

        return () => clearInterval(interval);
    }, [stop]);

    const formatNumber = (num) => (num < 10 ? `0${num}` : num);


    return (
        <View className={`bg-slate-600 ${stop && "bg-red-500"} p-3 text-white`}>
            {
                stop && <Text className="text-center text-red-100 font-semibold tracking-wider -mt-2">Este es tu tiempo</Text>
            }
            <View className={`flex-row justify-center`}>
                <Text style={styles.number}>{formatNumber(hrs)}</Text>
                <Text style={styles.separator}>:</Text>
                <Text style={styles.number}>{formatNumber(min)}</Text>
                <Text style={styles.separator}>:</Text>
                <Text style={styles.number}>{formatNumber(seg)}</Text>
                <Text style={styles.separator}>:</Text>
                <Text style={styles.number}>{formatNumber(cen)}</Text>
            </View>

        </View>

    )
}

export default Counter

const styles = StyleSheet.create({
    number: {
        fontSize: 23,
        color: 'white',
        paddingHorizontal: 4
    },
    separator: {
        color: '#ccc',
        fontSize: 20
    }
})