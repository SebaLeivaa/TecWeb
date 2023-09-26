/*Realizar un programa en JavaScript con lo aprendido en clases
que permita ingresar un número por pantalla y saber si es un
número par o número impar */
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

