import {Celular} from './celular.js';
//=====================================
// 1 COMPLETADO
//-------------------------------------
//let
let number = 3;
console.log('el numero es: ', number);
//const
const lastName = 'Cruz';
console.log('el apellido es: ', lastName);
//spread
let animales = ['perro', 'gato', 'leon', 'aguila'];
let copiaAnimales = [...animales];
console.log(`arreglo copia de animales es: ${copiaAnimales}`);
//destructuring
let persona = {nombreDes: 'Nicolas', ocupacionDes: 'Developer', ciudadDes: 'Lima'}
const {nombreDes, ciudadDes} = persona;
console.log(`la persona destructurada es nombre: ${nombreDes} y ciudad: ${ciudadDes}`);
//template literals
const miLaptop = 'Asus';
console.log(`la marca de mi laptop es: ${miLaptop}`);

//=================================================
// 2 PENDIENTE EL ULTIMO ITEM DE LOS NUMEROS PRIMOS
//-------------------------------------------------
const evaluaNumero = (numero)=>{
    if(numero%2==0){
        return 'El numero es par';
    }else{
        return 'El numero es impar';
    }     
}
console.log('el promedio es :', evaluaNumero(5));


let numerosParesImpares= [1,2,3,4,5,6,7];
const generaArregloPar = (arreglo)=>{
    const arregloNuevo = [];
    arreglo.forEach((x)=>{
        if(x%2==0){
            arregloNuevo.push(x);            
        }
    })
    return arregloNuevo;
}
console.log('el arreglo par es :', generaArregloPar(numerosParesImpares));


const evaluaMultiploCinco =(numero) => {
    if(numero%5==0){
        console.log('El numero ', numero, 'SI es multiplo de 5');
    }else{
        console.log('El numero ', numero, 'NO es multiplo de 5');
    }
}
console.log(evaluaMultiploCinco(125));


//=====================================
// 3 PENDIENTE
//-------------------------------------

let celular1 = new Celular('claro', 'samsung s20', 'Hola celular2');

let celular2 = new Celular('claro', 'iPhone 14 Pro Max', 'Hola celular1');

celular1.envioMensaje();

//TO DO: mostrar el mensaje que envia, el celular que recibe



//=====================================
// 4 COMPLETADO
//-------------------------------------

const arregloUno = [5,6,7,8];
console.log(`arreglo Inicial es: ${arregloUno}`);
const arregloDos = [1,2,3,4,...arregloUno]
console.log(`agregamos los numeros 1,2,3,4`);
console.log(`===> arreglo Final es: ${arregloDos}`);


//=====================================
// 5 COMPLETADO
//-------------------------------------

const calculaNumeros = (a,b,tipo)=>{
    switch(tipo){
        case '+': {
            console.log('La suma de los numeros es :', a + b);
            break;
        }
        case '-': {
            return console.log('La resta de los numeros es :', a - b);
            break;
        }
        case '*': {
            return console.log('La multiplicacion de los numeros es :', a * b);
            break;
        }
        case '/': {
            return console.log('La division de los numeros es :', a / b);
            break;
        }
        default: {
            return console.log('utilice solo +, -, *, /, como operadores');
            break;
        }
    }            
}
calculaNumeros(5,3,'+');
calculaNumeros(5,3,'-');
calculaNumeros(5,3,'*');


