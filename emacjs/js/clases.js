//constructor va a separar instanciar objetos de esta clase
import {Rectangulo} from './clasesv2.js'

export class CCirculo{
    PI=3.1416;    
    constructor(radio){
        this.radio = radio;
    }

    area(){    
        let objR = new Rectangulo(20,30);
        objR.imprimir();
        return this.PI*this.radio*this.radio;
    }

}

export class Empleado {
    sueldo=0;
    constructor(nombre, dni, cargo){
        this.nombre = nombre;
        this.dni = dni;
        this.cargo = cargo;        
    }

    detalleEmpleado(){
        console.log('nombre: '+this.nombre+ ' dni: '+this.dni+' cargo: '+this.cargo);
    }

    detalleAsignaYMuestraSueldo(){
        this.asignarSueldo();
        this.muestraSueldo();
        this.detalleEmpleado();

        if(this.sueldo<500){
            console.log(' Ud esta empezando...');
        }else{
            console.log(' ud ya tiene experiencia...');
        }
    }
 
    asignarSueldo(){
        switch(this.cargo){
            case 'Analista': {
                this.sueldo = 600;
                break;
            }
            case 'Programador': {
                this.sueldo = 1200;
                break;
            }
            case 'Gestor': {
                this.sueldo=300;
                break;
            }
            default:{
                console.log('cargo no definido');
                break;
            }
        }
    }//asignar sueldo

    muestraSueldo(){
        console.log('el sueldo asignado es ', this.sueldo);
    }

}//end empleado