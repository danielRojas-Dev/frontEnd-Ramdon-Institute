import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "../pages/auth/Login";
import { cargarDatosUsuario } from "../redux/actions/auth";
import Home from "./administrador/Home";
import { InicioMaterias } from "../pages/admin/materias/InicioMaterias";



const RoutesAdmin = () => {
  return (
    <Routes>
      <Route path="/inicioAdmin" element={<Home />} />
      <Route path="/materias" element={<InicioMaterias />} />
      {/* // <Route path="/materias/agregar" element={<AgregarMateria />} />
      // <Route path="/materias/editar" element={<EditarMateria />} />
      // <Route path="/materias/detalle" element={<DetalleMateria />} />
      // <Route path="/usuarios" element={<HomeUsuarios />} />
      // <Route path="/usuarios/agregar" element={<AgregarUsuario />} />
      // <Route path="/usuarios/editar" element={<EditarUsuario />} />
      // <Route path="/avisos" element={<HomeAvisos />} />
      // <Route path="/avisos/agregar" element={<AgregarAviso />} />
      // <Route path="/avisos/editar" element={<EditarAviso />} />
      // <Route path="/notas-alumnos" element={<HomeNotasAlumnos />} />
      // <Route path="/detalle-notas-docente" element={<DetalleNotasDocente />} />
      // <Route path="/asistencias" element={<HomeAsistencias />} />  */}

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
