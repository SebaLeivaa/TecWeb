/*Desarrollar un contador de palabras, solicitando al usuario que ingrese una oración, para
luego contar cuántas palabras hay en la oración. Mostrar la palabra ingresada y el número
de palabras en el navegador */
let oracion = prompt("Ingrese una oración: ", "");
let contPalabras = oracion.split(" ").length;
alert(`Oracion: ${oracion} \nPalabras: ${contPalabras}`); 