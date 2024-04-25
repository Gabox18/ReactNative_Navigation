import { View, Text } from 'react-native'
import { globalStyles } from '../styles/global'
import AddContact from '../components/AddContact'
import { useSelector } from 'react-redux'

export default function Contacts() {
	const contact = useSelector(state => state.contacts)

	return (
		<View style={globalStyles.simpleContainer}>
			<AddContact />
			{contact.map((c, index) => (
				<Text key={index}>{c.name}</Text>
			))}
		</View>
	)
}

//19:47
