import { Component } from "react";
import Paisaje from "./componentes/Paisaje";
import Contador from "./componentes/compclase/Contador";
import Reloj from "./componentes/compclase/Reloj";
import ContadorF from "./componentes/compfunc/ContadorF";
import RelojF from "./componentes/compfunc/RelojF";
import ListaPaisaje from "./componentes/ListaPaisaje";
import Navegador from "./componentes/navegar/Navegador";

class AppC extends Component {
  render() {
    return (
      <div className="container">
        <Navegador/>
        <hr/>        
        {/* <RelojF/>
        <hr/> */}
        
        {/* <ListaPaisaje/> */}
        {/* <hr/> */}

        {/* <p>Contador clase</p>        
        <Contador indicador="1"/> */}
      
        {/* <ContadorF/> */}
        {/* <hr/> */}
        
      </div>
    );
  }
}
export default AppC;

//las clases mantienen estado
// tarea final capitulo 2 hacer un carrito
// este componente es el que tiene el componente Render
// dentro del metodo render mostramos el jsx
