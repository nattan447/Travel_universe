import { Text, SafeAreaView, StyleSheet, FlatList,View,Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Dozes() {
  const data = [
    {
      image: require('../assets/jupter.jpg'),
      name: 'Jupter',
      description:
        ' Jupiter, the largest planet, is a gas giant characterized by its dynamic atmosphere and iconic Great Red Spot—a massive storm raging for centuries. Composed mainly of hydrogen and helium, Jupiter s immense mass exerts a powerful gravitational pull on surrounding objects. This giant planet is encircled by a complex system of colorful cloud bands, making it a captivating subject for astronomers and space enthusiasts.',
      id: 1,
    },
    {
      image: require('../assets/mars.jpg'),
      name: 'Mars',
      description:
        'Known as the "Red Planet," Mars boasts a distinctive rusty hue due to iron oxide on its surface. Mars has a thin atmosphere primarily composed of carbon dioxide. Its terrain features vast canyons, including the grand Valles Marineris, and the towering Olympus Mons, the tallest volcano in the solar system. Scientists are intrigued by the possibility that Mars may have once harbored liquid water and, consequently, the potential for past life.',
      id: 2,
    },
    {
      image: require('../assets/mercury.jpg'),
      name:'mercury',
      description:
        '  Mercury, the closest planet to the Sun, is a barren world with a rugged, cratered surface. Its days are scorching, reaching temperatures hot enough to melt lead, while its nights plunge into extreme cold. With little to no atmosphere, Mercurys landscape is dominated by impact craters, offering a glimpse into the solar systems turbulent past.',
      id: 3,
    },
  ];
  const render = ({ item }) => {
    return (
      <View style={styles.weaponview}>
      <Text style={{color:"black",marginBottom:20}}>{item.name}</Text>
      <Image style={{height:100,width:100,borderRadius:20}} source={item.image} />
        <Text style={{width:'70%',fontSize:17}}>{item.description}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Planets</Text>
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
  }
});