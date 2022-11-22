import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "../pages/auth/Login";
import { cargarDatosUsuario } from "../redux/actions/auth";
import Home from "../pages/admin/Home";
import { InicioMaterias } from "../pages/admin/materias/InicioMaterias";
import { DetalleMateria } from "../pages/admin/materias/DetalleMateria";
import { FormNuevaMateria } from "../pages/admin/materias/FormNuevaMateria";
import { FormEditarMateria } from "../pages/admin/materias/FormEditarMateria";



const RoutesAdmin = () => {
  return (
    <Routes>
      <Route path="/inicioAdmin" element={<Home />} />
      <Route path="/materias" element={<InicioMaterias />} />
      <Route path="/materias/detalleMaterias" element={<DetalleMateria />} />
      <Route path="/materias/agregar" element={<FormNuevaMateria/>}/>
      <Route path="/materias/editar" element={<FormEditarMateria />} />
       {/*
      // <Route path="/usuarios" element={<HomeUsuarios />} />
      // <Route path="/usuarios/agregar" element={<AgregarUsuario />} />
      // <Route path="/usuarios/editar" element={<EditarUsuario />} />
      // <Route path="/avisos" element={<HomeAvisos />} />
      // <Route path="/avisos/agregar" element={<AgregarAviso />} />
      // <Route path="/avisos/editar" element={<EditarAviso />} />
      // <Route path="/notas-alumnos" element={<HomeNotasAlumnos />} />
      // <Route path="/detalle-notas-docente" element={<DetalleNotasDocente />} />
      // <Route path="/asistencias" element={<HomeAsistencias />} />   */}

      <Route path="*" element={<Home />} />
    </Routes>
  );
};



export const Browser = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const dataUser = useSelector((state) => state.auth.user);




  useEffect(() => {
    if (token === null) return
    dispatch(cargarDatosUsuario(token));
  }, []);



  if (token === null) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }


  if (dataUser.tipo_persona == 'Admin') {
   return <RoutesAdmin/>
  }



};
