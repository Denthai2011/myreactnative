import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex6() {
  return (
    <View style={{ flex : 1 , flexDirection : 'column', 
    alignItems:'center',justifyContent: 'center'}}>    
      <View style={{width: 50, height: 50, backgroundColor: '#50E3C2'}} />
      <View style={{width: 50, height: 50, backgroundColor: '#4A90E2'}} />
        <View style={{width: 50, height: 50, backgroundColor: '#9013FE'}} />
    </View>
  );
}