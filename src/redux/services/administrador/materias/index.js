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



export const fetchMateriaRequest = () => {
    return {
      type: GET_MATERIAS_REQUEST,
    };
  };
  
  export const fetchMateriaExito = (dataMaterias) => {
    return {
      type: GET_MATERIAS_EXITOSO,
      payload: dataMaterias,
    };
  };
  
  export const fetchMateriaFallido = (error) => {
    // console.log(error)
    return {
      type: GET_MATERIAS_FALLIDO,
      payload: error,
    };
  };