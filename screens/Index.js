import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Index = ({navigation}) => {

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>TP Seguridad Informatica 2022</Text>
            <TouchableOpacity onPress={ () => navigation.navigate('SignUp')}>
                <Text style={styles.button}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => navigation.navigate('SignIn')}>
                <Text style={styles.button}>Sign in</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Index;

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
      padding: 10,
      margin: 20,
      fontWeight: 'bold',
      fontSize: 20
    },
    title: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})