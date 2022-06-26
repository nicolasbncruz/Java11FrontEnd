import PaisajesCard from "./PaisajesCard";
import PaisajesTabla from "./PaisajesTabla";
import dataPaisajes from './dataPaisajes.js';

const ListaPaisaje = () => {
  
  let [paisajes] = [dataPaisajes.paisajes];

  return (
    <div className="container">
      <p>Lista de paisajes</p>
      <p className="lead fs-2 fw-bolder">
        {/* Se tiene un total {paisajes.length} de destinos */}
        Se tiene un total 3 de destinos
      </p>
      <div className="row">
        {
          paisajes.map((paisaje) => (
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
      
      {/* <PaisajesCard paisajes={paisajes} filtro="Europa"/> */}
      {/* <PaisajesTabla paisajes={paisajes}/> */}

    </div>
  );
};
export default ListaPaisaje;
