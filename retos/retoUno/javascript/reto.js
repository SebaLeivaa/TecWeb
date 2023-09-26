/*Realizar un programa en JavaScript con lo aprendido en clases
que permita ingresar un número por pantalla y saber si es un
número par o número impar */

//Reto corregido, ya que en un principio permitia numeros decimales como entrada, lo corregi solo cambiando el parseInt por parseFloat

let numero = parseFloat(prompt("Ingrese un numero", 0));
console.log(numero);
if(Number.isInteger(numero) && numero > 0 && numero % 1 === 0){
    if(numero % 2 === 0 ){
        alert(`El numero ${numero} es par`);
    }else{
        alert(`El numero ${numero} es impar`);
    }
}else {
    alert(`El valor ingresado no es un numero entero positivo`);
}


//Asi era como tenia el codigo entregado en horario de clases.

/*
let numero = parseInt(prompt("Ingrese un numero", 0));

if(Number.isInteger(numero) && numero > 0){
    if(numero % 2 === 0 ){
        alert(`El numero ${numero} es par`);
    }else{
        alert(`El numero ${numero} es impar`);
    }
}else {
    alert(`El valor ingresado no es un numero entero positivo`);
}
*/