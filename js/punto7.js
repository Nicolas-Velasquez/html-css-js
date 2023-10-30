
function validarDivision(){
 let dividendo = document.getElementById('dividendo').value
 let divisor = document.getElementById('divisor').value

if(isNaN(dividendo)){
    document.getElementById('resultado').innerHTML = "El dividendo ingresado no es un número"
    return
} else if(isNaN(divisor)){
    document.getElementById('resultado').innerHTML = "El divisor ingresado no es un número"
    return
}

 let funDividen = validarEnteroPositivo(dividendo)
 let funDivisor = validarEnteroPositivo(divisor)

 if(funDividen == true || funDivisor == true){
    return
 }

 if(divisor == 0){
    document.getElementById('resultado').innerHTML = "El divisor debe ser diferente de 0"
    return
 }

 dividendo % divisor == 0?
    document.getElementById('resultado').innerHTML = dividendo + " es divisible entre " + divisor:
    document.getElementById('resultado').innerHTML = dividendo + " no es divisible entre " + divisor
}

function validarEnteroPositivo(num){

    if((num < 0) && (num - Math.floor(num) != 0)){
        document.getElementById('resultado').innerHTML = "El número " + num + " no es entero positivo"
        return true
    
    }else if(num < 0){
        document.getElementById('resultado').innerHTML = "El número " + num + " no es positivo"
        return true
    
    }else if(num - Math.floor(num) != 0){
        document.getElementById('resultado').innerHTML = "El número " + num + " no es entero"
        return true
    }
    return false
}