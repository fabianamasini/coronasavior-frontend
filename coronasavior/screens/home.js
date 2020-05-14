import React, { useState } from 'react';
import { AsyncStorage, Alert, View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Home = ({ navigation }) => {

    async function Logout(){
        try{
            await AsyncStorage.setItem("access", "");
            await AsyncStorage.setItem("refresh", "");
            Alert.alert("Logged out");
            navigation.navigate("Login");
        }
        catch (error) {
            console.log(error);
        }
    }
            
    return (
        <View>
            <Text>Welcome</Text>
            <TouchableOpacity onPress={() => Logout()} >
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;