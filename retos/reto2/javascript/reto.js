/*Crear un algoritmo capaz de solicitar 3 notas de un alumno por
pantalla y obtener el promedio ponderado. Este promedio
ponderado es de la siguiente forma:
Nota 1 = 40%
Nota 2 = 30%
Nota 3 = 30%
Si el estudiante obtiene un promedio inferior a 3.95 se debe
imprimir por pantalla que ha reprobado la asignatura, si obtuvo
un promedio entre 3.95 a 4.94 el estudiante va a examen. Si la
nota es igual o superior a 4.95 el alumno se exime de la
asignatura.. */

function ingresarNota(input){
    let nota;
    do{
        nota = parseFloat(prompt(input, 4.0));
        if(nota < 1.0 || nota > 7.0 || isNaN(nota)){
            alert("Ha ingresado una nota invalida");
        }
    }while(nota < 1.0 || nota > 7.0 || isNaN(nota))
    return nota;
}

let notaUno = ingresarNota("Ingrese su primera nota: ");
let notaDos = ingresarNota("Ingrese su segunda nota: ");
let notaTres = ingresarNota("Ingrese su tercera nota: ");

let promedio = notaUno*0.4+notaDos*0.3+notaTres*0.3;

if(promedio < 3.95){
    alert(`Lamentablemente ha reprobado la materia!\nHa obtenido un promedio ${promedio.toFixed(2)}`);
}else if(promedio >= 3.95 && promedio <= 4.94){
    alert(`Ha obtenido un promedio ${promedio.toFixed(2)}, se tiene que ir a examen!`);
}else {
    alert(`Felicidades se ha eximido de la asignatura con un promedio final de ${promedio.toFixed(2)}`);
}