import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors } from '../constants/colors'

const MyButton = ({ title, onPress }) => {
	return (
		<TouchableOpacity style={style.button} onPress={onPress}>
			<Text style={style.buttonText}>{title}</Text>
		</TouchableOpacity>
	)
}

const style = StyleSheet.create({
	button: {
		width: '90%',
		height: 45,
		backgroundColor: Colors.primary,
		padding: 10,
		margin: 10,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: Colors.ligth,
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default MyButton
