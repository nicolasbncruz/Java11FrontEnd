import {Component} from "react";

class Cupcake extends Component {
  render() {
    return(
      <div className="cupcake">
      <img src={foto} alt={sabor} />
      <h2 >{color}</h2>
      <p >{`Sabor: ${sabor}`}</p>
    </div>
    )
  }
}

export default Cupcake;


/* 
function Cupcake({sabor, color, foto}){
  
  return (
    <div className="cupcake">
      <img src={foto} alt={sabor} />
      <h2 >{color}</h2>
      <p >{`Sabor: ${sabor}`}</p>
    </div>
  )
}
*/