import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  
} from "react-native";
import { out } from "react-native/Libraries/Animated/Easing";


export default function Bmi() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");
  const [lh, setLh] = useState("Normal");
  console.log("STATE : ", weight, height, bmi, lh);
  const onPressButton = () => {
    console.log("Calculate button is pressed!!!");
    let output = weight / (((height / 100) * height) / 100);
    setBmi(output.toFixed(2));

    let description = "";
    if (output<18.5)
        description ="Underweight - eat a bagel!";
    else if (output>=18.5 && output<=24.99)
        description ="Normal - keep it up!";
    else if (output>=25 && output<=29.99)
        description ="Overweight - exercise more!";
    else if (output>=30 && output<=39.99)
        description ="Obese - get off the couch!";
    else
        description ="Morbidly Obese - take action!";
    
    setLh(description);
  };


  return (
    <View>
      {/* view ก้อนที่ 1 */}
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 20,
          height: 150,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
        <TextInput
          onChangeText={(newweight) => setWeight(newweight)}
          keyboardType="numeric"
          style={{ fontSize: 20 }}
          placeholder="Input your Weight …"
        />
      </View>
      {/* view ก้อนที่ 2 */}
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 20,
          height: 150,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
        <TextInput
          onChangeText={(newheight) => setHeight(newheight)}
          keyboardType="numeric"
          style={{ fontSize: 20 }}
          placeholder="Input your Height …"
        />
      </View>
      {/* view ก้อนที่ 3 */}
      {/* marginVertical คือ margin ตามเเนวเเกน บนล่าง ซ้ายขวา ไม่สนใจ*/}
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 20,
            height: 150,
            justifyContent: "center",
            marginTop: 20,
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text style={{ fontSize: 30 }}>{bmi}</Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 20,
            height: 150,
            justifyContent: "center",
            marginTop: 20,
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 30 }}>{lh}</Text>
        </View>
      </View>
      {/* view ก้อนที่ 4 */}
      <View>
        {/* <Button onPress={ onPressButton } title="Calculate" /> */}
        <TouchableOpacity onPress={onPressButton}>
          <View
            style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}
          >
            <Text style={{ fontSize: 30, textAlign: "center", color: "white" }}>
              Calculate
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
