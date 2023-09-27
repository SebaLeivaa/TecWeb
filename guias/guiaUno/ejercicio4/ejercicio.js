/*Solicitar al usuario que ingrese una serie de números separados por comas. Encontrar y
mostrar el número más grande entre los números ingresados. */

let numeros = prompt("Ingrese una serie de numeros separados por coma: ", "0, 1, 2");

//Se utiliza una expresion regular para verificar la contraseña

const expReg = /^(\d+(,\s*\d+)*)$/;

// \d+ comprueba que al menos haya un digito o mas 
// ,\s* permite que haya una coma seguida de 0 o mas espacios en blanco 
// ? permite que pueda ser vacio tambien

if(expReg.test(numeros)){
    let arr = numeros.split(",");  //Filtra solamente los numeros y lo almacena en un array
    const max = Math.max(...arr); //Utilize el operador de propagacion para sacar los elementos del array y pasarlos como parametros para la funcion Math.max que te calculo el mayor
    alert(`El numero mas grande ingresado es: ${max}`);
}else {
    alert(`Ha ingresado una entrada no valida`);
}