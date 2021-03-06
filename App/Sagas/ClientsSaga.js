import { put, call } from 'redux-saga/effects'
import  ClientsTypes from 'App/Stores/Clients/Actions'
import { ClientsService } from 'App/Services/ClientsService'



export function* fetchClientsInformation() {

    yield put(ClientsTypes.clientsFetchLoading());

    const response = yield call(ClientsService.fetchClients);
    if (response) {
        yield put(ClientsTypes.clientsFetchSuccess(response))
    } else {
        yield put(ClientsTypes.clientsFetchFailure(response.message)
        )
    }

}
