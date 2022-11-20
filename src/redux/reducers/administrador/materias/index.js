import {
  GET_MATERIAS_EXITOSO,
  GET_MATERIAS_FALLIDO,
  GET_MATERIAS_REQUEST,
  POST_MATERIA_EXITOSO,
  POST_MATERIA_FALLIDO,
  POST_MATERIA_REQUEST,
  PUT_MATERIA_EXITOSO,
  PUT_MATERIA_FALLIDO,
  PUT_MATERIA_REQUEST,
} from "../../../types/index";

const initialState = {
  materias: [],
  errores: [],
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MATERIAS_REQUEST:
      return {
        ...state,
        loading: true,
        errores: [],
      };
    case GET_MATERIAS_EXITOSO:
      return {
        ...state,
        materias: payload,
        loading: false,
        errores: [],
      };
    case GET_MATERIAS_FALLIDO:
      return {
        ...state,
        loading: false,
        materias: [],
        errores: payload,
      };
    case POST_MATERIA_REQUEST:
      return {
        ...state,
        loading: true,
        errores: [],
      };
    case POST_MATERIA_EXITOSO:
      return {
        ...state,        
        loading: false,
        errores: [],
      };
    case POST_MATERIA_FALLIDO:
      return {
        ...state,
        loading: false,
        errores: payload,
      };
      case PUT_MATERIA_REQUEST:
        return {
          ...state,
          loading: true,
          errores: [],
        };
      case PUT_MATERIA_EXITOSO:
        return {
          ...state,        
          loading: false,
          errores: [],
        };
      case PUT_MATERIA_FALLIDO:
        return {
          ...state,
          loading: false,
          errores: payload,
        };
        default:
          return {...state}
  }
}
