import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Container } from '../../../components/layouts/Container';

export const DetalleMateria = () => {
    const location = useLocation();

    const {state} = location;

    console.log(state);

  return (
    <Container>
    <div className="col-sm-12 col-xl-12">
      <div className="bg-light rounded h-100 p-4">
        <NavLink className="btn btn-primary mb-3 ms-2" to="/materias">
          Volver Atras
        </NavLink>
        <h4 className="mb-4 text-center">
          Detalle Materia: <b>{state.descripcion_materia}</b>
        </h4>
        <ul>
          <li>Carrera: <b>{state?.descripcion_carrera}</b></li>
          <li>Estado: <b>{state?.activo != true ? ('Desabilitado'):('Habilitado')}</b></li>
          <li>Año Lectivo: <b>{state?.anio_lectivo?.descripcion_anio}</b></li>
          <li>Docente Principal: <b>{state?.docentes?.docente_principal?.nombre} {state?.docentes?.docente_principal?.apellido }</b></li>
          <li>Docente Auxiliar: <b>{state?.docentes?.docente_auxiliar?.nombre} {state?.docentes?.docente_auxiliar?.apellido }</b></li>
          <li>Dias de la Semana: <b>{state?.horarios?.dias_semana.map((dia)=>{return [dia,',']})}</b></li>
          <li>Horarios: <b>{state?.horarios?.horarios_dia}</b></li>
        </ul>
      </div>
    </div>
  </Container>
  )
}
