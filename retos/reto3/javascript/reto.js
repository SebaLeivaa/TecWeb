function calcularPropina(){
    const inputMonto = document.getElementById("monto");
    const inputPorcentaje = document.getElementById("porcentaje-propina");
    const errorMonto = document.getElementById("error-monto");
    const errorMonto2 = document.getElementById("error-monto2");
    const exitoCalcular = document.getElementById("exito-calcular");
    const propinaSpan = document.getElementById("monto-propina");
    const totalPagoSpan = document.getElementById("total-pago");

    const monto = parseInt(inputMonto.value);
    const porcentaje = parseFloat(inputPorcentaje.value);

    if(monto < 500 || monto > 500000 || isNaN(monto)){
        errorMonto.textContent = "Por favor, ingrese un monto valido!";
        errorMonto2.textContent = "Su monto debe estar entre $500 a $500000.";
        exitoCalcular.textContent = "";
    }else{
        errorMonto.textContent = "";
        errorMonto2.textContent = "";
        exitoCalcular.textContent = "Su propina ha sido calculada exitosamente!";
        const montoPropina = Math.round( monto*porcentaje);
        const totalPagar = montoPropina + monto;
        propinaSpan.textContent = `$${montoPropina} CLP`;
        totalPagoSpan.textContent = `$${totalPagar} CLP`;
    } 
}

const calcularButton = document.getElementById("calcular");
calcularButton.addEventListener("click", calcularPropina);