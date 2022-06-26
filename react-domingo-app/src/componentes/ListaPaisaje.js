const ListaPaisaje=()=>{

  const paisajes=[
    {
      id:1, 
      titulo:'Paisaje de Virginia', 
      continente:'America', 
      imagen:'https://th.bing.com/th/id/OIP.72-oG0b6-tm2QFytMgvIygHaEo?pid=ImgDet&rs=1'
    },
    {
      id:2, 
      titulo:'Coliseo Romano', 
      continente:'Europa', 
      imagen: 'https://i.ytimg.com/vi/WoXJc0LaF6U/maxresdefault.jpg'
    },
    {
      id:3, 
      titulo:'Ciudadela Machupicchu', 
      continente:'America', 
      imagen: 'https://www.perurail.com/wp-content/uploads/2020/11/Machu-Picchu-la-Ciudadela-Inca.jpg'
    },
    {
      id:4, 
      titulo:'Laguna de Huacachina', 
      continente:'America', 
      imagen: 'https://www.peru.travel/Contenido/General/Imagen/pe/3/1.1/huacachina.jpg'
    }
  ]

  return(
    <div className="container">
      <p>Se tiene un total de destinos {paisajes.length}</p>
      {
        paisajes.map((paisaje)=>(
        <div>
          {paisaje.titulo}
        </div>
          ))
      }
    </div>
  )
}
export default ListaPaisaje;