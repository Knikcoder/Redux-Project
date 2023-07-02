import { FAIL_REQUEST, GET_USERLIST, MAKE_REQUEST } from "./ActionType"
import axios from 'axios'
export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

export const getUserList = (data) => {
    return {
        type: GET_USERLIST,
        payload: data
    }
}
export const FetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:8000/user').then(res => {
            const userList = res.data;
            dispatch(getUserList(userList))
        }).catch(err => {
            dispatch(failRequest(err))
        })
    }
}