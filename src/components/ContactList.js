import * as React from 'react'
import {
	Button,
	ScrollView,
	View,
	Text,
	StyleSheet,
	Image,
	Pressable,
} from 'react-native'

export default function ContactLists() {
	const { contacts } = React.useContext(contactsStore)

	if (contacts.length === 0)
		return <Text style={globalStyles.title}>You don't have any contacts!</Text>
	return (
		<ScrollView>
			{contacts.map(
				(contact, index) => contact && <Contact key={index} contact={contact} />
			)}
		</ScrollView>
	)
}

function Contact({ contact }) {
	const { handleChangeContact, handleDeleteContact } =
		React.useContext(contactsStore)
	const [isEditing, setIsEditing] = React.useState(false)
	let contactContent
	// we use useMemo to avoid re-rendering the photo component
	const memoPhoto = React.useMemo(() => getRandomPhoto(), [])

	if (isEditing) {
		contactContent = (
			<View>
				<MyInput
					value={contact.name}
					onChangeText={text => handleChangeContact({ ...contact, name: text })}
				/>
			</View>
		)
	} else {
		contactContent = (
			<View style={styles.row}>
				<Text style={styles.name}>{contact.name}</Text>
			</View>
		)
	}
	return (
		<View style={styles.contactContainer}>
			<View style={styles.row}>
				<Image source={memoPhoto} style={styles.image} />
				{contactContent}
			</View>
			<View style={styles.row}>
				{isEditing ? (
					<Button title='Save' onPress={() => setIsEditing(false)} />
				) : (
					<Pressable onPress={() => setIsEditing(true)}>
						<FontAwesome
							name='edit'
							size={24}
							color={Colors.secondary}
							style={{ marginRight: 15, marginTop: 5 }}
						/>
					</Pressable>
				)}
				<Pressable onPress={() => handleDeleteContact(contact.id)}>
					<FontAwesome name='trash' size={24} color={Colors.secondary} />
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	contactContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: Colors.gray,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	name: {
		fontSize: 17,
		fontWeight: 'bold',
		color: Colors.dark,
	},
})
