import React, { useState } from 'react';
import { AsyncStorage, Alert, View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { styles } from '../utils/style.js';

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
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.h1}>Welcome to Coronasavior! :D</Text>
                <Text>We are very happy for having you here.</Text>
                <Text>In our navigation bar below, you will be able to access our Quiz and our Ranking.</Text>
                <Text>The Quiz offers you several questions around the Coronavirus, forms of prevention, dos and don'ts, social distancing and more.</Text>
                <Text>For each right answer, you will earn points. The more points you earn, the more you move up on our global ranking! This way, you can compete with users from any place and get informed around the pandemic subject.</Text>
            </ScrollView>
            
            <View styles={styles.navbar}>

            </View>
        </View>

        /*<TouchableOpacity onPress={() => Logout()} >
            <Text>Logout</Text>
        </TouchableOpacity>*/
    )
}

export default Home;
