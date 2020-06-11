import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { styles } from '../utils/style.js';
import { getQuestions } from '../services/questions.js'
import { getProfile } from '../services/profile'

const Quiz = ({navigation}) => {

    const [questions, setQuestions] = useState([]);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        const readQuestions = async() => {
            const questionsJson = await getQuestions();
            const profileJson = await getProfile();
            setQuestions(questionsJson.data.results);
            setPoints(profileJson.data.results[0].points);
        }
        readQuestions();
    }, [])

    function goToNextScreen(item) {
        navigation.navigate('QuizDetails', {question: item})
    }

    return (
        <View>
            <Text style={styles.h2}>Você possui {points} pontos</Text>
            <Text style={styles.h1}>Perguntas</Text>
            <FlatList
            data = {questions}
            keyExtractor = {(item) => item.title}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity 
                        onPress={() => goToNextScreen(item)} 
                        style={styles.questionTitleContainer}>
                         <Text style={styles.questionTitle}>{item.title}</Text>
                    </TouchableOpacity>
                  )
            } 
        }
        />
      </View>
    )
}

export default Quiz;