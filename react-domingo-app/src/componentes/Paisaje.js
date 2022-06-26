import { Component } from "react";
import Boton from "./Boton";

class Paisaje extends Component {
  render() {

    const fnVerificaContinente=(continente)=>{
        let estilo="card-footer text-white p-2";
        let estiloBtn="btn p-1 m-1 "
        
        if(continente==='America'){
            estilo+=" bg-primary";
        }else if(continente==='Europa'){
            estilo+=" bg-warning";
        }else if(continente==='Asia'){
            estilo+=" bg-info";
            estiloBtn+=" btn-info"
        }
        let estilos=[estilo, estiloBtn];
        return estilos;
    }

    return (    
          <div className="col col-4">
            <div className="card shadow">
              <img src={this.props.imagen} className="card-img-top" alt="image"/>
              <div className="card-body">
                <h5 className="card-title">{this.props.titulo}</h5>
                <p>Continente: {this.props.continente}</p>
                <p className="card-text">{this.props.descripcion}</p>
                {/* <a href="https://www.google.com/" className="btn btn-primary">Go somewhere</a> */}

              </div>
              {/* <div className={"card-footer " + (this.props.continente==='America'? "bg-primary" : "bg-success") + " text-white p-2"}> */}
              <div className={fnVerificaContinente(this.props.continente)[0]}>
                  Precio del viaje $ {this.props.precio}
                  <Boton className={fnVerificaContinente(this.props.continente)[1]}/>
              </div>
            </div>
          </div>
    );
  }
}

export default Paisaje;
