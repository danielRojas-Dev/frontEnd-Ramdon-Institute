import { url } from "../../helpers/url";
import { SUCCESSFUL_LOGIN, FAILED_LOGIN, LOGOUT, UPLOAD_DATA_USER_FAILED } from "../types";




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

            // if () {
                
            // }

        } catch (error) {
            console.log(error);
        }
    }

}