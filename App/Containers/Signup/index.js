import React, { Component } from 'react'
import { ImageBackground, View } from 'react-native'
import ViewPager from '@react-native-community/viewpager'

import StepIndicator from 'react-native-step-indicator'
import Icon from 'react-native-vector-icons/Entypo'
import { Colors } from 'App/Theme'
import Credentials from './Credentials/Credentials'
import PersonalInformation from './PersonalInformation/PersonalInformation'

import styles from './indexStyle'
import indicatorStyles from './IndicatorStyle'

const stepCount = 3
const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
	const iconConfig = {
		name: 'feed',
		color: stepStatus === 'finished' ? '#ffffff' : 'rgba(255,182,193,0.5)',
		size: stepStatus === 'finished' ? 20 : 24,
	}
	switch (position) {
		case 0: {
			iconConfig.name = 'user'
			break
		}
		case 1: {
			iconConfig.name = 'clipboard'
			break
		}
		default: {
			break
		}
	}
	return iconConfig
}

export default class Signup extends Component {
	constructor() {
		super()
		this.state = {
			currentPage: 0,
		}
	}
	state = {
		title: 'Hello',
	}
	static navigationOptions = {
		header: null
	};
	componentDidMount() {
		this.viewPager.setScrollEnabled(true)
	}

	_nextStep = (position) => {
		this.setState({ currentPage: position })
		this.viewPager.setPage(position)
	}

	render() {
		return (
			<ImageBackground
				source={require('../../../App/Assets/Images/bg.jpg')}
				style={styles.image}
			>
				<View style={styles.container}>
					<ViewPager
						style={{ flexGrow: 1 }}
						ref={(viewPager) => {
							this.viewPager = viewPager
						}}
					>
						<View key="1">
							<PersonalInformation _nextStep={this._nextStep} />
						</View>

						<View key="2">
							<Credentials _nextStep={this._nextStep} />
						</View>
					</ViewPager>
					<View style={styles.stepIndicator}>
						<StepIndicator
							stepCount={2}
							renderStepIndicator={this.renderStepIndicator}
							customStyles={indicatorStyles}
							currentPosition={this.state.currentPage}
							labels={['PersonalInformation', 'Credentials']}
						/>
					</View>
				</View>
			</ImageBackground>
		)
	}

	renderStepIndicator = (params) => <Icon {...getStepIndicatorIconConfig(params)} />
}
