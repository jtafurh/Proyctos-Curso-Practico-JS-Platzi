function perimetroCuadrado(lado){
    return lado*4
};
function areaCuadrado(lado){
    return lado*lado
};
function perimetroTriangulo(lado1, lado2, base){
    const perimetro = lado1+lado2+base;
    return perimetro
};
function areaTriangulo(base, altura){
    return (base*altura)/2;
};
function perimetroCirculo(radio){
    return (2*(Math.PI))*radio
};
function areaCirculo(radio){
    return (Math.PI)*(radio*radio)
};

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
};
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area)
};
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    const perimetroT = perimetroTriangulo(value1, value2, value3);
    alert(perimetroT)
};
function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTrianguloBase");
    const input2 = document.getElementById("InputTrianguloAaltura");
    const value1 = input1.value;
    const value2 = input2.value;
    const areaT = areaTriangulo(value1,value2);
    alert(areaT)
};

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetroC = perimetroCirculo(value);
    alert(perimetroC)
};
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const areaC = areaCirculo(value);
    alert(areaC)
};