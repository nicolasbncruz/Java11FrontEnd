import { Component } from "react";

class Contador extends Component {
  state = {
    contador: 0,
    contadorAutomatico:0,
    indicador:this.props.indicador
  };

  incrementarContador=()=>{
    this.setState({      
      contador: this.state.contador < 20 ? this.state.contador + 1 : 0,
    })
  }

  decrementarContador=()=>{
    this.setState({
      //contador: this.state.contador>1? this.state.contador-1:0
      contador: this.state.contador>0? this.state.contador-1:0
    })
  }

  incrementarContadorAutomatico=()=>{
    //el state solo se puede setear dentro de un metodo lambda
    this.setState({
      contadorAutomatico: (this.state.indicador==='1' && this.state.contadorAutomatico<15)
      ? this.state.contadorAutomatico + 1 : (this.state.contadorAutomatico===15?0:this.state.contadorAutomatico)
    })
  }//hacer la logica del reloj cada vez que llegue a 60 seg que se agregue un minuto
  //hacer la logica del reloj cada vez que llegue a 60 min que se agregue una hora

  pararContadorAutomatico=()=>{
    this.setState({
      indicador:'0'
    })
  }

  continuarContadorAutomatico=()=>{
    this.setState({
      // contadorAutomatico: this.state.contadorAutomatico<150?0:0,
      indicador:'1'
    })
  }

  componentDidMount=()=>{
    this.id = setInterval(() => {
      this.incrementarContadorAutomatico()
    }, 1000);
  }

  //primero programas luego disenias!!!!!!!!!!!!!!!
  componentWillUnmount=()=>{
    clearInterval(this.id)
  }

  render() {
    return (
      <div className="container">        
        
        <div className="row">
          <div className="col col-4">
            <div className="card">
              <div className="card-header">Componente Clase con estado</div>
              <div className="card-body">Contador: {this.state.contador}</div>
              <div className="card-footer">
                <button
                  className="btn btn-primary m-2"
                  onClick={this.incrementarContador}>
                  Incrementar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.decrementarContador}>
                  Decrementar
                </button>
              </div>
            </div>
          </div>


          <div className="col col-4">
            <div className="card">
              <div className="card-header">
                Componente Clase con estado automatico
              </div>
              <div className="card-body">
                Contador Automatico: {this.state.contadorAutomatico}
              </div>
              <div className="card-footer">
                <p>Este contador se actualiza automaticamente</p>
                <button className="btn btn-info m-2" onClick={this.pararContadorAutomatico}>Parar</button>
                <button className="btn btn-info m-2" onClick={this.continuarContadorAutomatico}>Continuar</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default Contador;
