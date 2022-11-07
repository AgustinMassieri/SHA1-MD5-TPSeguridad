import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image } from 'react-native';

const Info = ({navigation}) => {

    return(
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 60, textDecorationLine: 'underline', marginBottom: 10}}>Introducción</Text>
            <Text style={{fontStyle: 'italic', width: '80%', textAlign: 'justify'}}>
                Para aplicar los conocimientos vistos durante la cursada, optamos por realizar la implementación de una función Hash en un login para usuarios dentro una aplicación, creada bajo React Native, en el cual un usuario crea una cuenta con su respectiva contraseña, cuyo valor de hash será almacenado en la base de datos, en este caso una base de datos de Firebase.  
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 15, textDecorationLine: 'underline'}}>¿Qué es una funcion Hash?</Text>
            <Text style={{marginTop: 15, width: '80%', textAlign: 'justify'}}>
                Una función criptográfica hash- usualmente conocida como “hash”- es una función matemática que transforma cualquier bloque arbitrario de datos en una nueva serie de caracteres con una longitud fija. Independientemente de la longitud de los datos de entrada, el valor hash de salida tendrá siempre la misma longitud. Es una función de una sola vía, o irreversible, puesto que no es posible obtener de manera directa el conjunto de datos original a partir del código hash (léase de manera directa, ya que mediante un ataque de fuerza bruta podrían obtenerse dichos datos, o sea, de una forma indirecta).  
            </Text>
            <Text  style={{fontWeight: 'bold', fontSize: 18, marginTop: 15}}>Funciones Hash</Text>
            <Text style={{marginTop: 15, width: '80%', textAlign: 'justify', marginBottom: 10}}>
                Algunas de las funciones más comunes son la MD5 y SHA-1. Hoy en día, MD5 se utiliza para la autenticación de archivos, pero antes se usaba para la seguridad y el cifrado de datos. Dado que un hacker puede crear un archivo que tenga exactamente el mismo hash que otro totalmente diferente, el MD5 no es seguro en caso de que alguien manipule un archivo.  SHA-1 forma parte de la familia de Secure Hash Algorithm y realiza un número mayor de pasos que MD5. El SHA-1 produce una cadena más larga de caracteres hexadecimales, 160 bits, a diferencia de MD5, que devuelve solo 128 bits. Por esa razón, SHA-1, en términos de procesamiento, es más lento que MD5.  
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 15, textDecorationLine: 'underline'}}>Firebase Authentication</Text>
            <Text style={{marginTop: 15, width: '80%', textAlign: 'justify', marginBottom: 10}}>
                Firebase Authentication uses an internally modified version of scrypt to hash account passwords. Even when an account is uploaded with a password using a different algorithm, Firebase Auth will rehash the password the first time that account successfully logs in. Accounts downloaded from Firebase Authentication will only ever contain a password hash if one for this version of scrypt is available, or contain an empty password hash otherwise.
            </Text>
            <Image style={{resizeMode: 'contain', width: 400, height: 200, borderRadius: 3}} source={require('../pic1.jpg')}/>
            <Image style={{ resizeMode: 'contain', width: 350, height: 150, borderRadius: 3}} source={require('../pic2.png')}/>
            <Image style={{ resizeMode: 'contain', width: 500, height: 230, borderRadius: 3}} source={require('../pic3.jpg')}/>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 15, textDecorationLine: 'underline'}}>Key derivation function</Text>
            <Text style={{marginTop: 15, width: '80%', textAlign: 'justify', marginBottom: 30}}>
                Key derivation function is a cryptographic algorithm that derives one or more secret keys from a secret value such as a master key, a password, or a passphrase using a pseudorandom function. KDFs can be used to stretch keys into longer keys or to obtain keys of a required format, such as converting a group element that is the result of a Diffie–Hellman key exchange into a symmetric key for use with AES. Keyed cryptographic hash functions are popular examples of pseudorandom functions used for key derivation.
            </Text>
        </ScrollView>
    )
}

export default Info;