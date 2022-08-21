let i = true;
let contador = 0;
let acumulador = 0;

while(i=true){
    let elec=parseInt(prompt("Ingrese 1=Sello o 2=Cara"));
    let apuesta=prompt(`Ingrese la cantidad de su apuesta para el sello o cara`);
    let random=Math.floor(Math.random(1)*2);
    acumulador=parseInt(acumulador)+apuesta;
    window.alert(`Usted aposto ${apuesta}`);
    window.alert(`El resultado fue ${random}`);

    if(elec=1,0){
        window.alert(`Gano el juego, con el numero ${random}`);
        window.alert(`Gano la apuesta con ${acumulador} dinero`);
    }else if(elec=2){
        window.alert("Ash, perdiste el juego :`v");
        window.alert(`Perdiste con ${acumulador} dinero`);
    }
    contador=contador+1;
    window.alert(`las veces que usted jugo fueron ${contador}`);
    i=confirm("¿Deseas continuar?")
}