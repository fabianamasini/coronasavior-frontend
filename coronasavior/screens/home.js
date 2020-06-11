import React, { useState } from 'react';
import { AsyncStorage,Image, Alert, View, TouchableOpacity, Text, ScrollView } from 'react-native';
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
        <View style={styles.scrollView}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.textContainer}>
                    <Text style={styles.h1}>Welcome to Coronasavior! :D</Text>
                    <Text style={styles.paragraph}>We are very happy for having you here.</Text>
                    <Text style={styles.paragraph}>In our navigation bar below, you will be able to access our Quiz and our Ranking.</Text>
                    <Text style={styles.paragraph}>The Quiz offers you several questions around the Corona virus subject, forms of prevention, dos and don'ts, social distancing and more.</Text>
                    <Text style={styles.paragraph}>For each right answer, you will earn points. The more points you earn, the more you move up on our global ranking! This way, you can compete with users from anywhere and get informed around the pandemic subject.</Text>
                    <Text style={styles.h1}>Prevention tips</Text>
                    <Text style={styles.h2}>1. Wash your hands frequently</Text>
                    <Text style={styles.paragraph}>You should frequently wash your hands for 20 seconds with water and soap. If it's not possible, then sanizite it with alcohol in gel.</Text>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.image}
                            source={require('../assets/wash_hands.png')}
                        />
                    </View>
                    <Text style={styles.h2}>2. Don't touch your eyes, mouth and nose!</Text>
                    <Text style={styles.paragraph}>If your hands are not clean, don't touch your eyes, mouth and nose. The new corona virus enters the body through the upper airways - nose and throat, for example.</Text>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.image}
                            source={require('../assets/saude.png')}
                        />
                    </View>
                    <Text style={styles.h2}>3. Stay home!</Text>
                    <Text style={styles.paragraph}>If you have the opportunity, please stay home. As the virus is highly contagious, decreasing the number of people on the streets and avoiding crowds is crucial to reduce the spread of the disease.</Text>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.image}
                            source={require('../assets/stayhome.png')}
                        />
                    </View>
                    <Text style={styles.h2}>4. Social distancing</Text>
                    <Text style={styles.paragraph}>If you are in a situation that does not allow you to stay home, practice social distancing. You should keep at least 1m of distance of other people around you.</Text>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.image}
                            source={require('../assets/distance.png')}
                        />
                    </View>
                    <Text style={styles.iconCredits}>Icons by Freepik and iconixar on www.flaticon.com</Text>
                </View>
                <TouchableOpacity onPress={() => Logout()} 
                    style={styles.button}>
                    <Text style={styles.whiteText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.navbar}>

                <TouchableOpacity style={styles.navbarIcons}
                onPress={() => navigation.navigate("Ranking")}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/medal.png')}
                    />
                    <Text style={styles.iconDescription}>Ranking</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navbarIcons}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/home_green.png')}
                    />
                    <Text style={styles.iconDescription}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navbarIcons}
                onPress={() => navigation.navigate("Quiz")}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/quiz.png')}
                    />
                    <Text style={styles.iconDescription}>Quiz</Text>
                </TouchableOpacity>
                
            </View>           
        </View>
        

       
    )
}

export default Home;
