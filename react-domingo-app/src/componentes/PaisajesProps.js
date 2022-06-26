import React from 'react';
import Paisaje from './Paisaje';

const PaisajesProps = () => {

  return (
    <div className='container'>
      <p>Componente clase en react</p>
      <div className="row">
        <Paisaje
          imagen="https://th.bing.com/th/id/OIP.72-oG0b6-tm2QFytMgvIygHaEo?pid=ImgDet&rs=1"
          descripcion="Es un paisaje de la localidad de Virginia rodeado de pinos y un lago que provee un ecosistema distinto a lo visto en la ciudad en el campo"
          precio="250"
          titulo="Paisaje de Virginia"
          continente='America'/>
        <Paisaje
          imagen="https://i.ytimg.com/vi/WoXJc0LaF6U/maxresdefault.jpg"
          descripcion="Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial."
          precio="225"
          titulo="Coliseo Romano"
          continente='Europa'/>          
        <Paisaje
          imagen="https://www.peru.travel/Contenido/General/Imagen/pe/3/1.1/huacachina.jpg"
          descripcion="Huacachina es un oasis desértico y una pequeña villa justo al oeste de la ciudad de Ica, en el suroeste de Perú. En su centro están las aguas verdes de la laguna"
          precio="225"
          titulo="Laguna de Huacachina"
          continente='America'/>
        <Paisaje
          imagen="https://www.perurail.com/wp-content/uploads/2020/11/Machu-Picchu-la-Ciudadela-Inca.jpg"
          descripcion="Machu Picchu es una ciudadela inca ubicada en las alturas de las montañas de los Andes en Perú, sobre el valle del río Urubamba. "
          precio="350"
          titulo="Ciudadela Machupicchu"
          continente='America'/>
        <Paisaje
          imagen="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/medium_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
          descripcion="París, la capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura."
          precio="450"
          titulo="Ciudad de Paris"
          continente='Europa'/>
        <Paisaje
          imagen="https://www.revistacambio.com.mx/wp-content/uploads/2020/05/e561dc63ef73eef5012102efda1dfde0.jpg"
          descripcion="La Gran Muralla china es una antigua fortificación china,1​ construida y reconstruida entre el siglo v a. C. y el siglo xvi para proteger la frontera"
          precio="390"
          titulo="La muralla china"
          continente='Asia'/>        
      </div>

    </div>
  )
};

export default PaisajesProps;