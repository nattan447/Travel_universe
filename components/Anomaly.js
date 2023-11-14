import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Anomaly() {
  const data = [
    {
      image: require('../assets/black.jpg'),
      name: 'Black Hole',
      description:
        ' Black holes are mysterious regions in space where gravity is so intense that nothing, not even light, can escape their gravitational pull. These cosmic anomalies form when massive stars collapse under their gravity. Black holes come in various sizes, from stellar-mass black holes to supermassive ones found at the centers of galaxies. Their existence challenges our understanding of space and time, and they play a crucial role in shaping the cosmos.',
      id: 1,
    },
    {
      image: require('../assets/dark.jpg'),
      name: 'Dark Matter',
      description:
        'Dark matter is an enigmatic substance that makes up about 27% of the universes mass and energy. Unlike ordinary matter, dark matter does not emit, absorb, or reflect light, making it invisible and detectable only through its gravitational effects on visible matter. Despite its prevalence, the true nature of dark matter remains one of the most significant unsolved mysteries in astrophysics.',
      id: 2,
    },
    {
      image: require('../assets/energy.jpg'),
      name: 'Dark Energy',
      description:
        '  Dark energy is another cosmic anomaly, accounting for about 68% of the universes total energy content. Its a mysterious force responsible for the accelerated expansion of the universe. Unlike gravity, which attracts matter, dark energy seems to push the universe apart. The nature of dark energy is largely unknown, and its discovery has reshaped our understanding of the cosmos.',
      id: 3,
    },
  ];
  const render = ({ item }) => {
    return (
      <View style={styles.weaponview}>
        <Text style={{ color: 'black', marginBottom: 20 }}>{item.name}</Text>
        <Image
          style={{ height: 100, width: 100, borderRadius: 20 }}
          source={item.image}
        />
        <Text style={{ width: '70%', fontSize: 17 }}>{item.description}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Anomalies</Text>
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
    color: 'black',
  },
  weaponview: {
    backgroundColor: 'white',
    marginTop: 30,
    height: 500,
    margin: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
