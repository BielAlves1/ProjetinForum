import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';

const logo = require('../../../assets/imglogin.png');

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Logar = async () => {
        let credenciais = {
            "email": email,
            "senha": password,
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        options.body = JSON.stringify(credenciais);
        fetch("http://localhost:5000/usuarios/login", options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 200) {
                    navigation.navigate("Home")
                }
                else {
                    console.log("Credeciais Incorretas")
                }
            })
            .catch((error) => {
                console.log('error', error);
              });
    };

    const MsgAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    return (
        <ScrollView>
            <View style={style.container}>
                <Image style={style.imgLogin} source={{ uri: logo }} />

                <TextInput style={style.inputzin} placeholder='Digite o seu Email' placeholderTextColor={"#004c82"} onChangeText={(value) => { setEmail(value) }} />
                <TextInput style={style.inputzin} placeholder='Digite a sua Senha' placeholderTextColor={"#004c82"} secureTextEntry={true} onChangeText={(value) => { setPassword(value) }} />

                <TouchableOpacity style={style.btLogin} onPress={() => { Logar() }}>
                    <Text style={style.text}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d5d94',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    imgLogin: {
        height: '400px',
        width: '400px',
        borderRadius: '50px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    inputzin: {
        marginTop: '5%',
        height: '50px',
        width: '75%',
        backgroundColor: '#EFEFEF',
        borderRadius: '10px',
        padding: '20px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    btLogin: {
        marginTop: '10%',
        height: '50px',
        width: '75%',
        backgroundColor: '#328ecb',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    text: {
        fontWeight: 'bold',
        fontSize: "25px",
        color: 'white'
    }
});