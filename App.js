import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { sha256 } from 'js-sha256';
import md5 from 'md5';


export default function App() {

  const [input, setInput] = useState('');
  const [inputConvertedSHA256, setInputConvertedSHA256] = useState('');
  const [inputConvertedMD5, setInputConvertedMD5] = useState('');


  const onCovert = () => {
    const aux = sha256(input);
    setInputConvertedSHA256(aux);
    const aux2 = md5(input);
    setInputConvertedMD5(aux2);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight: 'bold', marginBottom: 10}}>Generate SHA256 Encoded Hash</Text>
      <Text style={{marginBottom: 10}}>Please insert any value to convert in SHA256</Text>
      <TextInput style={{borderBottomColor: 'black', borderBottomWidth: 2, marginBottom: 10}} placeholder='Insert value:' value={input} onChangeText={ (value) => setInput(value) }/>
      <TouchableOpacity onPress={onCovert}>
        <Text style={{borderColor: 'black', borderWidth: 2, margin: 5, borderRadius: 2, padding: 4}}>Convert to SHA256</Text>
      </TouchableOpacity>
      <Text style={{color: 'red', marginBottom: 5}}>SHA256: {inputConvertedSHA256}</Text>
      <Text style={{color: 'red', marginBottom: 5}}>MD5: {inputConvertedMD5}</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
