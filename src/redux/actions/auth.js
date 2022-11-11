import { url } from "../../helpers/url";
import {REQUEST_LOGIN, SUCCESSFUL_LOGIN, FAILED_LOGIN, LOGOUT } from "../types";




export const fetchRequestLogin = ()=>{

    return {
        type:REQUEST_LOGIN
    }
}

export const fetchSuccessfulAuth = (token, user) => {

    return {
        type: SUCCESSFUL_LOGIN,
        payload: {
            token,
            user
        }
    }
    
}

export const fetchFailedAuth = (error) => {
    const errors = error.errors
    return {
        type: FAILED_LOGIN,
        payload:errors
    }
}

export const login = (paramUser, paramPass) => {
    return async (dispatch) => {
        try {
        
            dispatch(fetchRequestLogin);

            
            const response = await fetch(`${url}/login`, {
                method: "POST",
                body: JSON.stringify({
                    paramUser,
                    paramPass
                }),
                Headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })

            const result = await response.json()

            if () {
                
            }

        } catch (error) {
            console.log(error);
        }
    }

}