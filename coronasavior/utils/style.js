import { StyleSheet, Dimensions } from 'react-native';
import { mediumGreen, darkGreen, lightGreen } from './constants.js'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
  },
  h1: {
    color: mediumGreen,
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5
  },
  navbar:{
    flex: 0.10,
    backgroundColor: lightGreen,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  scrollView:{
    flex:1
  },
  icon:{
    width: 35,
    height: 35
  },
  textContainer: {
    paddingTop: windowHeight/20,
    paddingLeft: windowWidth/10,
    paddingRight: windowWidth/10,
    paddingBottom: windowHeight/20
  },
  paragraph: {
    fontSize: 17,
    textAlign: 'justify'
  },
  h2: {
    fontSize: 20,
    color: lightGreen,
    fontWeight: 'bold',
    marginTop: 5
  },
  image: {
    width: 100,
    height: 100,    
  },
  imageView: {
    alignItems: 'center',
    margin: 10
  },
  iconCredits:{
    fontSize: 10
  },
  navbarIcons: {
    alignItems: 'center'
  },
  iconDescription: {
    fontSize: 10,
    color: 'white'
  },
  questionTitle: {
    fontSize: 20,
    padding: 30,
    borderBottomWidth: 1
  }
})

