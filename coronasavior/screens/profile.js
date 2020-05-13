import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Profile = ({navigation}) => {

    const [address, setAddress] = useState("");
    const [error, setError] = useState("");

    async function PerformRequest() {
        try {
            console.info("User signed with success");
        } catch(error) {
            Alert.alert("An error occured.")
            console.error("erro: ", error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput label="Address"
            placeholder="Address"
            onChangeText={(address) => setAddress(address)}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Profile;