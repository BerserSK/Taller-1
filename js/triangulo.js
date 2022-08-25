function triangular(){
    let lado1=parseInt(document.getElementById("lado1").value);
    let lado2=parseInt(document.getElementById("lado2").value);
    let lado3=parseInt(document.getElementById("lado3").value);
    if(lado1 == lado2 && lado1 == lado3){
        alert("El triangulo es de tipo Equilatero");
    }else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
        alert("El triangulo es de tipo Escaleno");
    }else{
        alert("El triangulo es de tipo Isoceles");
    }
}