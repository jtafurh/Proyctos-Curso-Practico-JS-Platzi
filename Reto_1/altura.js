function alturaTriangulo(a, b, c){
    if(a==b && a!= c){
        const x =Math.sqrt((a*a)-((c/2)*(c/2)));
        if (isNaN(x)){
            return 'El triangulo no existe'
        }
        return x
    }else if(a==0 || b==0 || c==0){
        return 'Ingresa un valor valido'
    }else if(a==c && a != b){
        return Math.sqrt((a*a)-((b/2)*(b/2)))
    }else if(b==c && b != a){
        return Math.sqrt((b*b)-((a/2)*(a/2)))
    }else if(a==b && a==c){
        return Math.sqrt((a*a)-((c/2)*(c/2)))
    }else if(a != b && b != c){
        const z="El triangulo no es isósceles";
        return z
    }
};



function calcularAltura() {
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputLado3");

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const altura = alturaTriangulo(value1,value2,value3);
    alert(altura)
};
