import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/posts/readAll")
        .then(resp => {return resp.json()})
        .then(post => {
          setPosts(post);
        })
      });
    
    return (
        <View style={style.container}> 
        {
          (posts !== undefined && posts !== null)
          ?
          posts.map((info, index) => {
            return (
                <View style={style.post} key={index}>
                    <Text style={style.text}>PET: {info.pet}</Text>
                    <Text style={style.text}>Veterinário: {info.vet}</Text>
                    <Text style={style.text}>Vacina: {info.vacina}</Text>
                    <Text style={style.text}>Data: {info.data}</Text>
                </View>
                )
            })
          :
          <View>
            <Image source={{uri:"https://acegif.com/wp-content/uploads/loading-48.gif"}} />
          </View>
        }
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