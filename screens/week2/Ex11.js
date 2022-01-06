import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Ex11() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "column", alignItems: "stretch" }}>
        <View style={{ height: 420, backgroundColor: "#4A90E2" }} />
        <View style={{ height: 420, backgroundColor: "#50E3C2" }} />
        
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex12")} />
    </View>
  );
}
