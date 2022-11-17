import React from "react";
import { NavLink } from "react-router-dom";

const Sidbar = () => {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <NavLink className="nav-link collapsed" to="/materias">
              <i className="bi bi-menu-button-wide"></i>
              <span>Materias</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-journal-text"></i>
              <span>Usuarios</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span>Publicaciones</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <i className="bi bi-question-circle"></i>
              <span>Asistencias</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-box-arrow-right"></i>
              <span>Cerrar Sesion</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidbar;
