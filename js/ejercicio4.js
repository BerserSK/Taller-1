/*Declarar la funcion por declaracion
function lanzarmoneda(){
    let moneda = Math.floor((Math.random() * 2) + 1);
    console.log(`El lanzamiento fue ${moneda}`);
}

//Invocar la funcion
lanzarmoneda();

//Funcion con valor de retorno
/*function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    return moneda;
}

//Funcion con parametros
let lanzarmoneda=function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    return moneda;
}

//Invocar la funcion
let lanzamiento=lanzarmoneda();

//Invocar la funcion con el valor de retorno
/*console.log(`El lanzamiento fur ${lanzarmoneda()}`);
let lanzamiento=lanzarmoneda();
console.log(`El lanzamiento fue ${lanzamiento}`);*/

//funcion con parametros
/*function ganar(saldo, apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}

let ganar=function(saldo,apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}

//Invocar la funcion
ganar(saldo,apuesta)

/*function perder(saldo, apuesta){
    saldo=saldo-apuesta;
    return saldo;
}

//funcion con parametros
let perder=(saldo,apuesta)=>{
    saldo=saldo-apuesta;
    return saldo;
}

//Invocar funcion
perder(saldo,apuesta);

//Invocar la funcion y enviar argumentos segun corresponda
/*ganar(saldo,apuesta);
perder(saldo,apuesta);

let seguir=true;
let saldo=0;
let jugador=prompt("Ingrese el nombre del jugador");
saldo=parseInt(prompt("Cuando deseas recargar para jugar"));

while(seguir==true){
    let eleccion=prompt(`${jugador} Elige 1. Cara 2. Sello`);
    let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿Cuanto deseas apostar?`));
    let lanzamiento=lanzarmoneda();
    if(lanzamiento==1 && eleccion==1){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue cara escogiste Cara Tu ganaste!!!, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==2 && eleccion==2){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue sello escogiste Sello Tu ganaste!!!, tu nuevo saldo es ${saldo}`);
    }else if(lanzamiento==1 && eleccion==2){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue Cara escogiste Sello Perdiste!!!, tu nuevo saldo es ${saldo}`);
    }else if(lanzamiento==2 && eleccion==1){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue Sello escogiste Cara Perdiste!!!, tu nuevo saldo es ${saldo}`);
    }

    seguir=confirm("Desea jugar otra vez");
}*/


//Creacion del objeto animal, con 3 propiedades y 1 metodo
const animal={
    nombre:"Felix",
    tipo:"gato",
    edad: "4",
    comer(){
        //Acceder a las propiedadesd de un onjeto
        console.log(`${animal.nombre} esta comiendo`);
        //Usando la palabra reservada this
        console.log(`${this.nombre} esta comiendo`);
    }
}

//mostrar objeto completo
console.log(animal)

//Invocar metodos de un objeto
animal.comer();