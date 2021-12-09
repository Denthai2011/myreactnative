import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View,Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Resort() {
    return (
         <ScrollView>
             <View style={{flex:1,flexDirection:"column"}}>
                <View style={{flexDirection:"row"}}>
                    <Image style={{flex:1,padding:10,resizeMode:"cover", aspectRatio:5/2}} 
                    source= {require("../../assets/week3/room-6.jpg")}/>
                </View>
                <View style={{flexDirection:"column",alignItems:"center",backgroundColor:"#fff6dd",padding:20,marginTop:-20,margin:10,borderRadius:10}}>
                    
                    <Text style={{fontSize:20}}>Hilton San Fransico</Text>
                    <View style={{flexDirection:"row"}} >
                        <FontAwesome name="star" size= {20}  color="yellow" />
                        <FontAwesome name="star" size= {20}  color="yellow" />
                        <FontAwesome name="star" size= {20}  color="yellow" />
                        <FontAwesome name="star" size= {20}  color="yellow" />
                        <FontAwesome name="star-half" size= {20}  color="yellow" />
                    </View>
                    <Text style={{fontSize:10}}>Facilities provide may range from a modest quality mattressin 
                    a small room to large suiles</Text>              
                </View>
                <View style={{flex:1,flexDirection:"row"}}>
                    <View style={{width:50,height:50,borderRadius:50,backgroundColor:"orange",justifyContent:"center",alignItems:"center",margin:5}}>
                        <Text>9.5</Text>
                    </View>
                    <View style={{padding:5,margin:5}}>
                        <Text style={{color:'orange'}}>
                            Excellent
                        </Text>
                        <Text style={{fontSize:10}}>
                            See 801 reviews
                        </Text>
                    </View>
                </View>
                <View style={{borderWidth:0.5,margin:15,padding:5}}>
                    <Text>
                        Hotel Description
                    </Text>
                    <Text style={{fontSize:10}}>218Austen Mountain, consectetur adipiscing, sed eiusmod tempor
                    incididunt ut labore et dolore</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",borderWidth:0.5,margin:10,padding:5}}>
                    <View style={{flexDirection:"column"}}>
                    <FontAwesome name="wifi" size={20} color="blue"/>
                    <Text>wifi</Text></View>
                    <View style={{flexDirection:"column"}}>
                    <FontAwesome name='coffee' size={20} color="blue"/>
                    <Text>coffee</Text></View>
                    <View style={{flexDirection:"column"}}>
                    <FontAwesome name='bath' size={20} color="blue"/>
                    <Text>bath</Text></View>
                    <View style={{flexDirection:"column"}}>
                    <FontAwesome name='car' size={20} color="blue"/>
                    <Text>car</Text></View>
                    <View style={{flexDirection:"column"}}>
                    <FontAwesome name='paw' size={20} color="blue"/>
                    <Text>paw</Text></View>
                    
                </View>
                <View style={{margin:10}}>
                    <Text>
                        Location
                    </Text>
                    <Text style={{fontSize:10}}>
                        218 austen mountain.consectetur 
                        aipiscing sed do eiusmod tempor incidiclint ut labore et
                    </Text>
                    <Image style={{height:125}} source={require("../../assets/week3/map.jpg")}/>
                </View>
                <View style={{margin:10}}>
                    <View>
                        <Text>Room Type</Text>
                    </View>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:75,height:100,borderRadius:20}} source={require("../../assets/week3/room-8.jpg")} />
                            <View style={{padding:5}}>
                            <Text>Standard Twin Room</Text>
                            
                                    <Text style={{marginTop:30,color:"orange"}}>$399.99</Text>
                                    <Text style={{fontSize:10,color:'blue'}}>Hurry Up! Thsi your last room</Text>
                            </View>
                        </View>
                </View>
                <View style={{margin:10,flexDirection:"row",justifyContent:"space-between",borderWidth:0.5,padding:5}}>
                    <View>
                        <Text style={{fontSize:8}}>
                            Price
                        </Text>
                        <Text style={{color:'orange'}}>
                            399.99
                        </Text>
                        <Text style={{fontSize:8}}>
                            AVG/NIGHT
                        </Text>
                    </View>
                    <View>
                        <Button title='Book Now'/>
                    </View>
                </View>


             </View>
           
        </ScrollView>

    );
}
