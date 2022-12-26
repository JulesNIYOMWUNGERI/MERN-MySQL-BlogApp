import { AUTH,LOGIN,LOGOUT } from '../constants/actionTypes'

const authReducers = (state={ authData:null },action) =>{
    switch(action.type) {
        case AUTH:
         return {
            ...state,authData:action?.payload
         };
        case LOGIN:
         localStorage.setItem('profile',JSON.stringify({ ...action?.data }));

         return{
            ...state,authData:action?.payload
         };
        case LOGOUT:
            localStorage.clear()
         return state;
        default:
            return state;
    }
}

export default authReducers;