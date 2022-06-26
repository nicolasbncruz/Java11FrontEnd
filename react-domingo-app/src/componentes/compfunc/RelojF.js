import { useEffect, useState } from "react";

const RelojF = () => {
  const [fecha, setFechaq] = useState(new Date());

  const actualizaFecha = () => {
    setFechaq((fecha) => new Date());
  };

  useEffect(() => {
    const idFecha = setInterval(() => {
      actualizaFecha();
    }, 1000);
    return ()=>clearInterval(idFecha);
  })

  return <div className="container">    
    <p>Reloj con hook comp funcional</p>
    <p className="lead fs-2 bg-primary shadow text-white p-2 m-2">{fecha.toLocaleString()}</p>
  </div>
};
export default RelojF;
