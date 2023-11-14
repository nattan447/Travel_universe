import { Text, SafeAreaView, StyleSheet, FlatList,View,Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Stars() {
  const data = [
    {
      image: require('../assets/sun.jpg'),
      name: 'Sun',
      description:
        'The Sun, at the heart of our solar system, is a dazzling ball of hot, ionized gases. Its immense gravity generates nuclear fusion, releasing energy in the form of light and heat. The Suns radiant energy sustains life on Earth and drives the dynamics of our planetary system. Solar flares and sunspots are among the Suns captivating features, showcasing its dynamic and ever-changing nature.',
      id: 1,
    },
    {
      image: require('../assets/sirius.jpg'),
      name: 'Sirius',
      description:
        'Sirius, also known as the Dog Star, is the brightest star in Earths night sky. A part of the constellation Canis Major, Sirius is a binary star system, with Sirius A being the primary star. Its relatively close to Earth, and its brightness and twinkling colors have made it a prominent cultural and navigational reference throughout histo',
      id: 2,
    },
    {
      image: require('../assets/betelgeuse.jpg'),
      name:'Betelgeuse',
      description:
        ' Betelgeuse, located in the constellation Orion, is a red supergiant star nearing the end of its life. Its reddish hue is a sign of its cooler temperature compared to our Sun. Betelgeuse is one of the largest known stars, and its dramatic variability in brightness has fascinated astronomers. Its expected to eventually explode in a spectacular supernova.',
      id: 3,
    },
  ];
  const render = ({ item }) => {
    return (
      <View style={styles.weaponview}>
      <Text style={{color:"black",marginBottom:20,}}>{item.name}</Text>
      <Image style={{height:100,width:100,borderRadius:20}} source={item.image} />
        <Text  style={{width:'70%',fontSize:17}}>{item.description}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Stars</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={render}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"black"
  },
  weaponview:{
  backgroundColor:"white",
  marginTop:30,
  height:500,
  margin:20,borderRadius:10,
  justifyContent:"center",
  alignItems:"center"
  }})