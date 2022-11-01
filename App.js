import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity,  } from 'react-native';
import { sha256 } from 'js-sha256';
import md5 from 'md5';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './config/firebase'

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onCovert = () => {
    const aux = sha256(input);
    setInputConvertedSHA256(aux);
    const aux2 = md5(input);
    setInputConvertedMD5(aux2);
  }

  signUpUser = () =>{
    try {
        if(password.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        alert("Usuario creado")
    } catch (error) {
        console.log(error.toString())
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder='Email:' value={email} onChangeText={ (value) => setEmail(value) }/>
      <TextInput style={styles.input} placeholder='Password:' value={password} onChangeText={ (value) => setPassword(value) }/>
      <TouchableOpacity onPress={signUpUser}>
        <Text style={styles.button}>Sign up!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
    fontSize: 20,
    width: 250
  },
  button: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    margin: 20,
    fontWeight: 'bold',
    fontSize: 20
  }
});
