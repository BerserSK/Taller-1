/*Ejercicio 4.1 */
    let opciones=document.getElementById("opciones");
    let resp=document.getElementById("respuesta");
    opciones.addEventListener('click',(e)=>{
        e.preventDefault()
        if(e.target.id=="opcion1"){
            resp.innerHTML="Opcion Incorrecta";
            resp.classList.add("incorrecto");
            resp.style.setProperty("visibility", "visible");
            resp.classList.remove("correcto")
        }
    });