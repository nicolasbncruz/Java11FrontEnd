import React from 'react';


const PaisajesCard = (props) => {
  
  let [paisajes] = [props.paisajes];
  let paisajesFiltro = paisajes.filter((paisaje)=>paisaje.continente===props.filtro);
  console.log(paisajesFiltro);
  return (
    <div>
      
      <p className="lead fs-2 fw-bolder">
        {/* Se tiene un total de {paisajes.length} destinos [Paisajes Card] */}
        Se tiene un total de 3 destinos [Paisajes Card]
      </p>
      <div className="row">
        {
          paisajesFiltro.map((paisaje) => (
            <div className="col col-4" key={paisaje.id}>
              
              <div className="card shadow m-2">
                <div className="card-header fs-4 text-center p-2 bg-primary text-white">
                  <p>{paisaje.titulo}</p>
                </div>
                <div className="card-body">
                  <img src={paisaje.imagen} alt="imagen" className='img-fluid' />
                </div>
                <div className="card-footer fs-4 text-center p-2 bg-warning text-white ">
                  <p >{paisaje.continente}</p>
                </div>
              </div>
              
            </div>
          ))
        }
      </div>
      {/* <hr/> */}

    </div>
  )
};

export default PaisajesCard;