import React, { useState } from 'react';
import { Alert, View, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { createProfile } from '../services/profile';
import FloatingLabelInput from '../components/FloatingLabelInput';

import { styles } from '../utils/style';

const Profile = ({ navigation }) => {

    const [address, setAddress] = useState("");

    async function PerformRequest(){
        try{
            await createProfile(address);
            navigation.navigate("Home");
        }catch(error){
            if (error.response.status === 400){
                Alert.alert("Please inform your address");
            }
            else{
                Alert.alert("Unespected error");
            }
            return;
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
                <FloatingLabelInput 
                    label="Address"
                    action={(address) => setAddress(address)}
                    value={address}
                />

                <TouchableOpacity style={styles.button} onPress={() => PerformRequest()}>
                    <Text style={styles.whiteText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Profile;
