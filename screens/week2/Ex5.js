import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function Ex5() {
  const navigation = useNavigation();
  return (
  <View style={{ flex: 1 }}>
    <View style={{ flex : 1 , flexDirection : 'row', 
    alignItems:'center',justifyContent: 'center'}}>    
      <View style={{width: 50, height: 50, backgroundColor: '#50E3C2'}} />
      <View style={{width: 50, height: 50, backgroundColor: '#4A90E2'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#9013FE'}} />
        
    </View><Button title="Next" onPress={() => navigation.navigate("Ex6")} /></View>
  );
}