//en el componente funcional no hay metodos de ciclo de vida

//este es el Hook!!!
import { useEffect, useState } from "react";

const ContadorF = () => {
  //este es el Hook!!!
  const [contador, setContador] = useState(0);
  const [contadorAutomatico, setContadotAutomatico] = useState(0);

  const incrementarContador = () => {
    setContador(contador => contador<20 ? contador + 1: 0)
  }

  const decrementarContador=()=>{
    setContador(contador=>contador>0?contador-1:0)
  }

  
  const incrementarContadorAutomatico=()=>{
    setContadotAutomatico(contadorAutomatico=>contadorAutomatico<6?
      contadorAutomatico+1:0)
  }

  //hook que recibe como parametro una funcion callback y 
  //atributos necesarios para actualizar
  //usar metodo o funcion lambda afueraaaa!!!
  useEffect(()=>{
    const id=setInterval(() => {
      incrementarContadorAutomatico()      
    }, 1000);

    return ()=>clearInterval(id);
  },[contadorAutomatico])


  return (
    <div className="container">
      <div className="row">
        
        <div className="col col-4">
          <div className="card">
            <div className="card-header">
              <p>Componente funcion con estado Hook</p>
            </div>
            <div className="card-body">
              <p>Contador Func: {contador}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary m-2" onClick={incrementarContador}>Incrementar</button>
              <button className="btn btn-danger m-2" onClick={decrementarContador}>Decrementar</button>
            </div>
          </div>
        </div>

        <div className="col col-4">
          <div className="card">
            <div className="card-header">
              <p>Componente funcion automatico con estado Hooks</p>
            </div>
            <div className="card-body">
              <p>Contador Func: {contadorAutomatico}</p>
            </div>
            <div className="card-footer">              
              <p>Es un componente con contador automatico que maneja estado
                y actualiza con useEffect
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContadorF;
