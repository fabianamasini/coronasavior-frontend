import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const SignUp = ({navigation}) => {

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    async function PerformRequest() {
        try {
            console.info("User signed with success");
        } catch(error) {
            if (error.response.status === 401){
                Alert.alert('Login or password is incorrect'); 
            } 
            Alert.alert("An error occured.")
            console.error("erro: ", error);            
        }
    }

    return (
        <View style = {styles.container}>
            <TextInput label="Username"
            placeholder="Username"
            onChangeText={(username) => setUsername(username)}
            onChange={() => setError('')}
            />

            <TextInput label="First name"
            placeholder="First name"
            onChangeText={(firstName) => setFirstName(firstName)}
            onChange={() => setError('')}
            />

            <TextInput label="Last name"
            placeholder="Last name"
            onChangeText={(lastName) => setLastName(lastName)}
            onChange={() => setError('')}
            />

            <TextInput label="E-mail"
            placeholder="E-mail"
            onChangeText={(email) => setEmail(email)}
            onChange={() => setError('')}
            />

            <TextInput label="Password"
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            onChange={() => setError('')}
            /> 

            <TextInput label="Confirm password"
            placeholder="Confirm password"
            onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword, () => {
                if(confirmPassword != password) {
                    Alert.alert("Password should match.")
                }
            })}
            onChange={() => setError('')}
            />

            <TouchableOpacity onPress={PerformRequest()}>
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

/*function handlePassword(password, confirmPassword) {
    if(password != confirmPassword) {

    }
}*/
