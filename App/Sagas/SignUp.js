import { put, call } from 'redux-saga/effects'
import  SignUpTypes from 'App/Stores/SignUp/Actions'
import { RegisterService } from 'App/Services/RegisterService'
import NavigationService from "../Services/NavigationService";
export function* register(action) {

    const response = yield call(RegisterService.register, action.registration);
    console.log(action.registration)
     console.log(response)

          NavigationService.navigate('SigninScreen');

    }


