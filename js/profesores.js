const listar=document.getElementById("submit")
const rta=document.getElementById("form")
listar.addEventListener('click', (e)=>{
    let op=document.getElementById("nombre").value;
    let op2=document.getElementById("apellido").value;
    let op3=document.getElementById("actividad").value;
    if(op==op2 && op==op3){
        e.preventDefault();
        let texto=`
        <p class="prueba2">la opcion elegida es ${op}</p>
        <i class="fa-solid fa-check"></i>
        <p class="prueba">la respuesta es correcta</p>`
      rta.innerHTML=texto; 
      rta.style.setProperty('position', "relative");
      rta.style.setProperty('display', "flex");
      rta.style.setProperty('left', "60px");
      rta.style.setProperty('color', "green");
    }else if(op!=op2 && op2!=op3 && op3!=op){
        e.preventDefault();
        let texto=`
        <p class="prueba2">la opcion elegida es ${op}</p>
        <i class="fa-solid fa-x"></i>
        <p class="prueba">la respuesta es incorrecta</p>`
      rta.innerHTML=texto;
      rta.style.setProperty('position', "relative");
      rta.style.setProperty('display', "flex");
      rta.style.setProperty('left', "60px");
      rta.style.setProperty('color', "red");
    }else{
        e.preventDefault();
        let texto=`
        <p class="prueba2">la opcion elegida es ${op}</p>
        <i class="fa-solid fa-x"></i>
        <p class="prueba">la respuesta es incorrecta</p>`
      rta.innerHTML=texto;
      rta.style.setProperty('position', "relative");
      rta.style.setProperty('display', "flex");
      rta.style.setProperty('left', "60px");
      rta.style.setProperty('color', "red");
    }
})