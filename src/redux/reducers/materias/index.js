import { REQUEST_LOGIN,SUCCESSFUL_LOGIN, FAILED_LOGIN, LOGOUT, } from "../../types/index";




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
        // case UPLOAD_DATA_USER:

        //     return {
        //         ...state,
        //         user:payload.data
        //     }
        // case UPLOAD_DATA_USER_FAILED:

        //     return {
        //         ...state,
        //         user:{}
        //     }
        case LOGOUT:
            localStorage.removeItem('token')
            
            return{
                ...state,
                loading:false,
                token:null,
                user:{},
                error:[]
            }
    }


}