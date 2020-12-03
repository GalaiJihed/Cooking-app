import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { SignInTypes } from 'App/Stores/SignIn/Actions'
import {ClientsTypes} from 'App/Stores/Clients/Actions'

import {register} from "./SignUp";
import { loginUser } from './SignIn'
import {fetchClientsInformation} from "./ClientsSaga";
import {SignUpTypes} from "../Stores/SignUp/Actions";

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */

      takeLatest(SignInTypes.LOGIN_USER, loginUser),
      takeLatest(ClientsTypes.FETCH_CLIENTS,fetchClientsInformation),
      takeLatest(SignUpTypes.REGISTER,register)
  ])
}
