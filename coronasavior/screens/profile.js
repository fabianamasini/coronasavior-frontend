import React, { useState } from 'react';
import { Alert, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { createProfile } from '../services/profile';

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
        <View style={styles.container}>
            <TextInput label="Address"
            placeholder="Address"
            onChangeText={(address) => setAddress(address)}
            />

            <TouchableOpacity style={styles.button} onPress={() => PerformRequest()}>
                <Text style={styles.linkText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile;