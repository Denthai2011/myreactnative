import React, { useState } from "react";
import { TouchableOpacity, View,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    const [countting, setCountting] = useState(0);
    const onPressButton1 = () =>{
        console.log("You pressButtom1");
        let output = countting+1;
        setCountting(output);
    }
    return (
        <View>
            <View style={{flexDirection:'row', padding:20,alignContent:"space-around",justifyContent:"center"}}>
                <TouchableOpacity onPress={onPressButton1}>
                    <FontAwesome name="heart" size={10} color='yellow'/>

                </TouchableOpacity>
                <Text style={{marginLeft:20}}>{countting}</Text>

            </View>
            
        </View>
    );
}
