import React, { useState, useEffect } from 'react';
import { View, Alert, FlatList, TouchableOpacity, Text } from 'react-native';
import { styles } from '../utils/style.js';
import { getQuestions } from '../services/questions.js'

const Quiz = ({navigation}) => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const readQuestions = async() => {
            /*const questionsHTTP = await fetch(getQuestions()).catch(error => {console.log('found error', error)});
            const questionsJson = await questionsHTTP.json();
            setQuestions(questionsJson) */
            const questionsHTTP = await fetch("http://coronasavior.herokuapp.com/questions/");
            const questionsJson = await questionsHTTP.json();
            setQuestions(questionsJson);
        }
        readQuestions();
    }, [])

    function goToNextScreen() {
        Alert.alert("foi");
    }

    return (
        <View>
            <FlatList
            data = {questions}
            keyExtractor = {(questions) => questions.title}
            renderItem={({questions}) => {
                return(
                    <TouchableOpacity onPress={() => goToNextScreen()}>
                         <Text style={styles.questionTitle}>{questions.key}</Text>
                    </TouchableOpacity>
                  )
            } 
        }
        />
        {/*<FlatList
          data={[
            {key: 'Pergunta 1'},
            {key: 'Pergunta 2'},
            {key: 'Pergunta 3'},
            {key: 'Pergunta 4'},
            {key: 'Pergunta 5'},
            {key: 'Pergunta 6'},
          ]}
          renderItem={({item}) => {
              return(
                <TouchableOpacity onPress={() => goToNextScreen()}>
                     <Text style={styles.questionTitle}>{item.key}</Text>
                </TouchableOpacity>
              )
            }
          }
        />*/}
      </View>
    )
}

export default Quiz;