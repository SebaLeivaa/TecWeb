/* Realizar un programa que permita al usuario ingresar su estatura y peso, para que se
muestre en el navegador su IMC correspondiente. Además de mostrar el IMC, indicar si está
en la categoría de: “Bajo Peso”, “Peso Normal” o “Sobrepeso”.*/

alert("Este es un programa para calcula tu indice de masa corporal (IMC)");

let imc;
let booleanEst = true;
let booleanPes = true;

while(booleanEst){
    let estatura = parseFloat(prompt("Ingrese su estatura en metros: ", "1.75"));
    if(estatura >= 0.35 && estatura <= 2.51){
        booleanEst = false;  
        while(booleanPes){
            let peso = parseFloat(prompt("Ingrese su peso en kilogramos: ", "70"));  
            if(peso >= 3 && peso <= 635){
                booleanPes = false;
                imc = (peso/(estatura ** 2)).toFixed(1); //Se utiliza para aproximar el resultado a un decimal
                if(imc < 18.5){
                    alert(`Tu IMC: ${imc}\nEstado: Bajo Peso`);
                }else if(imc > 24.9){
                    alert(`Tu IMC: ${imc}\nEstado: Sobrepeso`);
                }else{
                    alert(`Tu IMC: ${imc}\nEstado: Normal`);
                }
            }else{
                alert(`Ha ingresado un peso invalido`);
            }
        }
    }else{
        alert(`Ha ingresado una estatura invalida`);
    }
}
