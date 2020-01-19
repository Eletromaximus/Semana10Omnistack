import React, {useState, useEffect} from 'react';
import {StyleSheet, Image} from 'react-native'; 
import MapView, {Marker} from 'react-native-maps';
import {requestPermissionAsync, getCurrentPositionAsync} from 'expo-location';

function Main(){
    const [currentRegion, setCurrentRegion] = useState(null);
    useEffect(()=>{
        async function loadInitialPosition(){
            const {granted} = await requestPermissionAsync();

            if(granted){
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                const {latitude, longitude} = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta:0.04 ,
                    longitudeDelta: 0.04,
                })
            }
        }
        loadInitialPosition();
    },[]);

    if(!currentRegion){
        return null;
    }
    return (
    <MapView initialRegion={currentRegion} style={sytles.map}>
      <Marker coordinate={{latitude: -27.2111164, longitude: -49.6374491}}>   
      <Image style={sytles.avatar} source={{uri:'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiRruaqzY7nAhV-HbkGHVtEAoYQjRx6BAgBEAQ&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FEug%25C3%25A8ne_Delacroix&psig=AOvVaw2L8l8JcX8u4tVseI1vJdQ2&ust=1579486889901365' }}  />
      </Marker>
    </MapView>
    );
}
const sytles = StyleSheet.create({
    map: {
        flex:1
    },
    avatar: {
        width:54,
        height: 54,
        borderRadius:4,
        borderWidth: 4,
        borderColor: '#FFF'
    },
})
export default Main;