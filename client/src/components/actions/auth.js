import * as api from '../api/index.js';
import {AUTH,LOGIN,LOGOUT} from '../../constants/actionTypes'

export const signUp = (inputs,setFlip,setInputs) => async(dispatch) => {
    try {
        const { data } = await api.signUp(inputs);

        dispatch({ type:AUTH, payload:data })

        setFlip(true)

        setInputs({username:"",email:"",password:""})
    } catch (error) {
        return error.response.data;
    }
}

export const signIn = (inputs,history) => async(dispatch) => {
    try {
        const { data } = await api.signIn(inputs);

        dispatch({ type:LOGIN, data })

        history('/')
    } catch (error) {
        return error.response.data;
    }
}

export const LogOut = (history) => async(dispatch) => {
    try {
        const {data} = await api.LogOut()

        history('/')

        dispatch({ type:LOGOUT })
    } catch (error) {
        console.log(error)
    }
}