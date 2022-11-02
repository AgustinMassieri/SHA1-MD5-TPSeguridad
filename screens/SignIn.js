import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

const SignIn = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successfulLogin, setSuccessfulLogin] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  signUpUser = () =>{
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        setSuccessfulLogin(true);
        setErrorLogin(false);
        setTimeout(nextPage, 5000);
    }).catch((error) => {
        setSuccessfulLogin(false);
        setErrorLogin(true);
    });
  }

  function nextPage(){
    navigation.navigate('Main');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder='Email:' value={email} onChangeText={ (value) => setEmail(value) }/>
      <TextInput secureTextEntry={true} style={styles.input} placeholder='Password:' value={password} onChangeText={ (value) => setPassword(value) }/>
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