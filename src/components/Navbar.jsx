import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cerrarSesion } from "../redux/actions/auth";


const Navbar = () => {

  const dataUser =  useSelector((state)=>state.auth.user)
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(cerrarSesion)
  }


  return (
    <>
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="./src/assets/img/logoPoli.png" alt="" />
            <span className="d-none d-lg-block">Instituto Politecnico</span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>


        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">

            <li className="nav-item dropdown">
   
            </li>

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="./src/assets/img/profile-img.jpg"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {dataUser.nombre} { dataUser.apellido}
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{dataUser.nombre} { dataUser.apellido}</h6>
                  <span>{ dataUser.tipo_persona}</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    onClick={logout} href="#"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Cerrar Sesion</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
