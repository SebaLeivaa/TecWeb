function calcularImc(){
    const inputNombre = document.getElementById("nombre");
    const inputPeso = document.getElementById("peso");
    const inputAltura = document.getElementById("altura");
    const inputEdad = document.getElementById("edad");
    const inputActividad = document.getElementById("actividad");
    const nombreSpan = document.getElementById("nombre-resultado");
    const imcSpan = document.getElementById("imc-resultado");
    const clasiSpan = document.getElementById("clasi-resultado");
    const gastoSpan = document.getElementById("gasto-resultado");
    const estadoSpan = document.getElementById("estado-resultado");
    const resultadoCalcular = document.getElementById("resultado-calcular");

    const nombre = inputNombre.value;
    const peso = parseFloat(inputPeso.value).toFixed(1);
    const altura = parseFloat(inputAltura.value).toFixed(2);
    const edad = parseInt(inputEdad.value);
    const actividad = inputActividad.value;
    const imc = (peso/(altura**2)).toFixed(2);
    const gasto = (actividad * peso).toFixed(2);
    let validacion = false;

    if(peso >=30 && peso <= 150 && altura >= 1.30 && altura <= 2.3 && edad >= 3 && edad <= 100){
        validacion = true;
        nombreSpan.textContent = nombre;
    }

    if(imc < 18.5 && validacion){
        resultadoCalcular.textContent = "Su IMC ha sido calculado exitosamente!";
        resultadoCalcular.style.display = "block";
        imcSpan.textContent = imc;
        clasiSpan.textContent = `Bajo peso`;
        gastoSpan.textContent = `${gasto} kcal`;
        estadoSpan.textContent = `Necesita atención especializada`;
    } else if(imc >=18.5 && imc < 25 && validacion){
        resultadoCalcular.textContent = "Su IMC ha sido calculado exitosamente!";
        resultadoCalcular.style.display = "block";
        imcSpan.textContent = imc;
        clasiSpan.textContent = `Normal`;
        gastoSpan.textContent = `${gasto} kcal`;
        estadoSpan.textContent = `Adecuado`;
    } else if(imc >= 25 && imc < 30 && validacion){
        resultadoCalcular.textContent = "Su IMC ha sido calculado exitosamente!";
        resultadoCalcular.style.display = "block";
        imcSpan.textContent = `${imc}`;
        clasiSpan.textContent = `Sobrepeso`;
        gastoSpan.textContent = `${gasto} kcal`;
        estadoSpan.textContent = `Necesita atención especializada`;
    } else if(imc >=30 && validacion){
        resultadoCalcular.textContent = "Su IMC ha sido calculado exitosamente!";
        resultadoCalcular.style.display = "block";
        imcSpan.textContent = `${imc}`;
        clasiSpan.textContent = `Obesidad`;
        gastoSpan.textContent = `${gasto} kcal`;
        estadoSpan.textContent = `Necesita atención especializada`;
    }else {
        resultadoCalcular.textContent = "Por favor ingrese datos válidos!";
        resultadoCalcular.style.display = "block";
    }
}

const calcularButton = document.getElementById("calcular");
calcularButton.addEventListener("click", calcularImc);

//Mostrar mensaje de error para el peso

const errorInputPeso = document.getElementById("peso");
const errorPeso = document.getElementById("error-peso");

errorInputPeso.addEventListener("input", () => {
    const validarPeso = errorInputPeso.value;
    if(validarPeso < 30 || validarPeso > 150){
        errorPeso.style.display = "block";
    }else {
        errorPeso.style.display = "none";
    }
});

//Mostrar mensaje error para la altura

const errorInputAltura = document.getElementById("altura");
const errorAltura = document.getElementById("error-altura");

errorInputAltura.addEventListener("input", () => {
    const validarAltura = errorInputAltura.value;
    if(validarAltura < 1.3 || validarAltura > 2.3){
        errorAltura.style.display = "block";
    }else {
        errorAltura.style.display = "none";
    }
});

//Mostrar mensaje error para la edad

const errorInputEdad = document.getElementById("edad");
const errorEdad = document.getElementById("error-edad");

errorInputEdad.addEventListener("input", () => {
    const validarEdad = errorInputEdad.value;
    if(validarEdad < 3 || validarEdad > 100){
        errorEdad.style.display = "block";
    } else {
        errorEdad.style.display = "none";
    }
});