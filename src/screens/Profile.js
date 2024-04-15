import { View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import { useDispatch } from 'react-redux'
import { signout } from '../features/auth/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Profile() {
	const dispatch = useDispatch()
	return (
		<View style={globalStyles.screenContainer}>
			<Text style={globalStyles.title}>Profile</Text>
			<Button
				title='Sign out'
				onPress={async () => {
					await AsyncStorage.removeItem('@token')
					dispatch(signout())
				}}
			/>
		</View>
	)
}
 