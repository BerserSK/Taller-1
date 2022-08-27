const a=document.getElementById("submit");
const d=document.getElementById("form");
a.addEventListener('click',(e)=>{
    //Entradas
    let grados=parseInt(document.getElementById("grados").value);
    let selection=document.getElementById("selection").value;
    let selection2=document.getElementById("selection2").value;
    if(selection==1 && selection2==1){
        //Proceso
        gradosResul=(grados-32)/(1.8);
        //Resultado
        e.preventDefault();
        let texto=`
        <p class="prueba2"></p>
        <p class="prueba">
        La conversion es ${gradosResul.toFixed(2)}°C</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "67px");
    }else if(selection==1 && selection2==2){
      //Proceso
      gradosResul=(grados-32)/(1.8)+(273.15);
      //Resultado
      e.preventDefault();
      let texto=`
      <p class="prueba2"></p>
      <p class="prueba">
      La conversion es ${gradosResul.toFixed(2)}K</p>`
    d.innerHTML=texto; 
    d.style.setProperty('position', "relative");
    d.style.setProperty('display', "flex");
    d.style.setProperty('left', "67px");
    }
    else if(selection==2 && selection2==3){
        //Proceso
      gradosResul=(grados*1.8)+(32);
      //Resultado
      e.preventDefault();
      let texto=`
      <p class="prueba2"></p>
      <p class="prueba">
      La conversion es ${gradosResul.toFixed(2)}°F</p>`
    d.innerHTML=texto; 
    d.style.setProperty('position', "relative");
    d.style.setProperty('display', "flex");
    d.style.setProperty('left', "67px");
    }else if(selection==2 && selection2==2){
        //Proceso
      gradosResul=(grados+273.15);
      //Resultado
      e.preventDefault();
      let texto=`
      <p class="prueba2"></p>
      <p class="prueba">
      La conversion es ${gradosResul.toFixed(2)}°K</p>`
    d.innerHTML=texto; 
    d.style.setProperty('position', "relative");
    d.style.setProperty('display', "flex");
    d.style.setProperty('left', "67px");
    }else if(selection==3 && selection2==1){
        //Proceso
        gradosResul=(grados-273.15);
        //Resultado
        e.preventDefault();
        let texto=`
        <p class="prueba2"></p>
        <p class="prueba">
        La conversion es ${gradosResul.toFixed(2)}°C</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "67px");
    }else if(selection==3 && selection2==3){
        //Proceso
        gradosResul=(1.8)*(grados-273.15)+(32);
        //Resultado
        e.preventDefault();
        let texto=`
        <p class="prueba2"></p>
        <p class="prueba">
        La conversion es ${gradosResul.toFixed(2)}°F</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "67px");
    }else if(selection==1 && selection2==3){
      e.preventDefault();
      let texto=`
      <p class="prueba2"></p>
      <p class="prueba">
      Opcion Invalida</p>`
    d.innerHTML=texto; 
    d.style.setProperty('position', "relative");
    d.style.setProperty('display', "flex");
    d.style.setProperty('left', "80px");
    }else if(selection==2 && selection2==1){
      e.preventDefault();
      let texto=`
      <p class="prueba2"></p>
      <p class="prueba">
      Opcion Invalida</p>`
    d.innerHTML=texto; 
    d.style.setProperty('position', "relative");
    d.style.setProperty('display', "flex");
    d.style.setProperty('left', "80px");
    }else if(selection==3 && selection2==2){
      e.preventDefault();
      let texto=`
      <p class="prueba2"></p>
      <p class="prueba">
      Opcion Invalida</p>`
    d.innerHTML=texto; 
    d.style.setProperty('position', "relative");
    d.style.setProperty('display', "flex");
    d.style.setProperty('left', "80px");
    }else{
        e.preventDefault();
        let texto=`
        <p class="prueba2"></p>
        <p class="prueba">
        Opcion Invalida</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "80px");
    }
})