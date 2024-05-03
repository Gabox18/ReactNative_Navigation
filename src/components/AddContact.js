import { Button, Pressable, StyleSheet, View } from 'react-native'
import { Colors } from '../constants/colors'
import Myinput from './Myinput'
import { useState } from 'react'
import { asyncAddContact } from '../features/contacts/contacts'
import { useDispatch, useSelector } from 'react-redux'

export default function AddContact() {
	const dispatch = useDispatch()
	const contact = useSelector(state => state.contacts)
	const [name, setName] = useState('')

	function handleAdd() {
		dispatch(asyncAddContact({ id: Math.round(Math.random() * 1000), name }))
		setName('')
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
