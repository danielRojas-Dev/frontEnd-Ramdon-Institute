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
    ACTIVAR_MATERIA_REQUEST,
    ACTIVAR_MATERIA_EXITOSO,
    ACTIVAR_MATERIA_FALLIDO,
    DESACTIVAR_MATERIA_REQUEST,
    DESACTIVAR_MATERIA_EXITOSO,
    DESACTIVAR_MATERIA_FALLIDO,
    ELIMINAR_STATE_MATERIAS
  } from "../../../types/index";


  //GET

export const getMateriaRequest = () => {
    return {
      type: GET_MATERIAS_REQUEST,
    };
  };
  
  export const getMateriaExitoso= (dataMaterias) => {
    return {
      type: GET_MATERIAS_EXITOSO,
      payload: dataMaterias,
    };
  };
  
  export const getMateriaFallido = (error) => {
    // console.log(error)
    return {
      type: GET_MATERIAS_FALLIDO,
      payload: error,
    };
  };


  //POST

export const postMateriaRequest = () => {
  return {
    type: POST_MATERIA_REQUEST,
  };
};

export const postMateriaExitoso = (materia) => {
  return {
    type: POST_MATERIA_EXITOSO,
    payload: materia,
  };
};

export const postMateriaFallido = (error) => {
  return {
    type: POST_MATERIA_FALLIDO,
    payload: error.errors,
  };
};


  //PUT

  export const putMateriaRequest = () => {
    return {
      type: PUT_MATERIA_REQUEST,
    };
  };
  
  export const putMateriaExitoso = (materia) => {
    return {
      type: PUT_MATERIA_EXITOSO,
      payload: materia,
    };
  };
  
  export const putMateriaFallido = (error) => {
    return {
      type: PUT_MATERIA_FALLIDO,
      payload: error.errors,
    };
  };


  // PATCH ACTIVAR
export const patchActivarMateriaRequest = () => {
  return {
    type: ACTIVAR_MATERIA_REQUEST,
  };
};

export const patchActivarMateriaExito = () => {
  return {
    type: ACTIVAR_MATERIA_EXITOSO,
  };
};

export const patchActivarMateriaFallido = (error) => {
  return {
    type: ACTIVAR_MATERIA_FALLIDO,
    payload: error.errors,
  };
};


// PATCH DESACTIVAR MATERIA
export const deleteDesactivarMateriaRequest = () => {
  return {
    type: DESACTIVAR_MATERIA_REQUEST,
  };
};

export const deleteDesactivarMateriaExitoso = () => {
  return {
    type: DESACTIVAR_MATERIA_EXITOSO,
  };
};

export const deleteDesactivarMateriaFallido = (error) => {
  return {
    type: DESACTIVAR_MATERIA_FALLIDO,
    payload: error.errors,
  };
};

export const eliminarStateMateria = () => {
  return {
    type: ELIMINAR_STATE_MATERIAS,
  };
};