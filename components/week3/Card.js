import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View,Image } from 'react-native';


export default function Card() {
    return (

            <ScrollView>
                <View style={{flex: 1}}>
                    <View style={{ flexDirection : "row", padding : 10}}>
                        <Image style={{width: 50, height: 50, borderRadius: 50}} source={ require('../../assets/week3/profile-2.jpg')} />
                        <View><Text style={{ fontSize: 20}}>Steve GarrettText </Text>
                        <Text style={{color:"red"}}>5 hours ago | 100k views</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Image style={{flex: 1, resizeMode : "cover", aspectRatio: 3 / 2 }} 
                        source={ require('../../assets/week3/trip-2.jpg')} />
                        <Text>Overseas Adventure Travel In Nepal</Text>
                        <Text>
                        Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. 
                        Located in one of the uprising areas of Tokyo
                        </Text>
                    </View>
                    <View></View>
                </View>
            </ScrollView>

    );
}
