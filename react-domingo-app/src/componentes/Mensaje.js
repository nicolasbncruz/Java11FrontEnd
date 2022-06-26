import './Mensaje.css';

const Mensaje=(props)=>{

    const estiloH3 = {
        color: '#084298',
        padding: '10px',
        margin: '10px',
        backgroundColor: '#ff9800',
        fontSize: '20px'
    }

    return(
        <div className='container shadow'>
            <div style={{background:'#0eaf5a', padding: '10px', margin: '10px', width:'fit-content'}}>
            <h3 style={estiloH3}>
                Enviado Por: {props.enviadoPor}</h3>

                <h4 className='estiloH4'>Mensaje: {props.msg}</h4>
                <p className='lead fs-4 m-2 p-2 fw-bolder alert-primary'> detalle: {props.detalle}</p>
        </div> 
        </div>       
    )

}
export default Mensaje;

