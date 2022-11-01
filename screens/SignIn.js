import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { sha256 } from 'js-sha256';
import md5 from 'md5';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successfulLogin, setSuccessfulLogin] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);


  const onCovert = () => {
    const aux = sha256(input);
    setInputConvertedSHA256(aux);
    const aux2 = md5(input);
    setInputConvertedMD5(aux2);
  }

  signUpUser = () =>{

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        setSuccessfulLogin(true);
        setErrorLogin(false);
    }).catch((error) => {
        setSuccessfulLogin(false);
        setErrorLogin(true);
    });
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder='Email:' value={email} onChangeText={ (value) => setEmail(value) }/>
      <TextInput style={styles.input} placeholder='Password:' value={password} onChangeText={ (value) => setPassword(value) }/>
      <TouchableOpacity onPress={signUpUser}>
        <Text style={styles.button}>Sign !</Text>
      </TouchableOpacity>
      {successfulLogin && (<Text style={{color: 'green'}}> Login exitoso! </Text>)}
      {errorLogin && (<Text style={{color: 'red'}}> Usuario incorrecto! </Text>)}
    </SafeAreaView>
  );
}

export default SignIn;

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