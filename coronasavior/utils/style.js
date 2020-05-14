import { StyleSheet } from 'react-native';
import { mediumGreen, darkGreen, lightGreen } from './constants.js'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  button:{
    backgroundColor: mediumGreen,
    width:150,
    height:35,
    borderRadius:15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  whiteText: {
      color: 'white'
  },
  linkText: {
      color: darkGreen,
  }
})