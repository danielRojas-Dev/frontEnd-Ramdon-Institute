import React from "react";
import { Container } from "../../../components/layouts/Container";
import { TablaMaterias } from "./TablaMaterias";
import {getDataMaterias} from "../../../redux/actions/admin/materias/index"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { eliminarStateMateria } from "../../../redux/services/administrador/materias";

export const InicioMaterias = () => {
  const { token} = useSelector((state) => state.auth);
  const { materias} = useSelector((state) => state.materias);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataMaterias(token));
    // return () => {
    //   dispatch(eliminarStateMateria());
    // };
  }, []);
  return (
    <Container>
      <div className="card-body">
        <h2 className="text-center">Listado de Materias</h2>

        <NavLink className='btn btn-success mt-5 mb-2' to={"/materias/agregar"}>Agregar Materia</NavLink>

        <TablaMaterias dataMaterias={materias} token={token}></TablaMaterias>
      </div>
    </Container>
  );
};
