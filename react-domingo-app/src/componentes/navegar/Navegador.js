import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Contador from "../compclase/Contador";
import Reloj from "../compclase/Reloj";
import ContadorF from "../compfunc/ContadorF";
import RelojF from "../compfunc/RelojF";
import ListaPaisaje from "../ListaPaisaje";
import PageNotFound from "../PageNotFound";
import PaisajesProps from "../PaisajesProps";
import PaisajesTabla from "../PaisajesTabla";
import dataPaisajes from "../dataPaisajes";
import PaisajesCard from "../PaisajesCard";

const Navegador = () => {

  let [paisajes] = [dataPaisajes.paisajes];

  return (
    <div className="container">

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link active">Reloj Clase</Link>
              </li>
              <li className="nav-item">
                <Link to='/relojFuncional' className="nav-link">Reloj Funcional</Link>
              </li>
              <li className="nav-item">
                <Link to='/listaPaisajes' className="nav-link">Listar Paisajes</Link>
              </li>
              <li className="nav-item">
                <Link to='/tablaPaisajes' className="nav-link">Paisajes (Todos)</Link>
              </li>
              <li className="nav-item">
                <Link to='/cardPaisajesFiltro' className="nav-link">Paisajes (Filtro)</Link>
              </li>
              <li className="nav-item">
                <Link to='/contadorClase' className="nav-link">contador con Clase</Link>
              </li>
              <li className="nav-item">
                <Link to='/contadorFunc' className="nav-link">contador Funcional</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <Link to='paisajesProps' className="dropdown-item">Muestra paisajes con props</Link>
                  </li>                  
                  <li><a className="dropdown-item" href="/#">Another action</a></li>
                  <li><a className="dropdown-item" href="/#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* rutas de mi aplicación */}
      <Routes >
        <Route path='/' element={<Reloj/>} />
        <Route path='relojFuncional' element={<RelojF/>} />
        <Route path='listaPaisajes' element={<ListaPaisaje/>} />
        <Route path='contadorClase' element={<Contador indicador='1'/>} />
        <Route path='contadorFunc' element={<ContadorF indicador='1'/>} />
        <Route path='paisajesProps' element={<PaisajesProps/>} />        
        <Route path='tablaPaisajes' element={<PaisajesTabla paisajes={paisajes}/>} />
        <Route path='cardPaisajesFiltro' element={<PaisajesCard paisajes={paisajes} filtro='America'/>} />

        <Route path='*' element={<PageNotFound/>} />

      </Routes>

    </div>
  );
};

export default Navegador;
