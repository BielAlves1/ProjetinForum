import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Perfil() {
    return(
        <View style={style.container}>
            <Text>TELA PERFIL</Text>
        </View>
    );
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