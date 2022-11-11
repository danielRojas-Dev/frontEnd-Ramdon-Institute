import { url } from "../../helpers/url";
import {
  REQUEST_LOGIN,
  SUCCESSFUL_LOGIN,
  FAILED_LOGIN,
  LOGOUT,
  CARGAR_DATOS_USUARIO_REQUEST,
  CARGAR_DATOS_USUARIO_EXITOSO,
} from "../types";

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

export const login = (paramUser, paramPass) => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequestLogin());

      const response = await fetch(`${url}/login`, {
        method: "POST",
        body: JSON.stringify({
          user: paramUser,
          password: paramPass,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const result = await response.json();

  

      if (!result.hasOwnProperty("token")) {
        dispatch(fetchFailedAuth(result));
        return;
      }

      dispatch(fetchSuccessfulAuth(result.token, result.data));
    } catch (error) {
      dispatch(fetchFailedAuth(error));
    }
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

export const cargarDatosUsuariofallido = () => {
  return {
    type: CARGAR_DATOS_USUARIO_REQUEST,
  };
};

export const cargarDatosUsuario = (token) => {
  // console.log(token);
  return async (dispatch) => {
    try {
      dispatch(cargarDatosUsuarioRequest());

      const response = await fetch(`${url}/datosUser/`, {
        headers: {
          authorization: token,
        },
      });

      const usuario = await response.json();

      if (!usuario.hasOwnProperty("data")) {
        dispatch(cargarDatosUsuariofallido());
        return;
      }

      dispatch(cargarDatosUsuarioExitoso(usuario));
    } catch (error) {
      console.log(error);
      dispatch(cargarDatosUsuarioFallido());
    }
  };
};

export const cerrarSesion = (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  // dispatch({
  //   type: BORRAR_DATOS_USUARIO,
  // });

  // dispatch(limpiarMensajesAvisos());
  // dispatch(limpiarMensajesCarreras());
  // dispatch(limpiarMensajesMateria());
  // dispatch(limpiarMensajesUsuarios());
  // dispatch(limpiarMensajesDocumentosAlumno());
  // dispatch(limpiarMensajesHorariosAlumno());
  // dispatch(limpiarMensajesInasistencias());
  // dispatch(limpiarMensajesNotasAlumno());
  // dispatch(limpiarMensajesHorariosDocente());
  // dispatch(limpiarMensajesNotasDocente());
};
