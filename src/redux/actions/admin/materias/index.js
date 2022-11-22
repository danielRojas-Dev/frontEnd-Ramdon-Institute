import { useSelector } from 'react-redux';
import { url } from '../../../../helpers/url';
import {getMateriaRequest, getMateriaExitoso, getMateriaFallido, postMateriaRequest, postMateriaExitoso, postMateriaFallido, putMateriaRequest, putMateriaExitoso, putMateriaFallido, patchActivarMateriaRequest, patchActivarMateriaExito, patchActivarMateriaFallido, deleteDesactivarMateriaRequest, deleteDesactivarMateriaExitoso, deleteDesactivarMateriaFallido} from "../../../services/administrador/materias/index"



export const getDataMaterias = (token) => {

  return async (dispatch) => {
    try {
      dispatch(getMateriaRequest());

      const response = await fetch(`${url}/materias`, {
        method: "GET",
        headers: {
          authorization: token,
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const dataMaterias = await response.json();
      if (dataMaterias.length === 0) {
        return dispatch(
          getMateriaFallido(dataMaterias)
        );
      }
      dispatch(getMateriaExitoso(dataMaterias));
    } catch (error) {
      console.log(error);
      dispatch(getMateriaFallido(error.error));
    }
  };
};

export const postMateria = (token,materia) => {
  return async (dispatch) => {
    try {
      dispatch(postMateriaRequest());
      const response = await fetch(`${url}/materias`, {
        method: 'POST',
        body: JSON.stringify(materia),
        headers: {
          authorization: token,
          "Content-type": "application/json; charset=UTF-8",
        },
        
      });

      const result = await response.json();
      if (!response.ok) {
        return dispatch(postMateriaFallido(result));
      }
      dispatch(postMateriaExitoso(materia));
    } catch (error) {
      console.log(error);
      dispatch(postMateriaFallido(error.error));
    }
  };
};

export const putMateria = (token,materia, id) => {
  return async (dispatch) => {
    try {
      dispatch(putMateriaRequest());
      const response = await fetch(`${url}/materias/${id}`, {
        method: 'PUT',
        body: JSON.stringify(materia),
        headers: {
          authorization: token,
          "Content-type": "application/json; charset=UTF-8",
        },
        
      });

      const result = await response.json();
      if (!response.ok) {
        return dispatch(putMateriaFallido(result));
      }
      dispatch(putMateriaExitoso(materia));
    } catch (error) {
      console.log(error);
      dispatch(putMateriaFallido(error.error));
    }
  };
};


export const patchActivarMateria = (id,token) => {
  return async (dispatch) => {
    try {
    
      dispatch(patchActivarMateriaRequest());

      const response = await fetch(`${url}/materias/${id}`, {
        method: 'PATCH',
        headers: {
          authorization: token,
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const materiaActivada = await response.json();
      if (!response.ok) {
        return dispatch(patchActivarMateriaFallido(materiaActivada));
      }
      dispatch(patchActivarMateriaExito());
      dispatch(getDataMaterias());
    } catch (error) {
      console.log(error);
      dispatch(patchActivarMateriaFallido(error.error));
    }
  };
};

export const deleteDesactivarMateria = (id, token) => {
  return async (dispatch) => {
    try {
      dispatch(deleteDesactivarMateriaRequest());

      const response = await fetch(`${id}/materias/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: token,
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const materiaDesactivada = await response.json();
      // console.log(materiaDesactivar);
      if (!response.ok) {
        return dispatch(deleteDesactivarMateriaFallido(materiaDesactivada));
      }
      dispatch(deleteDesactivarMateriaExitoso());
      dispatch(getDataMaterias());
    } catch (error) {
      console.log(error);
      dispatch(deleteDesactivarMateriaFallido(error.error));
    }
  };
};
