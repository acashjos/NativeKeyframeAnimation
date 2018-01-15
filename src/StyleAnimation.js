/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Text,
	StyleSheet,
	Animated,
	Easing
} from 'react-native';

import KeyFrames from './KeyFrameGenerator';
export {KeyFrames}; 
export default class StyleAnimated extends Component {
	constructor() {
		super()
		this.spinValue = new Animated.Value(0)
	}
	componentDidMount() {
		this.spin()
	}
	spin() {
		this.spinValue.setValue(0)
		Animated.timing(
			this.spinValue,
			{
				toValue: 1,
				duration: 4000,
				easing: Easing.linear
			}
		).start(() => this.spin())
	}

	render() {
		const spin = this.spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg']
		})
		console.log('...',this.props.children)
		return (
			<Animated.View style={[this.props.style, { transform: [{ rotate: spin }] }]}>
				{this.props.children}
			</Animated.View>
		)
	}
}
