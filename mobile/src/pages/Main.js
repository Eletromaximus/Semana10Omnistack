import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'

function Main({navigation}){
    const [currentRegion, setCurrentRegion] = useState(null);
    useEffect(()=>{
        async function loadInitialPosition(){
            const {granted} = await requestPermissionsAsync();

            if(granted){
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy:true,
                });
                const {latitude, longitude} = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }

        }
        loadInitialPosition();
    }, []);
    if(!currentRegion){
        return null;
    }
    return <MapView initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{latitude: -16.762619, longitude:-49.269082}}>
            <Image style={styles.avatar} source={{uri:'https://images.tcdn.com.br/img/img_prod/596049/adesivo_finn_hora_de_aventura_043_2184_1_20171031140437.jpg'}}/>
            <Callout onPress={()=>{
                navigation.navigate('Profile',{github_username: 'Eletromaximus'})
            }}>
                <View style={styles.callout}>
                <Text style={styles.devName}>Max Milliano </Text>
                <Text style={styles.devBio}>Batata Palha com molho especial</Text>
                <Text style={styles.devTechs}>ReactJs, React Native, Node.js</Text>
                </View>
            </Callout>
        </Marker>
    </MapView>
}
const styles = StyleSheet.create({
    map: {
        flex:1
    },
    avatar:{
        width:54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    },
    callout: {
        width: 260,       
    },
    devName:{
        fontWeight:'bold',
        fontSize: 16,
    },
    devBio:{
        color: '#666',
        marginTop: 5,
    },
    devTechs:{
        marginTop: 5,
    }
})
export default Main;