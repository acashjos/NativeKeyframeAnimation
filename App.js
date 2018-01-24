/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Easing
} from 'react-native';

import StyleAnimated, { KeyFrames } from './src/StyleAnimation';



export default class App extends Component {

  render() {
    console.log('.33..', this.props)

    return (
      <View style={styles.container}>
        <Text>Hello Worldie</Text>

        <StyleAnimated style={styles.img} animations>
          <Image source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }} />

        </StyleAnimated>
      </View>
    )
  }
}

const animations = KeyFrames({
  rotate: {
    from: {
      transform: [{ rotate: '0deg' }]
    },
    to: {
      transform: [{ rotate: '360deg' }]
    }
  }
})

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 227,
    height: 200,
    
    animationName: 'rotate',
    animationDuration: '4s',
    animationDelay: '2s',
    animationIterationCount: 'infinite', // or 3
    animationTimingFunction: 'linear', // 'ease' 'linear' 'ease-in' 'ease-out' 'ease-in-out' 'cubic-bezier(n,n,n,n)'
    animationDirection: 'reverse', // normal, reverse , alternate, alternate-reverse
    animationFillMode: 'none', //backwards, forwards, 

  }
}