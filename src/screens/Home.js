import { View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import Card from '../components/Card'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home() {
	const navigator = useNavigation()
	useEffect(() => {
		checkFistLaunch()
	}, [])

	async function checkFistLaunch() {
		const firstLaunch = await AsyncStorage.getItem('@firstLaunch')
		if (firstLaunch) {
			return
		} else {
			await AsyncStorage.setItem('@firstLaunch', 'true')
			navigator.navigate('Onboarding')
		}
	}

	return (
		<View style={globalStyles.screenContainer}>
			<Card />
		</View>
	)
}
