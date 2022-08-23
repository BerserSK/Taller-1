
function Nombre(){
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let seleccion=document.getElementById("seleccion").value;
    if(seleccion==1){
        alert(`Su nombre es ${nombre.toUpperCase()}`);
    }else if(seleccion==2){
        alert(`La longitud de su nombre es ${nombre.length}`); 
    }else if(seleccion==3){
        alert(`La primera letra de su nombre es ${nombre.charAt(0)}
        La primera letra de su apellido es ${apellido.charAt(0)}`);
    }else if(seleccion==4){
        alert(`Su apellido es ${apellido.toLowerCase()}`);
    }else if(seleccion==5){
        alert(`La longitud de su apellido es ${apellido.length}`);
    }else if(seleccion==6){
        alert(`Su nombre de usuario es ${nombre.charAt(0).toUpperCase()}${nombre.charAt(1).toLowerCase()}${nombre.charAt(2).toLowerCase()}${nombre.charAt(3).toLowerCase()}${apellido.charAt(0).toLowerCase()}${apellido.charAt(1).toLowerCase()}${apellido.charAt(2).toLowerCase()}${apellido.charAt(3).toLowerCase()}`);
    }else{
        alert(`La opcion Elegida no es valida, Por favor vuelva
        a elegir una opcion valida`)
    }

}
/*
for(i = 0; i<6; i++){
    console.log("hola mundo")
}*/

/*let repetir=1;

do{
    console.log(`Hola soy William`)
    repetir=confirm("Desea Continuar?")
}while(repetir=true);

while(repetir=1){
    window.alert(`Hola soy William`);
    repetir=prompt("para continuar digita 1 o 2 para salir");
}
*/
