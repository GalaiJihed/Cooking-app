import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    PersonalInformation: ['personalI'],
    register: ['registration'],
    registerSuccess: ['response'],
    registerFailure: ['errorMessage'],

})

export const SignUpTypes = Types
export default Creators
