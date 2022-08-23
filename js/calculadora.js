function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;
    if(op==1){
        let sum=num1+num2;
        alert(`Los numeros digitados son ${num1} y ${num2}.
        El resultado de la operacion es ${sum}`);
    }else if(op==2){
      let res=num1-num2;
      alert(`Los numeros digitados son ${num1} y ${num2}.
      El resultado de la oparacion es ${res}`)
    }else if(op==3){
      let mult=num1*num2;
      alert(`Los numeros digitados son ${num1} y ${num2}.
      El resultado de la oparacion es ${mult}`)
    }else if(op==4){
      let div=num1/num2;
      alert(`Los numeros digitados son ${num1} y ${num2}.
      El resultado de la oparacion es ${div}`)
    }else{
      alert(`La opcion Elegida no es valida, Por favor vuelva
      a elegir una operacion valida`)
    }
}