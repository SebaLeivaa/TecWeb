/*Crear un programa que pida al usuario una contraseña. Luego, verificar si la contraseña
ingresada cumple con ciertos criterios, como tener al menos 8 caracteres, incluir al menos
una letra mayúscula y un número. Mostrar un mensaje en el navegador indicando si la
contraseña es válida o no. */

//Se utiliza una expresion regular para verificar la contraseña

let password = prompt("Ingrese una contraseña: ", "");

//?=.*[A-Z] comprueba que exista al menos una letra en mayuscula
//?!.*\s comprueba que no hayan espacios en blanco entre la contraseña
//?=.*\d comprueba que exista al menos un numero 
//.{8,} permite que al menos esten presentes 8 caracteres en la contraseña
// ^ y $ significan inicio y fin de la cadena respectivamente

const expReg = /^(?=.*[A-Z])(?!.*\s)(?=.*\d).{8,}$/;

if(expReg.test(password)){        //Se utiliza el metodo .test para comprobar la contraseña
    alert(`La contraseña ingresada es valida`);
}else {
    alert(`La contraseña ingresada no es valida`);
}


