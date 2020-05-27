import React from 'react'
import { View, Image } from 'react-native'

import img from '../assets/logo-corona-savior.png'

const logo = () => {
  return (
    <View>
      <Image style={{width: 170, height: 150}} source={img} />
    </View>
  )
}

export default logo