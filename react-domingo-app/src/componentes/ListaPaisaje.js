import PaisajesCard from "./PaisajesCard";
import PaisajesTabla from "./PaisajesTabla";

const ListaPaisaje = () => {
  const paisajes = [
    {
      id: 1,
      titulo: "Paisaje de Virginia",
      continente: "America",
      imagen:
        "https://th.bing.com/th/id/OIP.72-oG0b6-tm2QFytMgvIygHaEo?pid=ImgDet&rs=1",
    },
    {
      id: 2,
      titulo: "Coliseo Romano",
      continente: "Europa",
      imagen: "https://i.ytimg.com/vi/WoXJc0LaF6U/maxresdefault.jpg",
    },
    {
      id: 3,
      titulo: "Ciudadela Machupicchu",
      continente: "America",
      imagen:
        "https://www.perurail.com/wp-content/uploads/2020/11/Machu-Picchu-la-Ciudadela-Inca.jpg",
    },
    {
      id: 4,
      titulo: "Ciudad de Paris",
      continente: "Europa",
      imagen:
        "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/medium_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
    },
    {
      id: 5,
      titulo: "Laguna de Huacachina",
      continente: "America",
      imagen:
        "https://www.peru.travel/Contenido/General/Imagen/pe/3/1.1/huacachina.jpg",
    },
    {
      id: 6,
      titulo: "La muralla china",
      continente: "Asia",
      imagen:
        "https://www.revistacambio.com.mx/wp-content/uploads/2020/05/e561dc63ef73eef5012102efda1dfde0.jpg",
    },
  ];

  return (
    <div className="container">
      <p className="lead fs-2 fw-bolder">
        Se tiene un total de destinos {paisajes.length}
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
      <hr/>
      
      <PaisajesCard paisajes={paisajes}/>
      <PaisajesTabla paisajes={paisajes}/>

    </div>
  );
};
export default ListaPaisaje;
