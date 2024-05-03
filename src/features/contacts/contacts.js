import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		getContact: (state, action) => {
			//console.log(action.payload, ' dentro del getContact')
			state = action.payload
			console.log(state, 'despues de dispatch')
		},
		addContact: (state, action) => {
			state = state.push(action.payload)
		},
		deleteContact: (state, action) => {
			state = state.filter(contact => contact.id !== action.payload.id)
		},
	},
})

export const asyncGetContacts = () => {
	return async function (dispatch) {
		const contacts = await AsyncStorage.getItem('@contacts')
		if (contacts === null) {
			await AsyncStorage.setItem('@contacts', JSON.stringify(initialState))
			//console.log(contacts, 'id null')
			return dispatch(getContact(initialState))
		} else {
			const jsoncontact = JSON.parse(contacts)
			//console.log(jsoncontact, 'json---------- nulll')
			return dispatch(getContact(jsoncontact))
		}
	}
}

export const asyncAddContact = contact => {
	return async function (dispatch) {
		const statelocal = await AsyncStorage.getItem('@contacts')
		const newState = [...JSON.parse(statelocal), contact]
		await AsyncStorage.setItem('@contacts', JSON.stringify(newState))
		return dispatch(addContact(contact))
	}
}

export const { addContact, deleteContact, getContact } = contactsSlice.actions
export default contactsSlice.reducer
