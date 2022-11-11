import { REQUEST_LOGIN,SUCCESSFUL_LOGIN, FAILED_LOGIN, LOGOUT, CARGAR_DATOS_USUARIO_REQUEST, CARGAR_DATOS_USUARIO_EXITOSO, CARGAR_DATOS_USUARIO_FALLIDO, } from "../types";




const initialState = {
    token: localStorage.getItem('token'),
    loading: false,
    user: {},
    error: [],
}

export default function (state = initialState,action){

    const {type, payload} = action;

    switch(type){
        case REQUEST_LOGIN:
            return{
                ...state,
                loading:true
            }
        case SUCCESSFUL_LOGIN:
            localStorage.setItem('token', payload.token)

            return{
                ...state,
                token:payload.token,
                loading:false,
                user: payload.user,
                error:[]
            }
        case FAILED_LOGIN:
            localStorage.removeItem('token')

            return{
                ...state,
                loading:false,
                token:null,
                user: {},
                error:payload
            }
        case CARGAR_DATOS_USUARIO_REQUEST:

            return {
                ...state,
                user:{}
            }
        case CARGAR_DATOS_USUARIO_EXITOSO:

            return {
                ...state,
                user:payload.data
            }
        case CARGAR_DATOS_USUARIO_FALLIDO:

            return {
                ...state,
                user:{}
            }
        case LOGOUT:
            localStorage.removeItem('token')
            
            return{
                ...state,
                loading:false,
                token:null,
                user:{},
                error:[]
            }

        default:
            return {
                ...state
            }
    }


}