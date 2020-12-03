import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import { Images, Colors } from 'App/Theme'
import { TextInput } from 'react-native-paper'
import styles from './PersonalStyle'

import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import SignUpActions from 'App/Stores/SignUp/Actions'
class PersonalInformation extends Component {
	state = {
		firstName: '',
		lastName: '',
		address: '',
		postalCode: '',
	}
	_onPress = () => {
		// console.log(this.state)
		this.props.personalI(this.state)
		this.props._nextStep(1)
	}
	static navigationOptions = {
		header: null
	};
	componentDidMount() {}

	render() {
		const B = (props) => (
			<Text style={{ fontWeight: 'bold', fontSize: 12 }}>{props.children}</Text>
		)
		const { firstName, lastName, address, postalCode } = this.state

		return (
			<View style={styles.container}>
				<Image style={styles.logo} source={require('App/Assets/Images/logo.png')} resizeMode="contain" />
				<Text style={{ alignSelf: 'center',fontSize:25,textColor:"white" }}>User Information</Text>
				<TextInput
					label="Firstname"
					mode="outlined"
					style={styles.textInput}
					value={firstName}
					onChangeText={(firstName) => this.setState({ firstName: firstName })}
				/>

				<TextInput
					label="Lastname"
					mode="outlined"
					style={styles.textInput}
					value={lastName}
					onChangeText={(lastName) => this.setState({ lastName: lastName })}
				/>
				<TextInput
					label="Address"
					mode="outlined"
					style={styles.textInput}
					value={address}
					onChangeText={(address) => this.setState({ address: address })}
				/>

				<TextInput
					label="Postal Code"
					mode="outlined"
					style={styles.textInput}
					value={postalCode}
					keyboardType={'phone-pad'}

					onChangeText={(postalCode) => this.setState({ postalCode: postalCode })}
				/>

				<TouchableOpacity style={styles.button} onPress={this._onPress}>
					<Text style={{ color: 'white', fontSize: 16, alignSelf: 'center' }}>SUIVANT</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
const mapStateToProps = (state) => ({
	SignUp: state.SignUp,
})

const mapDispatchToProps = (dispatch) => ({
	personalI: (personalI) => dispatch(SignUpActions.PersonalInformation(personalI)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformation)
