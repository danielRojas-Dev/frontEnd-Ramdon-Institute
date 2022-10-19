import { SUCCESSFUL_LOGIN, FAILED_LOGIN, LOGOUT } from "../types";




const initialState = {
    token: localStorage.getItem('token'),
    user:{}
}

export default function (state = initialState,action){

    const {type, payload} = action;

    switch(type){
        case SUCCESSFUL_LOGIN:
            localStorage.setItem('token', payload.token)

            return{
                ...state,
                token:payload.token,
                user:payload.user
            }
        case FAILED_LOGIN:
            localStorage.removeItem('token')

            return{
                token:null,
                user:{}
            }
        case LOGOUT:
            localStorage.removeItem('token')
            
            return{
                token:null,
                user:{}
            }
    }


}