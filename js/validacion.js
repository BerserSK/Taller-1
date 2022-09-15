//Esta es para numdoc y telefono ^\d{7,10}$
//Esta es para nombre y apellidos ^[a-zA-ZÁ-ÿ\s]{1,40}$
//Esta es para el correo ^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
//Esta es para el password ^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$

const reglas={
    textos: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, //Solo letras
    numeros: /^\d{7,10}$/, //Solo numeros
    correo: /^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Correos
    password: /^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //Passwords
}

//Acceder al formulario
let form=document.getElementById("frm-usuario");
let campos=document.querySelectorAll("#frm-usuario input");

//Agregar listener de evento submit al formulario que se envia
form.addEventListener('submit',e=>{
    e.preventDefault; //Evitar que se envie el formulario para realizar las validaciones 
    alert("Se envio el formulario");
})

const validarInput=(regla,input,grupo)=>{
    if(regla.test(input.value)){
        document.getElementById(`g-${grupo}`).classList.remove('error');
        document.getElementById(`g-${grupo}`).classList.add('success');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-check');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-exclamation');
        document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible')
    }else{
        document.getElementById(`g-${grupo}`).classList.add('error');
        document.getElementById(`g-${grupo}`).classList.remove('success');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-check');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-exclamation');
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible');
    }
}

const validarCampos=(e)=>{
    console.log("Se genero un eveto sobre el input"+e.target.name)
    switch(e.target.name){
        case "numdoc":
            validarInput(reglas.numeros,e.target,e.target.name);
        break;
        case "nombre":
            validarInput(reglas.textos,e.target,e.target.name);
        break;
        case "apellido":
            validarInput(reglas.textos,e.target,e.target.name);
        break;
        case "telefono":
            validarInput(reglas.numeros,e.target,e.target.name);
        break;
        case "email":
            validarInput(reglas.correo,e.target,e.target.name);
        break;
        case "password":
            validarInput(reglas.password,e.target,e.target.name)
        break;
        default:
            alert("No se ha recibido un evento sobre el input");
        break;
    }
}

campos.forEach((campo)=>{
    campo.addEventListener('keyup',validarCampos)
    campo.addEventListener('blur',validarCampos)
})











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

