import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{ id: 0, name: 'Sara Lee' },
	{ id: 1, name: 'John Doe' },
	{ id: 2, name: 'Jack Doe' },
]

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		getContact:  (state,action) => {
			state = action.payload
		},
		addContact:  (state, action) => {
			state.push(action.payload)
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
			await AsyncStorage.setItem('@contact', JSON.stringify(initialState))
			return dispatch(initialState)
		} else {
			return dispatch(JSON.parse(contacts)) 
		}
	}
}

export const asyncAddContact = (contact)=>{
	//-------->aqui voyyyyyyyyy
}

export const { addContact, deleteContact, getContact } = contactsSlice.actions
export default contactsSlice.reducer
