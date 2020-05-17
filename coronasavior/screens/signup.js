import React, { useState } from 'react';
import { Alert, AsyncStorage,  View, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard, ScrollView, TextInput } from 'react-native';
import { registerUser } from '../services/users';
import { styles } from '../utils/style.js';
import FloatingLabelInput from '../components/FloatingLabelInput';

const SignUp = ({navigation}) => {

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({
      username: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
      email: ''
    });

    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    async function PerformRequest() {
        if(password != confirmPassword){
            Alert.alert("Passwords do no match");
        }
        else if(error.confirmPassword.length || error.email.length) {
            Alert.alert("Please fill the fields correctly");
        } else {
            try {
                await registerUser(username, firstName, lastName, email, password);
                Alert.alert("Successfully created user");
                navigation.navigate("Login");
                setFirstName('')
                setLastName('')
                setEmail('')
                setUsername('')
                setPassword('')
                setConfirmPassword('')
            } catch(error) {
                if (error.response.status === 400 && error.response.data["username"][0] === "A user with that username already exists."){
                    Alert.alert("This username is already taken");
                }
                else if(error.response.status === 400){
                    Alert.alert("Fill all the fields to create a user!")
                }
                else{
                    Alert.alert("Unespected error");
                }
                console.log("erro: ", error);
                console.log("error-detail", error.response);
            }
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
                        ref={(ref) => {this.usernameInput = ref}}
                        onSubmitEditing={() => this.firstNameInput.focus()}
                    />
                    <Text style={styles.errorText}>{error.username}</Text>
                    
                    <FloatingLabelInput 
                        label="First name"
                        action={(firstName) => setFirstName(firstName)}
                        value={firstName}
                        ref={(ref) => {this.firstNameInput = ref}}
                        onSubmitEditing={() => this.lastNameInput.focus()}
                    />
                    <Text style={styles.errorText}>{error.firstName}</Text>
      
                    <FloatingLabelInput 
                        label="Last Name"
                        action={(lastName) => setLastName(lastName)}
                        value={lastName}
                        ref={(ref) => {this.lastNameInput = ref}}
                        onSubmitEditing={() => this.emailInput.focus()}
                    />
                    <Text style={styles.errorText}>{error.lastName}</Text>

                    <FloatingLabelInput 
                        label="E-mail"
                        action={(email) => {
                          if(!emailRegex.test(email)) {
                            setError(Object.assign(error, {email: 'Please enter a valid email.'}))
                          } else {
                            setError(Object.assign(error, {email: ''}))
                          }
                          setEmail(email)
                        }}
                        value={email}
                        ref={(ref) => {this.emailInput = ref}}
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />
                    <Text style={styles.errorText}>{error.email}</Text>

                    <FloatingLabelInput 
                        label="Password"
                        action={(password) => setPassword(password)}
                        value={password}
                        security={true}
                        ref={(ref) => {this.passwordInput = ref}}
                        onSubmitEditing={() => this.confirmPasswordInput.focus()}
                    />
                    <Text style={styles.errorText}>{error.password}</Text>

                    <FloatingLabelInput 
                        label="Confirm Password"
                        action={(confirmPassword) => {
                          if(confirmPassword !== password) {
                            setError(Object.assign(error, {confirmPassword: 'Password does not match.'}))
                          } else {
                            setError(Object.assign(error, {confirmPassword: ''}))
                          }
                          setConfirmPassword(confirmPassword)
                        }}
                        value={confirmPassword}
                        security={true}
                        ref={(ref) => {this.confirmPasswordInput = ref}}
                        onSubmitEditing={() => PerformRequest()}
                    />     
                    <Text style={styles.errorText}>{error.confirmPassword}</Text>               
                    
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
