import React from "react";

function Testimonio () {
  return (
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={require('../imagenes/testimonio-emma.png')}
        alt='Foto de Emma'/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en suecia</p>
        <p className="cargo-testimonio">Ingeniera de software en Spotify</p>
        <p className="texto-testimonio">"Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify".</p>
      </div>
    </div>
  );
}
export default Testimonio;
// https://www.youtube.com/watch?v=6Jfk8ic3KVk&ab_channel=freeCodeCampEspa%C3%B1ol
// min 1:58:39
