import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "../../../components/layouts/Container";
import { postMateria } from "../../../redux/actions/admin/materias";


export const FormNuevaMateria = () => {

    const { token} = useSelector((state) => state.auth);

    const [materia, setMateria] = useState();
    const [carrera, setCarrera] = useState();
    const [anio, setAnio] = useState();

    const navigate = useNavigate();

    const { materias } = useSelector(
        (state) => state?.materias
      );


      const {materias:carreras} = materias;

      const {descripcion_carrera} = carreras[0];


      const dispatch = useDispatch();


      const guardarMateria = (e)=>{

        e.preventDefault();
        e.target.reset();

        const nuevaMateria = {
            descripcion_materia:materia,
            descripcion_carrera:carrera,
            docentes:{},
            horarios:{},
            notas:{},
            anio_lectivo:{
                descripcion_anio:anio
            }
        }

        dispatch(postMateria(token,nuevaMateria))
        navigate('/materias');

      }


  return (
    <Container>
      <div className="col-sm-12 col-lg-12">
        <div className=" rounded h-100 p-4">
        
        </div>

        <div className="card">
          <div className="card-body">
          <h2 className="mb-4 text-center">Agregar Materia</h2>

            <form onSubmit={guardarMateria} className="row g-3">
              <fieldset>
                <div className="mb-3">
                  <label htmlFor="descripicionMateria" className="form-label">
                    Materia
                  </label>
                  <input
                    type="text"
                    onKeyUp={(e) => setMateria(e.target.value)}
                    required
                    className="form-control"
                    placeholder="Ingrese el nombre de la Materia"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="descripcionCarrera" className="form-label">
                    Carrera
                  </label>
                  <select onChange={(e)=>setCarrera(e.target.value)} id="" className="form-select" required>
                    <option defaultValue="0" selected disabled>
                      Seleccione una opcion
                    </option>
                    <option defaultValue="1">
                      {descripcion_carrera}
                    </option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="anioLectivo" className="form-label" required>
                    Año Lectivo
                  </label>
                  <select id="" onChange={(e)=>setAnio(e.target.value)}  className="form-select">
                    <option defaultValue="0" selected disabled>
                      Seleccione una opcion
                    </option>
                    <option defaultValue="1">
                      2022
                    </option>
                  </select>
                </div>

                {/* <div className="mb-3">
                  <label htmlFor="descripicionMateria" className="form-label">
                    Presefor Principal
                  </label>
                  <select id="" className="form-select">
                    <option value="0" selected disabled>
                      Seleccione una opcion
                    </option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="descripicionMateria" className="form-label">
                    Presefor Auxiliar
                  </label>
                  <select id="" className="form-select">
                    <option value="0" selected disabled>
                      Seleccione una opcion
                    </option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="descripicionMateria" className="form-label">
                    Dias
                  </label>
                  <select id="" className="form-select">
                    <option value="0" selected disabled>
                      Seleccione una opcion
                    </option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="descripicionMateria" className="form-label">
                    Horas
                  </label>
                  <select id="" className="form-select">
                    <option value="0" selected disabled>
                      Seleccione una opcion
                    </option>
                  </select>
                </div> */}

                
              </fieldset>
              <button type="submit"
                  className="btn btn-primary form-control ms-2"
                >
                  Guardar
                </button>
              <NavLink
                  className="btn btn-danger form-control mb-3 ms-2"
                  to="/materias"
                >
                  Cancelar
                </NavLink>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
