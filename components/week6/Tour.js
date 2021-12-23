import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, ScrollView,Image } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props) {
  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Tour</Text>
      <Text style={{ color: "#778899", marginVertical: 10 }}>
        Let find out what most interesting things
      </Text>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: "row" }}>
          {/* <TourItem />
                <TourItem />
                <TourItem />
                <TourItem />
                <TourItem /> */}
          <View style={{ marginRight: 10 }}>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
              }}
              style={{ width: 200, height: 150, borderRadius: 10 }}
            />
            <View
              style={{
                width: 200,
                marginTop: -30,
                height: 30,
                paddingHorizontal: 10,
                backgroundColor: "black",
                opacity: 0.7,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <Text style={{ fontSize: 15, color: "white",paddingVertical:5 }}>
                Tour in Somewhere
              </Text>
            </View>
          </View>
          <View style={{ marginRight: 10 }}>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
              }}
              style={{ width: 200, height: 150, borderRadius: 10 }}
            />
            <View
              style={{
                width: 200,
                marginTop: -30,
                height: 30,
                paddingHorizontal: 10,
                backgroundColor: "black",
                opacity: 0.7,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <Text style={{ fontSize: 15, color: "white",paddingVertical:5 }}>
                Tour in Somewhere
              </Text>
            </View>
          </View>
          <View style={{ marginRight: 10 }}>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
              }}
              style={{ width: 200, height: 150, borderRadius: 10 }}
            />
            <View
              style={{
                width: 200,
                marginTop: -30,
                height: 30,
                paddingHorizontal: 10,
                backgroundColor: "black",
                opacity: 0.7,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
            >
              <Text style={{fontSize:15,color:"white",paddingVertical:5}}>
                Tour in Somewhere
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
