import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './Example/Reducers'
import { reducer as SignInReducer } from './SignIn/Reducers'
import { reducer as SignUpReducer } from './SignUp/Reducers'

import { reducer as ClientsReducer } from './Clients/Reducers'
export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: ExampleReducer,
    signIn:SignInReducer,
    clients : ClientsReducer,
    SignUp :SignUpReducer
  })

  return configureStore(rootReducer, rootSaga)
}
