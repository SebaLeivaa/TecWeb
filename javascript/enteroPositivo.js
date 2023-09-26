/*Crear un algoritmo que solicite al usuario un número entero positivo. Luego, utilizar un
bucle para calcular la suma de todos los números pares desde 1 hasta el número ingresado
por el usuario. Mostrar el resultado en el navegador. */
let numberInt = prompt("Ingrese un numero entero positivo", 0);
let suma = 0;

if(numberInt <= 0){
    alert("El numero ingresado no es un entero positivo");
}else {
    for(let i = 2; i <= numberInt; i+=2){
        suma += i;
    }
    alert(`El resultado de la suma es: ${suma}`);
}
