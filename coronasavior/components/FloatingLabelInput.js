import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native'

import { styles } from '../utils/style.js'

const FloatingLabelInput = (props) => {
    const [isFocused, setIsFocused] = useState(false)
  
    const handleFocus = () => {
        setIsFocused(true)
    }
    
    const handleBlur = () => {
      setIsFocused(false)
    }

    const componentStyles = StyleSheet.create({
      labelStyle: {
          position: 'absolute',
          left: 0,
          top:  isFocused || props.value.length > 0 ? 0 : 20,
          fontSize: isFocused || props.value.length > 0  ? 14 : 20,
          color: isFocused || props.value.length > 0  ?  '#000':'#aaa' ,
      }
  })
    
    return (
      <View style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Text style={componentStyles.labelStyle}>{props.label}</Text>
          <TextInput 
              style={{ width: 300, height: 26, fontSize: 20, color: '#000', borderBottomWidth: 1, borderBottomColor: '#555' }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={props.action}
              secureTextEntry={props.security ? props.security : false}
              blurOnSubmit={false}
              accessibilityLabel={props.accessibility}
          />
      </View>
    )
}

export default FloatingLabelInput;