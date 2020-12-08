import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('screen')

import splashImg from '../assets/images/snusbrog.png'

const splash = () => {
  return(
    <View>
      <Image style={{marginTop: height/5 ,width: width/1.1, height: height/2, alignSelf: 'center'}} resizeMode='contain' source={splashImg} />
    </View>
  )
}

export default splash