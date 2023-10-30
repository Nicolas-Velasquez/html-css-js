
function validarNum(){
    let numero = document.getElementById('numero').value

    if(isNaN(numero)){
        document.getElementById('resultado').innerHTML = "No es un número"

    }else if((numero < 0) && (numero - Math.floor(numero) != 0)){
        document.getElementById('resultado').innerHTML = "El número debe ser entero y positivo"

    }else if(numero < 0){
        document.getElementById('resultado').innerHTML = "El número debe ser positivo"

    }else if(numero - Math.floor(numero) != 0){
        document.getElementById('resultado').innerHTML = "El número debe ser entero"

    }else if(numero % 2 === 0){
        document.getElementById('resultado').innerHTML = numero + " es un número par"

    }else if(numero % 2 !== 0){
        document.getElementById('resultado').innerHTML = numero + " es un número impar"
    }
    console.log(numero)
}