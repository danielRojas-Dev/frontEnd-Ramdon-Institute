import { combineReducers } from "redux";
import authenticationReducer from "./auth";





export const rootReducer = combineReducers({

    auth: authenticationReducer,



})