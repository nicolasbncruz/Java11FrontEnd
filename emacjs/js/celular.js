export class Celular{
    
    constructor(operador, nombre, mensaje){
        this.operador;
        this.nombre;
        this.mensaje = mensaje;
    }

    envioMensaje(){
        switch(this.operador, this.nombre){
            case 'claro': {
                console.log('El celular ', this.nombre, 'le ha enviado un mensaje '+
                    +'pero fue bloqueado');
                break;
            }default: {
                console.log('cargo no definido');
                break;
            }
            
        }        
    }
}