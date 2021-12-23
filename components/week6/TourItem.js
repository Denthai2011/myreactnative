import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, View,Image } from "react-native";

export default function TourFlatList(props) {
    return (
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
    );
}


