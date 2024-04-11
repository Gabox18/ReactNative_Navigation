import { StyleSheet, TextInput, View } from 'react-native'
import { Colors } from '../constants/colors'

const Myinput = ({ label, value, onChangeText, secureTextEntry }) => {
	return (
		<View style={styles.container}>
			<TextInput
				placeholder={label}
				style={styles.input}
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
			></TextInput>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		width: '90%',
		height: 45,
		justifyContent: 'center',
		margin: 10,
		padding: 10,
		backgroundColor: Colors.ligth,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: Colors.primary,
	},
})
export default Myinput
