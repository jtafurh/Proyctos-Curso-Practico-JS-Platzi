/*
// Calculo del PA con formulas para un grupo especifico de datos
const lista1 = [100,200,300,500];

// 1. Sumar numeros de la lista1, utilizando el ciclo for
// Ciclo for se ejecuta mientras la variable i sea menor que la cantidad de elementos del array
let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
};
// 2. Dividir la suma obtenida ente la cantidad de elementos del array
const promedioLista1 = sumaLista1 / lista1.length;
*/

//------------------------------------------------------------------------------------------//

/*
//Calculo del PA usando funciones
// La funcion tendra como parametro la "lista" de elementos que se ingrese
function calcularMediaAritmetica(lista){
    let sumaLista = 0;
    // Ciclo for se ejecuta mientras la variable i sea menor que la cantidad de elementos del array
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }
    const promedioLista = sumaLista / lista.length;

    return promedioLista
}
*/

//------------------------------------------------------------------------------------------//

// Calculo del PA usando metodo "reduce()" de array
function calcularPromedioAritmetico(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista
};

//------------------------------------------------------------------------------------------//

/*
// Calculo de la mediana con formulas para un grupo especifico de datos no ordenados
const lista1 = [100,200,500,400000000,5];

// Calculamos la posicion "centarl" 
// Ulitizamos Math.floor para que nos devuelva el entero inferior (recordar que los array empiezan en la posicion 0)
const miatdLista1 = Math.floor(lista1.length / 2); 

// funcion nos determina si el numero ingresado es par o impar
function esPar(numerito){
    if(numerito % 2 ===0){
        return true
    }else{
        return false
    }
}
let mediana;

// Si lista1 es par -> mediana = promedio de los dos elementos centrales
// Sino -> mediana = el elemento central
if (esPar(lista1.length)) {
    const Elemento1= lista1[miatdLista1-1];
    const Elemento2 = lista1[miatdLista1];
    mediana = calcularPromedioAritmetico([Elemento1,Elemento2])
}else{
    mediana = lista1[miatdLista1]; //
}
*/

//------------------------------------------------------------------------------------------//

// Calculo de la mediana con funciones y ordenando los datos
function calcularMediana(lista){
    const listaOrdenada = lista.sort(function(a,b){
        return a-b;
    });
    const mitadLista = Math.floor(listaOrdenada.length / 2); 

    function esPar(numerito){
        if(numerito % 2 ===0){
            return true
        }else{
            return false
        }
    }

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const Elemento1= listaOrdenada[mitadLista-1];
        const Elemento2 = listaOrdenada[mitadLista];
        mediana = calcularPromedioAritmetico([Elemento1,Elemento2])
    }else{
        mediana = listaOrdenada[mitadLista]; //
    }
    return mediana
};

//------------------------------------------------------------------------------------------//

// Calculo de la moda con formulas para un grupo especifico
/*const lista = [1,1,1,1,2,2,2,2,3,3,4]*/
// 1. Determinar cuantas veces se repite cada elemento
// Se crea un objeto cuyos nombres seran los diferentes valores del array y sus valores seran las veces que el valor del array se repite
// SI el elemento existe sumaremos uno a su valor
// SINO creamos el elemento y le asignamos el valor de 1
function calcularModa (lista){
    const listaCount = {};
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    // 2. Determinar cual valor se repite mas veces
    // Se crear un array ordenado con los elementos del objeto
    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]
        }
    );
    // 3. Se encontro la moda
    const moda = listaArray[listaArray.length-1];
    return moda[0]    
}



const listaDatos = [];


function guardarDato(){
    const datoIngresado = document.getElementById("inputDatos");
    const dato = parseInt(datoIngresado.value);
    const masDatos = listaDatos.push(dato)
    console.log(listaDatos)
    if (dato!=""){
        const datoAgregado = document.getElementById("datosGuardados")
        if (datoAgregado.innerText) {
            datoAgregado.innerText = datoAgregado.innerText + ", " + dato;
            document.getElementById("inputDatos").value = "";
        } else {
            datoAgregado.innerText = dato;
            document.getElementById("inputDatos").value = "";
        }
    }
}


function ejecutaCalcularPromedioAritmetico(){
    const promedioAritmetico = calcularPromedioAritmetico(listaDatos);;
    alert(promedioAritmetico)
};
function ejecutaCalcularMediana(){
    const mediana = calcularMediana(listaDatos);;
    alert(mediana)
};
function ejecutaCalcularModa(){
    const moda = calcularModa(listaDatos);;
    alert(moda)
};
