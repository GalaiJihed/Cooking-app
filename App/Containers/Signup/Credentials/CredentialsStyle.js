import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'
export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		justifyContent: 'space-between',
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},

	subContainer: {
		flex: 0.63,
		flexDirection: 'column',

		justifyContent: 'space-between',
	},
	textInput: {
		backgroundColor: 'rgba(255,182,193,0.5)',
	},
	text: {
		fontSize: 12,
		alignSelf: 'center',
		textAlign: 'center',
	},
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		color: Colors.primary,
	},
	logo: {
		flex: 0.05,
		width: 500,
		height: 400.4,
		alignSelf: 'center',
	},
	button: {
		marginTop: 10,
		justifyContent: 'center',
		backgroundColor: "#cccccc",
		padding: 10,
		borderRadius: 4,
		height: 57,
	},
})
