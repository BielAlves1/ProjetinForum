import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';

const dog = require('../../../assets/imglogin.png');

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        Logar()
      });

      function Logar() {
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
                   console.log("Email ou Senha Incorretas")
                }
            })
    };

    return(
        <View style={style.container}>
            <Image style={style.imgLogin} source={{uri:dog}} />
    
            <TextInput style={style.inputzin} placeholder='Digite o seu Email' placeholderTextColor={"#00000077"} onChangeText={(value) => {setEmail(value)}} />
            <TextInput style={style.inputzin} placeholder='Digite a sua Senha' placeholderTextColor={"#00000077"} secureTextEntry={true} onChangeText={(value) => {setPassword(value)}} />

            <TouchableOpacity style={style.btLogin} onPress={()=>{Logar()}}>
                <Text style={style.text}>Login</Text>
            </TouchableOpacity>

        </View>
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
        marginTop: '15%',
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