import {
    REQUEST_LOGIN,
    SUCCESSFUL_LOGIN,
    FAILED_LOGIN,
    CARGAR_DATOS_USUARIO_REQUEST,
    CARGAR_DATOS_USUARIO_EXITOSO,
  } from "../../../types/index";

export const fetchRequestLogin = () => {
    return {
      type: REQUEST_LOGIN,
    };
  };
  
  export const fetchSuccessfulAuth = (token, user) => {
    return {
      type: SUCCESSFUL_LOGIN,
      payload: {
        token,
        user,
      },
    };
  };
  
  export const fetchFailedAuth = (error) => {
    return {
      type: FAILED_LOGIN,
      payload: error,
    };
  };

  export const cargarDatosUsuarioRequest = () => {
    return {
      type: CARGAR_DATOS_USUARIO_REQUEST,
    };
  };
  
  export const cargarDatosUsuarioExitoso = (user) => {
    return {
      type: CARGAR_DATOS_USUARIO_EXITOSO,
      payload: user,
    };
  };
  
  export const cargarDatosUsuarioFallido = () => {
    return {
      type: CARGAR_DATOS_USUARIO_REQUEST,
    };
  };