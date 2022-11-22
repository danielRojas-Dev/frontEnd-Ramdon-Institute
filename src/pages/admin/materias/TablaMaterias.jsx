import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

import {patchActivarMateria, deleteDesactivarMateria} from "../../../redux/actions/admin/materias/index"

export const TablaMaterias = ({ dataMaterias, token }) => {
  const dispatch = useDispatch();

  const {materias} = dataMaterias


  const activarMateria = (id)=>{

    Swal.fire({
      title: '¿Desea activar esta Materia?',
      icon: 'warning',
      showCancelButton: "Cancelar",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Activar!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(patchActivarMateria(id, token))
        Swal.fire(
          '¡Materia Activada Correctamente!',
          'success'
        )
      }
    })
  }

    const desactivarMateria = (id)=>{

      Swal.fire({
        title: '¿Desea desactivar esta Materia?',
        icon: 'warning',
        showCancelButton: "Cancelar",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Desactivar!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteDesactivarMateria(id, token))
          Swal.fire(
            '¡Materia Desactivada Correctamente!',
            'success'
          )
        }
      })

  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Carrera</th>
            <th scope="col">Detalle</th> 
            <th scope="col">Editar</th> 
            <th scope="col">Eliminar</th> 
          </tr>
        </thead>
        <tbody>
          {materias?.map((materia) => (
            
            <tr key={materia._id}>
              <td>{materia.descripcion_materia}</td>
              <td>{materia.descripcion_carrera}</td>
              <td>
                <NavLink key={materia._id} to='/materias/detalleMaterias' state={materia} className='btn btn-primary'>
                  Detalle
                </NavLink>
              </td>
              <td>
                <NavLink key={materia._id}  to='/materias/editar' state={materia} className='btn btn-warning'>
                  Editar
                </NavLink>
              </td>
              <td>
                {!materia.activo ? (<NavLink onClick={()=>{activarMateria(materia._id)}} key={materia._id} state={materia} className='btn btn-info'>
                  Activar
                </NavLink>) : (<NavLink onClick={()=>{desactivarMateria(materia._id)}} key={materia._id} state={materia} className='btn btn-danger'>
                  Eliminar
                </NavLink>) }
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
