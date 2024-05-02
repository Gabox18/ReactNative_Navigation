import { View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import AddContact from '../components/AddContact'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { asyncGetContacts } from '../features/contacts/contacts'

export default function Contacts() {
	const dispatch = useDispatch()
	const contacts = useSelector(state => state.contacts)
	//const auth = useSelector(state => state.auth)
	useEffect(() => {
		dispatch(asyncGetContacts())
		console.log(contacts, 'use effect')
	}, [])

	return (
		<View style={globalStyles.simpleContainer}>
			<AddContact />
			{contacts.map((c, index) => (
				<Text key={index}>{c.name}</Text>
			))}
			<Button  title='pressss' onPress={() => dispatch(asyncGetContacts())} />
		</View>
	)
}
