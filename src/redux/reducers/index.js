import { combineReducers } from "redux";
import authenticationReducer from "./auth";
import materiasReducer from "./materias/index"





export const rootReducer = combineReducers({

    auth: authenticationReducer,
    // materias:materiasReducer



})