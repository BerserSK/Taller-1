let cosas=['balon','cicla','jugar','tv','computador'];

/*console.log(cosas[2]);
console.log(cosas.length);
console.log(cosas[cosas.length-2]);*/

/*cosas.pop();

cosas.unshift("gaseosa");

console.log(cosas)

cosas.shift();

cosas.splice(1,3);

console.log(cosas);*/

/*cosas.forEach(function(elemento,index,array){
console.log(`posicion ${index} elemento ${elemetno}`)})

cosas.push('gaseosa');*/

/*Filter sirve para filtrar elemnto solo para uno */

let aprendices=[];
let seguir=true;

while(seguir==true){
    //aprendices.push(prompt("Ingrese el numero del aprendiz"));
    //seguir=confirm("Desea ingresar otro numero")
}

console.log(`Los aprendices son ${aprendices}`)

let filtro=aprendices.filter(aprendices=>aprendices="jose")
console.log(`el filtro es ${filtro}`)

let busqueda=aprendices.find(aprendices=>aprendices="jose")

console.log(`La busqueda es ${busqueda}`)

aprendices.sort();

let aprendice=[
    {primerNombre:"William",primerApellido:"Latorre"},
    {primerNombre:"Maria",primerApellido:"Rodriguez"}
]

let nombrecompleto = aprendice.map(function(ele,ind,arr){
    return `${ele.primerNombre} ${ele.primerApellido}`
})

console.log(`${aprendice}`);