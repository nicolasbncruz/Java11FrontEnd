import Mensaje from "./componentes/Mensaje";

const AppFL=()=>{
    return (
        <div className="container">
            <p className="lead fs-3 fw-bolder text-center">Componente en React utlizando lambda</p>
            <hr/>
            <Mensaje enviadoPor='Java 17 Front' msg='Ud esta revisando los conceptos de props'            
            detalle='es un concepto importante en react'
            />
            <hr/>
            <Mensaje enviadoPor='Java Front Capitulo 2' msg='Estamos revisando componentes en react'
            detalle='un componente contiene si o si props (funcional o clase)'/>
            <hr/>
            <Mensaje enviadoPor='Java Front Capitulo 2' msg='Revisanddo estilos propios'
            detalle='se esta revisando las 4 formas de generar estilos a un jsx renderizado'/>
        </div>

    )
}

export default AppFL;

//a nivel de funcion no existe el estado, para eso existen los hooks
