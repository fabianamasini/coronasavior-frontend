import React, { useState } from 'react';
import { Alert, AsyncStorage,  View, TextInput, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { registerUser } from '../services/users';
import { styles } from '../utils/style.js';
import FloatingLabelInput from '../components/FloatingLabelInput';
//import FloatLabelTextInput from 'react-native-floating-label-text-input'

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
            if (password != confirmPassword){
                Alert.alert("Passwords do not match!");
            }
            await registerUser(username, firstName, lastName, email, password);
            Alert.alert("Successfully created user");
            navigation.navigate("Login");
        } catch(error) {
            if (error.response.status === 400){
                Alert.alert('Fill all fields to complete you registry'); 
            }
            else{
                Alert.alert("Unespected error");
            }
            console.log("erro: ", error);
            console.log("error-detail", error.response);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ScrollView>
                    <FloatingLabelInput
                        label="Username"
                        action={(username) => setUsername(username)}
                        value={username}
                    />

                    <FloatingLabelInput 
                        label="First name"
                        action={(firstName) => setFirstName(firstName)}
                        value={firstName}
                    />
                    
                    <FloatingLabelInput 
                        label="Last Name"
                        action={(lastName) => setLastName(lastName)}
                        value={lastName}
                    />

                    <FloatingLabelInput 
                        label="E-mail"
                        action={(email) => setEmail(email)}
                        value={email}
                    />

                    <FloatingLabelInput 
                        label="Password"
                        action={(password) => setPassword(password)}
                        value={password}
                        security={true}
                    />

                    <FloatingLabelInput 
                        label="Confirm Password"
                        action={(confirmPassword) => setConfirmPassword(confirmPassword, () => {
                            if(confirmPassword != password) {
                                Alert.alert("Password should match.");
                            }
                        })}
                        value={confirmPassword}
                        security={true}
                    />                    
                    
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={() => PerformRequest()}>
                            <Text style={styles.whiteText}>Submit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.textLink} onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.linkText}>Already have an account? Log in here</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SignUp;
