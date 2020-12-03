import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { SignUpTypes } from './Actions'

export const personalInformation = (state, { personalI }) => {
	console.log(personalI)
	return {
		...state,
		registration: {
			...state.registration,
			firstName: personalI.firstName,
			lastName: personalI.lastName,
			address: personalI.address,
			postalCode: personalI.postalCode,
		},
	}
}

export const registerFailure = (state, { errorMessage }) => {
	console.log('message : ' + errorMessage)
	return {
		...state,
		registerErrorMessage:errorMessage
	}
}


export const registerSuccess = (state, { response }) => ({
	...state,
	registration: {
		...state.registration,
	},
})

export const reducer = createReducer(INITIAL_STATE, {
	[SignUpTypes.PERSONAL_INFORMATION]: personalInformation,
	[SignUpTypes.REGISTER_SUCCESS]: registerSuccess,
	[SignUpTypes.REGISTER_FAILURE]: registerFailure,

})
