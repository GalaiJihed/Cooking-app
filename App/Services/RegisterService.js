import axios from 'axios' ;
import {Config} from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
    const isNumber = is(Number)
    return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)


const registerApi = axios.create({
    /**
     * Import the config from the App/Config/index.js file
     */

    baseURL:Config.API_URL,
    headers: {
      Accept:'application/json',
        'Content-Type': 'application/json'
    },
    timeout:3000,
})
function register(payload){
    return registerApi.post('/user/clients/new',payload).then((response) => {
        if (in200s(response.status)) {

            return response
        }
        return null
    }).catch(function (error) {
        return error;
    })


}
export const RegisterService = {
    register
}
