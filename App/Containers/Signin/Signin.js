import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ImageBackground, Image, ActivityIndicator } from 'react-native'
import styles from './SigninStyle'
import { TextInput, Button } from 'react-native-paper'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import SingInActions from 'App/Stores/SignIn/Actions'
import NavigationService from "../../Services/NavigationService";

type Props = {}
class Signin extends Component<Props> {
	state = {
		phoneNumber: '20906926',
		password: 'jihed',
	}
	static navigationOptions = {
		header: null
	};
	_login() {
		this.props.login(this.state)
	}
	_redirectRegister(){
		NavigationService.navigate('Signup');

	}
	render() {
		const { password, phoneNumber } = this.state
		const B = (props) => (
			<Text style={{ fontWeight: 'bold', fontSize: 12 }}>{props.children}</Text>
		)

		if (this.props.loginLoading) {
				return (
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator />
				</View>
			)
		}

		return (

			<ImageBackground
				source={require('../../Assets/Images/bg.jpg')}
				style={styles.image}
			>

				<Image source={require('../../Assets/Images/splash.png')} style={styles.logo} />

				<View style={{ padding: 30 }}>
					<TextInput
						label="Email"
						mode="outlined"
						value={phoneNumber}
						style={{backgroundColor:'rgba(255,182,193,0.5)'
						}}
						onChangeText={(usr) => this.setState({ phoneNumber: usr })}

						//onChangeText={text => setText(text)}
					/>
					<TextInput
						label="Password"
						mode="outlined"
						secureTextEntry={true}
						style={{backgroundColor:'rgba(255,182,193,0.5)'
						}}
						value={password}
						onChangeText={(pass) => this.setState({ password: pass })}
					/>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							this._login()
						}}
					>
						<Text>Signin</Text>

					</TouchableOpacity>
					<View style={styles.view}>
					<TouchableOpacity
						onPress={() => {
							this._redirectRegister()
						}}
					>

						<Text style={styles.text} >Signup</Text>

					</TouchableOpacity>

					<Text style={styles.text} >Mot de passe oublié ? </Text>

						{this.props.loginErrorMessage ? (
						<Text > Bad credentials ! try again </Text>
					) : null}
					</View>

				</View>
			</ImageBackground>
		)
	}
}
Signin.propTypes = {
	tokens: PropTypes.object,
	loginLoading: PropTypes.bool,
	loginErrorMessage: PropTypes.string,
	login: PropTypes.func,
}

const mapStateToProps = (state) => ({
	tokens: state.signIn.tokens,
	loginLoading: state.signIn.loginLoading,
	loginErrorMessage: state.signIn.loginErrorMessage,
});



const mapDispatchToProps = (dispatch) => ({
	login: (credentials) => dispatch(SingInActions.loginUser(credentials)),
	clearErrorMessage: () => dispatch(SingInActions.clearErrorMessage()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Signin)
