import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src="images/logo.jpeg" alt="Espacio Getsha" width="108" /> Menu </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#"> Inicio</a>
                  </li>
                  <li className="nav-item"> <a className="nav-link" href="#">Quienes Somos??</a>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="#"> Productos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Cursos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-4 d-flex aling-item-center justify-content-end mt-3 mb-3">
          <CartWidget/>
        </div>
      </div>
    </div>


  );
};

export default NavBar;
