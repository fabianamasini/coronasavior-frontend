import React, { useState, /*createRef*/ } from 'react';
import { Alert, AsyncStorage,  View, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
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

    // const usernameInput = createRef()
    // const firstNameInput = createRef()

    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    async function PerformRequest() {
        if(error.confirmPassword.length || error.email.length) {
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
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ScrollView>
                    <FloatingLabelInput
                        label="Username"
                        action={(username) => setUsername(username)}
                        value={username}
                        // ref={usernameInput}
                        // onSubmitEditing={() => firstNameInput && firstNameInput.focus()}
                    />
                    <Text style={styles.errorText}>{error.username}</Text>

                    <FloatingLabelInput 
                        label="First name"
                        action={(firstName) => setFirstName(firstName)}
                        value={firstName}
                        // ref={firstNameInput}
                    />
                    <Text style={styles.errorText}>{error.firstName}</Text>
                    
                    <FloatingLabelInput 
                        label="Last Name"
                        action={(lastName) => setLastName(lastName)}
                        value={lastName}
                    />
                    <Text style={styles.errorText}>{error.lastName}</Text>

                    <FloatingLabelInput 
                        label="E-mail"
                        action={(email) => {
                          if(!emailRegex.test(email)) {
                            setError({email: 'Please enter a valid email.'})
                          } else {
                            setError({email: ''})
                            setEmail(email)
                          }
                        }}
                        value={email}
                    />
                    <Text style={styles.errorText}>{error.email}</Text>

                    <FloatingLabelInput 
                        label="Password"
                        action={(password) => setPassword(password)}
                        value={password}
                        security={true}
                    />
                    <Text style={styles.errorText}>{error.password}</Text>

                    <FloatingLabelInput 
                        label="Confirm Password"
                        action={(confirmPassword) => {
                          if(confirmPassword !== password) {
                            setError({confirmPassword: 'Password does not match.'})
                          } else {
                            setError({confirmPassword: ''})
                            setConfirmPassword(confirmPassword)}
                          }}
                        value={confirmPassword}
                        security={true}
                    />     
                    <Text style={styles.errorText}></Text>               
                    
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
