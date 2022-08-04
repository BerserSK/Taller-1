/*console.log("Hello World!");

let numero = 69;

console.log("El numero es " + numero);
console.log(`El numero es ${numero}`);

let nombre = "William";

console.log(`El nombre es ${nombre}`);//Variable Booleano, vacia 

let sena = true;
let vacio = undefined;

console.log(`Esta es la variable Booleana ${sena}`);
console.log(`Variable vacia ${vacio}`);

let res=numero+5;
console.log("el resultado es " + res);
console.log(`El resultado es ${res}`);
console.log(`el resultado es ${res+2}`);*/

//window.alert("Esto es una alerta");
//let estado=window.confirm("Esta seguro de esta accion?");
//console.log(`La ventana arrojo ${estado}`);

/*let num1=prompt("ingrese el primer numero");
let res=numero+parseInt(num1);
console.log(`El resultado es ${res}`);*/

/*let num1=prompt("Ingrese el primer numero");
let num2=prompt("Ingrese el segundo numero");
let res=parseInt(num1)+parseInt(num2);*/
//console.log(`El resultado es ${res}`);

//Condicionales
/*if(num1>num2){
    console.log(`El numero mayor es ${num1}`);
}else if(num1==num2){
    console.log(`Los numeros ${num1} y ${num2} son iguales`);
}else{
    console.log(`El numero ${num2} es mayor`);
}

//Operador ternario
let nummayor=(num1>num2)
?"El numero mayor es el primero"
: "El numeor mayor es el segundo"

console.log(nummayor)*/

//Condicionales con condiciones compuestas
/*bienvenidos
Verifique su uauraio 
Verifique password
credenciales de datos incorretos*/

/*let usuario = prompt("Ingrese su nombre de usuario");
let password = prompt("Ingrese su contraseña");



if(usuario=="William" && password==321){
     window.alert("Bienvenido");
}else if(usuario=="William" && password!=321){
    window.alert("Verifique la contraseña");
}else if(usuario!="William" && password==321){
    window.alert("Verifique su usuario");
}else if(usuario!="William" && password!=321){
    //Para Inseguros pero sirve igual que el Else
    window.alert("Credenciales de acceso incorrectas");
}/*else{
    window.alert("Credenciales de acceso incorrectas");
}*/

//Condicional multiple
let num1=prompt("Ingrese el primer numero");
let num2=prompt("Ingrese el segundo numero");
let eleccion=prompt("Ingrese que operacion quiere realizar")

switch(eleccion){
    case "sumar":
        let sumar=parseInt(num1)+parseInt(num2);
        console.log(`El resultado de la suma es ${sumar}`);
    break;
    case "restar":
        let restar=parseInt(num1)-parseInt(num2);
        console.log(`El resultado de la resta es ${restar}`);
    break;
    case "dividir":
        let dividir=parseInt(num1)/parseInt(num2);
        console.log(`El resultado de la division es ${dividir}`);
    break;
    case "multiplicar":
        let multiplicar=parseInt(num1)*parseInt(num2);
        console.log(`El resultado de la multiplicacion es ${multiplicar}`);
    break;
    default: 
        console.log(`La eleccion elegida es incorrecta`);
    break;
}