
function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioDescuento = (100-descuento);
    const precioConDescuento = (precio*porcentajePrecioDescuento)/100;

    return precioConDescuento
};

function ejecutarCalcularPrecioConDescuento(){
    const precio = document.getElementById("ImputPrecio");
    const precioValue = precio.value;
    
    const descuento = document.getElementById("InputDescuento");
    const descuentoValue = descuento.value;

    const precioConDescuento = calcularPrecioConDescuento(precioValue,descuentoValue);

    const resultadoPrecio = document.getElementById("resultadoDelDescuento");
    resultadoPrecio.innerText = "Este es el precio con descuemto: $" + precioConDescuento;
};