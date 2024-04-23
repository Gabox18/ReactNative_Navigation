import * as React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { Colors } from '../constants/colors'
import Myinput from './Myinput'

export default function AddContact() {
	return (
		<View style={styles.container}>
			<View style={{ width: '80%' }}>
				<Myinput />
			</View>
			<Button title='Add' color={Colors.primary} />
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
