import React from "react";
import { useDispatch } from "react-redux";

export const TablaMaterias = ({ dataMaterias }) => {
  const dispatch = useDispatch();

  const {materias} = dataMaterias

  console.log(materias);

  return (
    <>
      <table className="table table-borderless datatable">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            {/* <th scope="col">Price</th>
            <th scope="col">Status</th> */}
          </tr>
        </thead>
        <tbody>
          {materias?.map((materia) => (
            
            <tr key={materia._id}>
              <td>{materia.descripcion_materia}</td>
              <td>{materia.descripcion_carrera}</td>
              <td>
                <Link></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
