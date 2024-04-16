import { View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import Card from '../components/Card'

export default function Home() {
	const navigation = useNavigation()

	return (
		<View style={globalStyles.screenContainer}>
			<Card />
		</View>
	)
}
