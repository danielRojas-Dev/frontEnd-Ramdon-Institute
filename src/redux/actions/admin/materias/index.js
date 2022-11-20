import { url } from '../../../../helpers/url';
import {fetchMateriaRequest, fetchMateriaExito, fetchMateriaFallido} from "../../../services/administrador/materias/index"
// import {
//     POST_MATERIA_EXITOSO,
//     POST_MATERIA_FALLIDO,
//     POST_MATERIA_REQUEST,
//     PUT_MATERIA_EXITOSO,
//     PUT_MATERIA_FALLIDO,
//     PUT_MATERIA_REQUEST,
//   } from "../../../types/index";



export const getDataMaterias = (token) => {
  return async (dispatch) => {
    try {
      dispatch(fetchMateriaRequest());

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
          fetchMateriaFallido(dataMaterias)
        );
      }
      dispatch(fetchMateriaExito(dataMaterias));
    } catch (error) {
      console.log(error);
      dispatch(fetchMateriaFallido(error.error));
    }
  };
};