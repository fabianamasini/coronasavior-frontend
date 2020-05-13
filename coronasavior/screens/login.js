import React, { useState } from 'react';
import { AsyncStorage, Alert, View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { getAuthorizationToken } from '../services/auth';
import { getProfile } from '../services/profile';

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
                navigation.navigate("SignUp");
            }
        }catch (error) {
            //console.log(error);
            console.log(error.response.request);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput label="Username"
            placeholder="Username"
            onChangeText={(username) => setUsername(username)}
            onChange={() => setError('')}
            />

            <TextInput label="Password"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            onChange={() => setError('')}
            />

            <TouchableOpacity onPress={() => PerformRequest()}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        padding: 10
    }
})