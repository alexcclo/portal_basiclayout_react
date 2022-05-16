import {USERS_ERROR} from 'api/constant'
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL

// set axios config
function getConfig(obj) {
    return {
        url: obj.url,
        method: obj.method,
        headers: { 'Content-Type': 'application/json' },
        baseURL: API_BASE_URL,
        responseEncoding: 'utf8',
        params: obj.params,
        data: obj.data
    }
}

// axios global function setting
export const request = (obj) => async dispatch => {
    try{
        const res = await axios(getConfig(obj))
        dispatch( {
            type: obj.type,
            payload: res.data
        })
        return res.data
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}