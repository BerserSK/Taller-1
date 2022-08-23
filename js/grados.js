

function Convertir(){
    //Entradas
    let grados=parseInt(document.getElementById("grados").value);
    let selection=document.getElementById("selection").value;
    if(selection==1){
        //Proceso
        gradosResul=(grados-32)/(1.8);
        //Resultado
        alert(`Los grados celcius son ${gradosResul}°C`)
    }else if(selection==2){
      //Proceso
      gradosResul=(grados-32)/(1.8)+(273.15);
      //Resultado
      alert(`Los grados kelvin son ${gradosResul}K`)
    }
    else if(selection==3){
        //Proceso
      gradosResul=(grados*1.8)+(32);
      //Resultado
      alert(`Los grados farenheit son ${gradosResul}°F`)
    }else if(selection==4){
        //Proceso
      gradosResul=(grados+273.15);
      //Resultado
      alert(`Los grados kelvin son ${gradosResul}°K`)
    }else if(selection==5){
        //Proceso
        gradosResul=(grados-273.15);
        //Resultado
        alert(`Los grados celcius son ${gradosResul}°C`)
    }else if(selection==6){
        //Proceso
        gradosResul=(1.8)*(grados-273.15)+(32);
        //Resultado
        alert(`Los grados farenheit son ${gradosResul}°F`)
    }else{
        alert(`La opcion Elegida no es valida, Por favor vuelva
        a elegir una opcion valida`)
    }
}