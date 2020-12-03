import { Colors } from 'App/Theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	stepIndicator: {
		marginVertical: 10,
	},
	page: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	stepLabel: {
		fontSize: 12,
		textAlign: 'center',
		fontWeight: '500',
		color: '#999999',
	},

	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
})

export default styles
