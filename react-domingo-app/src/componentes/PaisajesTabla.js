import React from 'react';

const PaisajesTabla = (props) => {
  
  let [paisajes]=[props.paisajes];

  return (
    <div className='container'>
      <table className='table table-dark text-center '>
      {/* <table className='table table-striped text-center '> */}
      {/* <table className='table table-hover text-center '> */}
        <thead >
          <tr >
            <th >Id</th>
            <th >Titulo</th>
            <th >Continente</th>
            <th >Imagen</th>
          </tr>
        </thead>
        <tbody >       
            {
              paisajes.map((paisaje)=>(
                <tr key={paisaje.id}>
                  <td >{paisaje.id}</td>
                  <td>{paisaje.titulo}</td>
                  <td>{paisaje.continente}</td>
                  <td><img src={paisaje.imagen} alt='imagen' className='img-fluid' style={{width:'25%', height:'25%'}}/> </td>
                </tr>
                
              ))
            }          
        </tbody>
      </table>
      PaisajesTabla
    </div>
  )
};

export default PaisajesTabla;