import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { sha256 } from 'js-sha256';
import md5 from 'md5';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successfulRegister, setSuccessfulRegister] = useState(false);
  const [errorMailAlreadyInUse, setErrorMailAlreadyInUse] = useState(false);
  const [errorInvalidEmail, setErrorInvalidEmail] = useState(false);

  const onCovert = () => {
    const aux = sha256(input);
    setInputConvertedSHA256(aux);
    const aux2 = md5(input);
    setInputConvertedMD5(aux2);
  }

  signUpUser = () =>{
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
        setSuccessfulRegister(true);
        setErrorMailAlreadyInUse(false);
        setErrorInvalidEmail(false);
    }).catch((err) => {
        if (err.code == 'auth/email-already-in-use'){
            setSuccessfulRegister(false);
            setErrorMailAlreadyInUse(true);
            setErrorInvalidEmail(false);
        }else if (err.code == 'auth/invalid-email') {
            setSuccessfulRegister(false);
            setErrorMailAlreadyInUse(false);
            setErrorInvalidEmail(true);
        }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
        <TextInput style={styles.input} placeholder='Email:' value={email} onChangeText={ (value) => setEmail(value) }/>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Password:' value={password} onChangeText={ (value) => setPassword(value) }/>
        <TouchableOpacity onPress={signUpUser}>
            <Text style={styles.button}>Sign up!</Text>
        </TouchableOpacity>
        {successfulRegister && (<Text style={{color: 'green'}}> Su usuario se genero de forma correcta! </Text>)}
        {errorMailAlreadyInUse && (<Text style={{color: 'red'}}> El mail ingresado ya esta en uso! </Text>)}
    </SafeAreaView>
  );
}

export default SignUp;

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