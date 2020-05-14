import React, { useState } from 'react';
import { AsyncStorage, Alert, View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { getAuthorizationToken } from '../services/auth';
import { getProfile } from '../services/profile';
import { styles } from '../utils/style';

const Login = ({ navigation }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function PerformRequest(){
        try{
            const response = await getAuthorizationToken(username, password);

            await AsyncStorage.setItem("access", response.data.access);
            await AsyncStorage.setItem("refresh", response.data.refresh);
            
            console.info("Logged with success!");
        }catch(error){
            if (!(error && error.response)) {
                return;
            }
            else if (error.response.status === 401){
                Alert.alert("Incorrect credentials");
            }
            else if (error.response.status === 400){
                Alert.alert("Please inform your credentials");
            }
            return;
        }
        try{
            const response = await getProfile();
            if(response.data.count == 0){
                navigation.navigate("Profile");
            }
            else{
                navigation.navigate("Home");
            }
        }catch (error) {
            console.log(error.response.request);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} 
            label="Username"
            placeholder="Username"
            onChangeText={(username) => setUsername(username)}
            onChange={() => setError('')}
            />

            <TextInput style={styles.textInput}
            label="Password"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            onChange={() => setError('')}
            />

            <TouchableOpacity style={styles.button}
            onPress={() => PerformRequest()}>
                <Text style={styles.whiteText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.linkText}>Doesn't have an account? Sign up here</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;
