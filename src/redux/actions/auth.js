import { url } from "../../helpers/url";
import {
  LOGOUT
} from "../types/index";
import {fetchRequestLogin, fetchFailedAuth, fetchSuccessfulAuth, cargarDatosUsuarioRequest, cargarDatosUsuarioExitoso, cargarDatosUsuarioFallido} from "../services/administrador/auth/auth"
import { eliminarStateMateria } from "../services/administrador/materias";



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

  dispatch(eliminarStateMateria());

};
