import { Component } from "react";

class Reloj extends Component {
  state = {
    fecha: new Date(),
  };

  actualizarFecha=()=>{
    this.setState({
      fecha:new Date()
    })
  }

  componentDidMount=()=>{
    this.idFecha=setInterval(() => {
      this.actualizarFecha()
    }, 1000);
  }

  componentWillUnmount=()=>{
    clearInterval(this.idFecha);
  }

  render() {
    return(
      <div className="container">
        <p>Reloj con componente clase</p>
        <p className="bg-warning fs-2 shadow p-2 m-2">
          {this.state.fecha.toLocaleString()}</p>
      </div>
    )
  }
}

export default Reloj;
