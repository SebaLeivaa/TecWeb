function calcularPropina(){
    const inputMonto = document.getElementById("monto");
    const inputPorcentaje = document.getElementById("porcentaje-propina");
    const errorMonto = document.getElementById("error-monto");
    const exitoCalcular = document.getElementById("exito-calcular");
    const propinaSpan = document.getElementById("monto-propina");
    const totalPagoSpan = document.getElementById("total-pago");

    const monto = parseInt(inputMonto.value);
    const porcentaje = parseFloat(inputPorcentaje.value);

    if(monto < 500 || monto > 500000 || isNaN(monto)){
        errorMonto.textContent = "Por favor, ingrese un monto valido!";
        exitoCalcular.textContent = "";
    }else{
        errorMonto.textContent = "";
        exitoCalcular.textContent = "Su propina ha sido calculada exitosamente!";
        const montoPropina = monto*porcentaje;
        const totalPagar = montoPropina + monto;
        propinaSpan.textContent = `$${montoPropina} CLP`;
        totalPagoSpan.textContent = `$${totalPagar} CLP`;
    } 
}

const calcularButton = document.getElementById("calcular");
calcularButton.addEventListener("click", calcularPropina);