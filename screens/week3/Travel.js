import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Signup from '../../components/week3/Signup';
import Card from '../../components/week3/Card';
import Resort from '../weeek4/Resort';
export default function Travel() {
    return (        
        <View style={{ flex: 1, paddingTop: 50}}>
            {/* <Text> Week 3 </Text> */}
            {/* <Signup /> */}
            {/* <Card/> */}
            <Resort/>
        </View>
    );
}
