/**Acceder al boton para abrir el modal */
let btnmodal=document.getElementById("abrirModal");

/** Acceder a la ventana modal */
let venmodal=document.getElementById("ventanaModal");

/**Acceder al boton cerrar de la ventana modal */
let cermodal=document.querySelector(".cerrarModal");
btnmodal.addEventListener('click',()=>{
    venmodal.style.display="block";
})

cermodal.addEventListener('click',()=>{
    venmodal.style.display="none"
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodal){
        venmodal.style.display="none"
    }
})