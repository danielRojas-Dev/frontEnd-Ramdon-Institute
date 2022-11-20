import React from "react";
import { Container } from "../../../components/layouts/Container";
import { TablaMaterias } from "./TablaMaterias";
import {getDataMaterias} from "../../../redux/actions/admin/materias/index"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const InicioMaterias = () => {
  const { token} = useSelector((state) => state.auth);
  const { materias, errores, loading } = useSelector((state) => state.materias);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataMaterias(token));
    return () => {
      // dispatch(limpiarMensajesMateria());
    };
  }, []);
  return (
    <Container>
      <div className="card-body">
        <h5 className="card-title">Listado de materias</h5>

        <TablaMaterias dataMaterias={materias}></TablaMaterias>
      </div>
    </Container>
  );
};
