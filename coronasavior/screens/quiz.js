import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { styles } from '../utils/style.js';
import { getQuestions } from '../services/questions.js'

const Quiz = ({navigation}) => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const readQuestions = async() => {
            const questionsJson = await getQuestions();
            setQuestions(questionsJson.data.results);
        }
        readQuestions();
    }, [])

    function goToNextScreen(item) {
        navigation.navigate('QuizDetails', {question: item})
    }

    return (
        <View>
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