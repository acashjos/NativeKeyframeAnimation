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
	Easing,
	StyleSheetRegistry
} from 'react-native';

import KeyFrames from './KeyFrameGenerator';
export { KeyFrames };


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
		console.log('...', this.props.children);
		
		let theStyle = this.props.style;
		if (!isNaN(theStyle)) { 
			theStyle = StyleSheetRegistry.getStyleByID(theStyle);
		}
		let animation = {};
		let keyNames = Object.keys(theStyle);
		keyNames.forEach(key => {
			if(/animation[A-Z][a-z]+/.test(key)){
				animation[key]=theStyle[key];
				delete theStyle[key];
			}
		})

		let child = React.cloneElement(
			React.Children.only(this.props.children),
			{
				style: theStyle
			})
		return (
			<Animated.View style={[this.props.style, { transform: [{ rotate: spin }] }]}>
				{child}
			</Animated.View>
		)
	}
}
