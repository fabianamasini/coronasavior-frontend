import React from 'react'
import { View, Text, TouchableOpacity,  FlatList, StyleSheet, Alert } from 'react-native'
import { styles } from '../utils/style.js'
import { sendAnswer, checkAnswer } from '../services/questions.js'

const QuizDetails = ({route, navigation}) =>{
    const { question } = route.params

    const answerQuestion = async(id) => {
      try {
        const response = await sendAnswer(question.url, id)
        try {
          const correctAnswer = await checkAnswer(response.data.url)

          const answer = correctAnswer.data.correct_answers.filter(value => value.id === id)
          
          if(answer.length > 0) Alert.alert('Resposta correta')
          else Alert.alert('Resposta incorreta')
        } catch(e) {
          console.log('second error: ', e)
        }
      } catch(e) {
        console.log(e)
      }
    }

    return(
        <View style={styles.container}>
            <View style={{padding: 30}}>
              <Text style={styles.h1}>{question.title}</Text>
              <Text style={styles.paragraph}>{question.description}</Text>
            </View>
            <FlatList
              style={{marginTop: 20}}
              data={question.answers}
              keyExtractor={item => JSON.stringify(item.id)}
              renderItem={({ item }) => (
              <TouchableOpacity style={styles.answer} onPress={() => answerQuestion(item.id)}>
                  <Text style={styles.paragraph, styles.whiteText}>{item.description}</Text>
              </TouchableOpacity>
            )}
            />
        </View>
    )
}


export default QuizDetails