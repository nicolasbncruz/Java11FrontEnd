export const bancoFunciones={

    xBF:20,
    yBF:15,

    sumaBF:(a,b)=>{
        let resultado = a+b;
        console.log(`la suma de ${a} y ${b} es: ${resultado}`);
    },
    saludoBF:(nombre)=>{
        console.log(`Welcome ${nombre} to course Java 11 frontend`);
    },

    imprimir:(cadena)=>{
        console.log(cadena);
    },

    saludoBFTradicional:function(msg){
        console.log(msg);
    }

}
 
