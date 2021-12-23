import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, Image, FlatList, ScrollView } from "react-native";

export default function Event(props) {
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
      try{
          let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json ');
          let data = await promise.json();
          console.log("Load Data : " , data);
        //SET STATE
          setOnlineTours(data);
      }catch(error){
          console.log("ERROR : " , error);
      }
      
    
  }  
  useEffect(() => {
        loadOnlineTours();
    }, []);
//     const tours = [
//     {
//       id: "1",
//       title: "Truckfighters: Performing",
//       uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg",
//       month: "DEC",
//       date: "30",
//       datetime: "Thu, DEC 30, 09.00 am",
//       place: "London",
//     },
//     {
//       id: "2",
//       title: "Paris Motor Show",
//       uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg",
//       month: "DEC",
//       date: "31",
//       datetime: "Thu, DEC 30, 09.00 am",
//       place: "Paris",
//     },
//     {
//       id: "3",
//       title: "Bearded Theory Spring",
//       uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg",
//       month: "JAN",
//       date: "01",
//       datetime: "Thu, JAN 01, 09.00 am",
//       place: "Canada",
//     },
//     {
//       id: "4",
//       title: "BBC Music Introducing",
//       uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg",
//       month: "JAN",
//       date: "11",
//       datetime: "Thu, JAN 11, 09.00 am",
//       place: "USA",
//     },
//     {
//       id: "5",
//       title: "Start-Up Meeting 2022",
//       uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg",
//       month: "JAN",
//       date: "21",
//       datetime: "Thu, JAN 21, 09.00 am",
//       place: "Thailand",
//     },
//   ];

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Up Coming Event</Text>
      <Text style={{ color: "#778899" }}>
        What's the worst The Could Happend
      </Text>
      <FlatList
        horizontal={true}
        data={onlineTours}
        renderItem={({ item, index }) => {
          console.log(item, index, item.uri);
          return (
            <View style={{ marginRight: 10 }}>
              <Image source={{ uri: item.uri }} style={{ width: 300, height: 150, borderRadius: 10 }} />
                <View style={{flexDirection:"row",borderBottomLeftRadius:10,
                borderTopRightRadius:10,backgroundColor:"white",borderWidth:1,borderColor:"#D3D3D3"}}>
                    <View style={{padding:10}}>
                            <Text style={{color:"red",fontSize:15}}>{item.month}</Text>
                            <Text style={{color:"gray",fontSize:9}}>{item.date}</Text>
                    </View>
                    <View style={{padding:10}}>
                        <Text style={{fontSize:15,color:"black"}}>{item.title}</Text>
                        <Text style={{color:"gray",fontSize:9}}>{item.datetime}</Text>
                        <Text style={{color:"gray",fontSize:9}}>{item.place}</Text>
                    </View>
                
                </View>
            </View>
            
          ); 
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
