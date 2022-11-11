import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth";
import logo from "../../assets/img/logoPoli.png";

const Login = () => {
  const { token, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [userPassword, setPassword] = useState();



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userName, userPassword));
  };

  useEffect(() => {
    if (token !== null) {
      navigate("/inicioAdmin");
    }
  }, [token]);

  return (
    <>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src={logo} alt="" />
                      <span className="d-none d-lg-block">
                        Instituto Politecnico
                      </span>
                    </a>
                  </div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          {" "}
                          <b>INICIO DE SESION</b>
                        </h5>
                      </div>

                      <form
                        onSubmit={handleSubmit}
                        className="row g-3 needs-validation"
                      >
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Nombre de Usuario
                          </label>
                          <div className="input-group has-validation">
                            <span
                              className="input-group-text"
                              id="inputGroupPrepend"
                            >
                              User
                            </span>
                            <input
                              type="text"
                              name="username"
                              onKeyUp={(e) => setUserName(e.target.value)}
                              className="form-control"
                              id="yourUsername"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Contraseña
                          </label>
                          <input
                            type="password"
                            name="password"
                            onKeyUp={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="yourPassword"
                            required
                          />
                        </div>

                        <div className="col-12">
                          <div className="alert alert-danger">
                            {error}
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Iniciar Sesion
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;
