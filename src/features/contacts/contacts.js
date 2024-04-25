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
		setContact: (state, action) => {
			state = action.payload
		},
		addContact: (state, action) => {
			state.push(action.payload)
		},
		deleteContact: (state, action) => {
			state = state.filter(contact => contact.id !== action.payload.id)
		},
	},
})

export const { addContact, deleteContact, setContact } = contactsSlice.actions
export default contactsSlice.reducer
