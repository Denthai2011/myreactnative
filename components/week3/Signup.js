import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Signup() {
    return (

            <View style={{ flex: 1, flexDirection: 'column',justifyContent : 'center' ,alignContent:'stretch' }}>
                <TextInput placeholder="Input ID" />
                <TextInput placeholder="Input Email" />
                <TextInput placeholder="input Address" />
                <Button title="Sign up" />
            </View>

    );
}
