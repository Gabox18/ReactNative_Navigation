import { View, Text } from 'react-native'
import { globalStyles } from '../styles/global'
import AddContact from '../components/AddContact'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { asyncGetContacts } from '../features/contacts/contacts'

export default function Contacts() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(asyncGetContacts())
	}, [])
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
