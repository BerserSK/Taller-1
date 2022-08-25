

function Convertir(){
    //Entradas
    let grados=parseInt(document.getElementById("grados").value);
    let selection=document.getElementById("selection").value;
    let selection2=document.getElementById("selection2").value;
    if(selection==1 && selection2==1){
        //Proceso
        gradosResul=(grados-32)/(1.8);
        //Resultado
        alert(`Los grados celcius son ${gradosResul}°C`)
    }else if(selection==1 && selection2==2){
      //Proceso
      gradosResul=(grados-32)/(1.8)+(273.15);
      //Resultado
      alert(`Los grados kelvin son ${gradosResul}K`)
    }
    else if(selection==2 && selection2==3){
        //Proceso
      gradosResul=(grados*1.8)+(32);
      //Resultado
      alert(`Los grados farenheit son ${gradosResul}°F`)
    }else if(selection==2 && selection2==2){
        //Proceso
      gradosResul=(grados+273.15);
      //Resultado
      alert(`Los grados kelvin son ${gradosResul}°K`)
    }else if(selection==3 && selection2==1){
        //Proceso
        gradosResul=(grados-273.15);
        //Resultado
        alert(`Los grados celcius son ${gradosResul}°C`)
    }else if(selection==3 && selection2==3){
        //Proceso
        gradosResul=(1.8)*(grados-273.15)+(32);
        //Resultado
        alert(`Los grados farenheit son ${gradosResul}°F`)
    }else if(selection==1 && selection2==3){
      alert(`Opciones elegidas invalidas, por favor vuelva
      a elegir las opciones`)
    }else if(selection==2 && selection2==1){
      alert(`Opciones elegidas invalidas, por favor vuelva
      a elegir las opciones`)
    }else if(selection==3 && selection2==2){
      alert(`Opciones elegidas invalidas, por favor vuelva
      a elegir las opciones`)
    }else{
        alert(`Las opciones Elegidas no son validas, Por favor vuelva
        a elegir las opcion validas`)
    }
}