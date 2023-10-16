import { combineReducers } from 'redux'
import { filterReducer } from './slice/filterSlice'
import { contactsReducer } from './slice/contactsSlice'



export const reducer = combineReducers({
	contacts: contactsReducer,
	filter: filterReducer,
})