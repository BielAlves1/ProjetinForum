import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {

    return (
        <View style={style.container}>
             <Text>TELA HOME</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#0d5d94',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});