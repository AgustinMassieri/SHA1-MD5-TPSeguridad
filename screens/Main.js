import { sha256 } from 'js-sha256';
import md5 from 'md5';
import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const Main = ({navigation}) => {

    const [ input, setInput] = useState('');
    const [ inputConvertedSHA256, setInputConvertedSHA256] = useState('');
    const [ inputConvertedMD5, setInputConvertedMD5] = useState('');

    const onCovertSHA256 = () => {
        const aux = sha256(input);
        setInputConvertedSHA256(aux);
    }

    const onCovertMD5 = () => {
        const aux2 = md5(input);
        setInputConvertedMD5(aux2);
    }

    return(
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input} placeholder='Ingrese el valor a convertir:' value={input} onChangeText={ (value) => setInput(value) }/>
            <Text style={{width: '70%', textAlign: 'center', color: 'red'}}>{inputConvertedSHA256}</Text>
            <TouchableOpacity onPress={onCovertSHA256}>
                <Text style={styles.button}>Apply SHA256</Text>
            </TouchableOpacity>
            <Text style={{width: '70%', textAlign: 'center', color: 'red'}}>{inputConvertedMD5}</Text>
            <TouchableOpacity onPress={onCovertMD5}>
                <Text style={styles.button}>Apply MD5</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 8,
        margin: 20,
        fontWeight: 'bold',
        fontSize: 20
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,
        fontSize: 20,
        width: 250
    }
});