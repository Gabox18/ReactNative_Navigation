import { Button, StyleSheet, View } from 'react-native'
import { Colors } from '../constants/colors'
import Myinput from './Myinput'
import { useState } from 'react'

export default function AddContact() {
	const [name, setName] = useState('')

	function handleAdd() {
		setName('')
		handleAddContact(name)
	}

	return (
		<View style={styles.container}>
			<View style={{ width: '80%' }}>
				<Myinput label={'Add Contact'} value={name} onChangeText={setName} />
			</View>
			<Button title='Add' color={Colors.primary} onPress={handleAdd} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
		paddingVertical: '5%',
		alignItems: 'center',
	},
})
