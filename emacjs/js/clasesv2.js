export class Rectangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    area(){
        return this.base*this.altura;
    }

    imprimir(){
        //console.log('el area del rectangulo de base: ', this.base, ' y altura: ', this.altura, ' es: ', this.area());
        console.log(`base: ${this.base} altura: ${this.altura}`)
    }
};

 