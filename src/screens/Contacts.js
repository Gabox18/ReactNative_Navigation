import { View, Text } from 'react-native'
import { globalStyles } from '../styles/global'
import AddContact from '../components/AddContact'

export default function Contacts() {
	return (
		<View style={globalStyles.simpleContainer}>
			<AddContact />
		</View>
	)
}
