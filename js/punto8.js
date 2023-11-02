
function parImpar() {
    let numerosInput = document.getElementById('numerosInput').value
    let numeros = numerosInput.split(',')
    let resultado = document.getElementById('resultado')


    for(let i = 0; i < numeros.length; i++){

        let div = document.createElement('div')

        const numeroSpan = document.createElement('span');
        const textoSpan = document.createElement('span');
        
        if(isNaN(numeros[i]) || (numeros[i] - Math.floor(numeros[i]) != 0)){
            
            numeroSpan.textContent = numeros[i];
            textoSpan.textContent = ' no es un número entero'
            textoSpan.className = 'rojo'

        }else if(numeros[i] % 2 == 0){
            numeroSpan.textContent = numeros[i]
            textoSpan.textContent = ' es par'
            textoSpan.className = 'azul'

        }else if(numeros[i] % 2 != 0){
            numeroSpan.textContent = numeros[i]
            textoSpan.textContent = ' es impar'
            textoSpan.className = 'verde'
        }

        div.appendChild(numeroSpan)
        div.appendChild(textoSpan)
        resultado.appendChild(div)
    }
}
