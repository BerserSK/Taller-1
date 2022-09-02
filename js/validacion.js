/**Modal 0, Detalle Cuadrado */
let btnmodalv=document.getElementById("abrirModal");
let venmodalv=document.getElementById("ventanaModal");
let cermodalv=document.querySelector(".cerrarModal");
btnmodalv.addEventListener('click', (e)=>{
    e.preventDefault();
    venmodalv.style.display="block"
})

cermodalv.addEventListener('click',()=>{
    venmodalv.style.display="none"
})

window.addEventListener('click',(e)=>{
    if(e.target==venmodalv){
        venmodalv.style.display="none"
    }
})