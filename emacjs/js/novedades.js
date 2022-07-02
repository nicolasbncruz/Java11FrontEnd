import {CCirculo, Empleado} from './clases.js';
import {bancoFunciones} from './funciones.js';

console.log('archivo de nodedades!!')

//manera tradicional
function suma(numbers){
    let resultado =0;
    for (let i=0; i< numbers.length; i++){
        resultado  += numbers[i];
    }
    return resultado;
};
 
//asociando una constante a la funcion
//FUNCION ANONIMA!! WTF (ECMASript5)
const sumv2 = function(arr){
    let resultado =0;
    for (let i=0; i< arr.length; i++){
        resultado  += arr[i];
    }
    return resultado;
};

// funcion arrow utilizado a partir de ECMAScript6
const sumv3 = (numeros) => {
    let resultado =0;
    for (let i=0; i< numeros.length; i++){
        resultado  += numeros[i];
    }
    return resultado;
};

//ejemplo de lambda usando map
const edades = [20,24,30,45];
const edadesAlCuadrado = edades.map((x)=>x*x);
//programacion funcional.- es implementar una funcion dentro de otra funcion
//map devuelve un arreglo a partir de otro arreglo
console.log('edades : ', edades);
console.log('edades Al Cuadrado : ', edadesAlCuadrado);

//otro ejemplo de lambda
const fnCubo = (x)=>{
    return x*x*x;
}
const edadesAlCubo = edades.map((x)=>fnCubo(x));
console.log('edades Al Cubo de fnCubo: ', edadesAlCubo);

let x = 6;
console.log('x:',x,' al cubo es: ',fnCubo(x));


let arreglo=[3,4,5,6,7,8];
console.log(arreglo);

//verificando funcion tradicional
let sumatoria = suma(arreglo);
console.log('la sumatoria es: ', sumatoria);

//verificando funcion anonima
let sumatoriav2=sumv2(arreglo);
console.log('la sumatoriav2 es: ', sumatoriav2);

//verificando funcion arrow
let sumatoriav3=sumv3(arreglo);
console.log('la sumatoriav3 es: ', sumatoriav3);

// funcion sumatoria v4 mejorado con lambda
const fnSumatoria = (numeros) => {
    let resultado = 0;
    numeros.forEach((x)=>resultado+=x);
    return resultado;    
}

console.log('el arreglo a sumar es: ', arreglo);
console.log('la sumatoria v4 es :', fnSumatoria(arreglo));
//con map no se puede hacer solo con forEach

const fnPromedio = (numeros)=>{
    let sumado = fnSumatoria(numeros);
    let promedio = sumado/numeros.length;
    return promedio;
}
console.log('el promedio es :', fnPromedio(arreglo));

//funcion lambda que llama a la funcion promedio
const arreglov2 = [1,2,3,4];
let promedioCalculado = fnPromedio(arreglov2);
console.log('el promedio Calculado de :', arreglov2, 'es: ',promedioCalculado);


//=============================================================================
//Clase 2
//rest and default parameters

const sumaRD=(a=0,b=0,...rest)=>{
    let resultado = a + b;
    rest.forEach((x)=>resultado+=x);
    return resultado;
}

console.log('el resultado de sumaRD es: ', 
sumaRD(1,2,3,4,5,6));
console.log('el resultado de sumaRD es: ', 
sumaRD(2,3,5,6));

// deficinion de un objeto ecmascript

const circulo = {
    area:(radio)=>{
        const PI=3.14;
        return PI*radio*radio;
    },

    fnS:(x,y)=>{
        return x+y;
    }
}

let areaC = circulo.area(10);
let r = 10;
console.log('el area del circulo cuyo radio es: ',
r,' es: ',areaC);

let objCCirculo = new CCirculo(100);
let objCCirculo2 = new CCirculo(50);
console.log('el area del circulo radio 100 es: ',objCCirculo.area());
console.log('el area del circulo radio 50 es: ',objCCirculo2.area());

//import va en el archivo js donde necesito instanciar la clase
//export va en la clase que queremos hacer visible

//geenrar objetos de la clase empleado
let objEmp = new Empleado('Lizbeth', '43568745', 'Analista');
objEmp.detalleAsignaYMuestraSueldo();
let objEmp2 = new Empleado('Nicolas', '456698789', 'Programador');
objEmp2.detalleAsignaYMuestraSueldo();

// template literals - uso de la comilla inversa

const saludo = (nombre, genero='Mr.', msg='hola')=> {
    return `${msg}! ${genero} ${nombre}`
}

console.log(saludo('Nicolas'));
console.log(`el area del circulo cuyo radio es ${r} es: ${areaC}`);

//carrito de compras en la pc1

//iZquierdo que es
// derecho de donde proviene
//DESTRUCTURING - descomponer

const [a,,c,d]=[100,200,500,600];

console.log(`la suma de ${a} + ${c} + ${d} es 
${sumaRD(a,c,d)}`);

const usuario ={
    nombre: 'Nicolas',
    apellido: 'Cruz',
    genero: 'Mr.',
    correo: 'nicolascruz@gmail.com'
}

console.log(`nombre de usuario ${usuario.nombre} 
`)

const {genero, correo} = usuario;
console.log(`genero: ${genero} ~ correo: ${correo}`);

const {area, fnS} = circulo;
console.log(`area del circulo destructurizado es: 
    ${area(10)}`)
console.log(`la funcion suma del objeto circulo destructurizado es
${fnS(2,3)}`)

//destructurizando banco de funciones
const {sumaBF, saludoBF, xBF, yBF, imprimir}=bancoFunciones;

sumaBF(4,5);
saludoBF('Nicolas');
console.log(`los valores
 del objeto son ${xBF} y ${yBF}`);


 
//========================================================================
// C L A S E  -  3
//========================================================================

//spread operator

let arregloSO = [20,18,14,16];
//generamos una copia a partir dee la variavle

let copyArregloSO = [...arregloSO];
console.log(`areglo original: ${copyArregloSO}`);
console.log(`arreglo clonado: ${copyArregloSO}`);

let arregloComplemento = [19,30,50];

let clonArregloSOComplem = [...arregloSO,...arregloComplemento];

console.log(`arreglo final con la data de los 2 arrreglos es 
${clonArregloSOComplem}`);

let clonArregloSOCompAdicionado=[...arregloComplemento,
    60,70,...arregloSO];
console.log(`el arreglo final con adiciones es: 
${clonArregloSOCompAdicionado}`);

console.log(`El minimo valor del arreglo adicionado es:
 ${Math.min(...clonArregloSOCompAdicionado)}`);
 console.log(`El maximo valor del arreglo adicionado es:
 ${Math.max(...clonArregloSOCompAdicionado)}`);


 // spread operator con objeto
 const obj1 = {usuarioSP: 'Nicolas', correoSP: 'nicolasbncruz@gmail.com',
 edadSP: 26};
const clonObj1 ={...obj1};

const {usuarioSP, correoSP, edadSP} = clonObj1;

imprimir(`El obj1 usuario es: ${obj1.usuarioSP}, correo es: ${obj1.correoSP} y edad es: ${obj1.edadSP}`);

imprimir(`clon es: usuario ${usuarioSP} correo es ${correoSP} y edad es: ${edadSP}`);

//ajax: asyncronize javascript 




