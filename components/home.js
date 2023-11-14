import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Planets from "./Planets"
import Stars from "./Stars"
import Anomaly from "./Anomaly"
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Home() {
  const Tab=createBottomTabNavigator();
  return (
   <NavigationContainer independent={true}>
      <Tab.Navigator  screenOptions={{ headerShown: false, }}>
        <Tab.Screen name="planets" component={Planets} Options={{ 
          tabBarIcon:({color,size})=><MaterialcommunityIcons name="access-point-network-off" color={color} size={size}/>}}/>
        <Tab.Screen name="stars" component={Stars}></Tab.Screen>
        <Tab.Screen name="anomaly" component={Anomaly}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
