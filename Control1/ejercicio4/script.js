function calculoIva(precio, iva){ 
    if(isNaN(iva)){
        iva = 19;
    }
    let total = precio + precio * (iva/100);
    alert(`El total de la factura es: ${total}`);
}


let inputMonto = parseInt(prompt("Ingrese un monto: "));
let inputIva = parseInt(prompt("Ingrese el porcentaje de IVA:"));

calculoIva(inputMonto, inputIva);
