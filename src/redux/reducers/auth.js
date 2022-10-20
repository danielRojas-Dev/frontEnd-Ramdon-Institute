import { SUCCESSFUL_LOGIN, FAILED_LOGIN, LOGOUT,UPLOAD_DATA_USER, UPLOAD_DATA_USER_FAILED } from "../types";




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
                user: payload.user,
                error:payload,
            }
        case FAILED_LOGIN:
            localStorage.removeItem('token')

            return{
                token:null,
                user: {},
                error:payload
            }
        case UPLOAD_DATA_USER:

            return {
                ...state,
                user:payload.data
            }
        case UPLOAD_DATA_USER_FAILED:

            return {
                ...state,
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