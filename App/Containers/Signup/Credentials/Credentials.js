import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { Images, Colors } from 'App/Theme'
import { TextInput } from 'react-native-paper'
import styles from './CredentialsStyle'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import SignUpActions from 'App/Stores/SignUp/Actions'

class Credentials extends Component {
	state = {
		email: '',
		password: '',
		phoneNumber: '',
	}
	static navigationOptions = {
		header: null
	};
	_onPress = () => {
		const registration = {
			...this.props.SignUp.registration,
			email: this.state.email,
			phoneNumber: this.state.phoneNumber,
			password: this.state.password,
		}
		console.log(this.state.phoneNumber)
		this.props.register(registration)
	}

	render() {
		const B = (props) => (
			<Text style={{ fontWeight: 'bold', fontSize: 12 }}>{props.children}</Text>
		)
		const { email, password,phoneNumber } = this.state
		return (
			<View style={styles.container}>
				<Image style={styles.logo} source={require('App/Assets/Images/logo.png')} resizeMode="contain" />
				<Text style={{ alignSelf: 'center' ,fontSize:25}}>Credentials</Text>
				<TextInput
					label="Email"
					mode="outlined"
					style={styles.textInput}
					value={email}
					onChangeText={(email) => this.setState({ email: email })}
				/>
				<TextInput
					label="PhoneNumber"
					mode="outlined"
					style={styles.textInput}
					value={phoneNumber}
					keyboardType={'phone-pad'}
					onChangeText={(phoneNumber) => this.setState({ phoneNumber: phoneNumber })}
				/>
				<TextInput
					label="Password"
					mode="outlined"
					secureTextEntry={true}
					style={styles.textInput}
					value={password}
					onChangeText={(password) => this.setState({ password: password })}
				/>

				<TextInput
					label="Confirm Password"
					mode="outlined"
					secureTextEntry={true}
					style={styles.textInput}
				/>
				<TouchableOpacity style={styles.button} onPress={this._onPress}>
					<Text style={{ color: 'white', fontSize: 16, alignSelf: 'center' }}>Registre</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
Credentials.propTypes = {
	registerErrorMessage: PropTypes.string,
}
const mapStateToProps = (state) => ({
	SignUp: state.SignUp,
})

const mapDispatchToProps = (dispatch) => ({
	register: (registration) => dispatch(SignUpActions.register(registration)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Credentials)
