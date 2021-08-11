// Para validar si el cupon es valido

function validarCupon(cupon){
    
    if(cupon==="promo5"){
        return "Cupon valido"
    }else if(cupon=="promo20"){
        return "Cupon valido"
    }else if(cupon=="promo50"){
        return "Cupon valido"
    }else{
        return "Cupon invalido"
    }
};

// Para calcular el precio con cupon
function calcularPrecioConCupon(precio,cupon){
    if(cupon==="promo5"){
        cupon = 5;
        const precioConCupon = precio*(100-cupon)/100;
        return precioConCupon
    }else if(cupon==="promo20"){
        cupon = 20;
        const precioConCupon = precio*(100-cupon)/100;
        return precioConCupon
    }else if(cupon==="promo50"){
        cupon = 50;
        const precioConCupon = precio*(100-cupon)/100;
        return precioConCupon
    }else{
        return precio
    }
};

// Interaccion del boton "Validar cupon"
function ejevutarValidarCupon(){
    const cupon = document.getElementById("InputCupon");
    const tipoCupon = cupon.value
    const validacionCupon = validarCupon(tipoCupon);

    const resultadoValidacion  = document.getElementById("validacionCupon");

    resultadoValidacion.innerText = validacionCupon;
};

// Interaccion del boton "Calcular precio con cupon"
function ejecutarCalcularPrecioConCupon(){
    const precio = document.getElementById("ImputPrecio");
    const precioValue = precio.value;
    
    const Cupon = document.getElementById("InputCupon");
    const CuponValue = Cupon.value;

    const precioConCupon = calcularPrecioConCupon(precioValue,CuponValue);

    const resultadoPrecio = document.getElementById("resultadoDelDescuento");
    resultadoPrecio.innerText = "Este es el precio con descuemto: $" + precioConCupon;
};
