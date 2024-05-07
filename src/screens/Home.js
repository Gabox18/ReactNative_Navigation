import { View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MyButton from '../components/MyButton'
import DateTimePicker from '@react-native-community/datetimepicker'
import * as Notification from 'expo-notifications'

export default function Home() {
	const navigator = useNavigation()
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		checkFistLaunch()
	}, [])

	async function handleNotification() {
		const trigger = new Date(date).getTime() + 24 * 60 * 60 * 1000
		try {
			const id = await Notification.scheduleNotificationAsync({
				content: {
					title: 'Notificacion Proyecto Gabo!',
					body: 'Abre la notificacion XD',
				},
				// trigger,
				trigger: {
					seconds: 5,
					repeats: false,
				},
			})
			console.log(trigger)
			alert(`Notification shcedualed!, ${id}`)
		} catch (err) {
			alert('The notification failed to schedule, make sure the hour is valid')
		}
	}

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
			<DateTimePicker
				value={date}
				style={{ width: '25%' }}
				mode={'time'}
				display={'clock'}
				onChange={(event, selectedDate) => console.log(selectedDate)}
			/>
			<MyButton title={'programar notificacion'} onPress={handleNotification} />
			<Card />
		</View>
	)
}

// token = ExponentPushToken[dmq-AmI1Ai-fKCSwXJE2Tx]
