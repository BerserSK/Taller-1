const a=document.getElementById("submit");
const d=document.getElementById("form");
a.addEventListener('click', (e)=>{
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;
    if(op==1){
        let sum=num1+num2;
        e.preventDefault();
        let texto=`
        <p class="prueba2"></p>
        <p class="prueba">
        El resultado es ${sum.toFixed(2)}</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "60px");
    }else if(op==2){
      let res=num1-num2;
      e.preventDefault();
      let texto=`
      <p class="prueba2"></p>
      <p class="prueba">
      El resultado es ${res.toFixed(2)}</p>`
    d.innerHTML=texto; 
    d.style.setProperty('position', "relative");
    d.style.setProperty('display', "flex");
    d.style.setProperty('left', "60px");
    }else if(op==3){
      let mult=num1*num2;
      e.preventDefault();
      let texto=`
      <p class="prueba2"></p>
      <p class="prueba">
      El resultado es ${mult.toFixed(2)}</p>`
    d.innerHTML=texto; 
    d.style.setProperty('position', "relative");
    d.style.setProperty('display', "flex");
    d.style.setProperty('left', "60px");
    }else if(op==4){
      let div=num1/num2;
      e.preventDefault();
      let texto=`
      <p class="prueba2"></p>
      <p class="prueba">
      El resultado es ${div.toFixed(2)}</p>`
    d.innerHTML=texto; 
    d.style.setProperty('position', "relative");
    d.style.setProperty('display', "flex");
    d.style.setProperty('left', "60px");
    }else{
      e.preventDefault();
      let texto=`
      <p class="prueba2"></p>
      <p class="prueba">La opcion Elegida no es valida, Por favor vuelva
      a elegir una operacion valida</p>`
    d.innerHTML=texto; 
    d.style.setProperty('position', "relative");
    d.style.setProperty('display', "flex");
    d.style.setProperty('left', "60px");
    }
})  
/*const rta=document.getElementById("resultado");
const ops=document.getElementById("ops");
ops.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.id);
  
if(e.target.id=="btn-sumar"){
  let texto=`<p>
    <i class="fa-solid fa-check"></i>
  </p>`
  rta.innerHTML=texto; 
  rta.style.setProperty('transition', ".2s ease all");
  rta.style.setProperty('color', "red") 
}
else {
  let texto2=`<p>
  <i class="fa-solid fa-x"></i>
  </p>`
  rta.innerHTML=texto2;
}
})*/

