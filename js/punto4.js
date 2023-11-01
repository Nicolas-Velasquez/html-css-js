
function notas(){
    let nombre = document.getElementById('nombre').value
    let materia = document.getElementById('materia').value
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let nota3 = Number(document.getElementById('nota3').value)

    let texto1Resultado = document.getElementById('texto1Resultado')
    let notaResultado = document.getElementById('notaResultado')
    let texto2Resultado = document.getElementById('texto2Resultado')

    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        document.getElementById('resultado').innerHTML = 'Debe ingresar notas válidas'
    }

    let promedio = (nota1 + nota2 + nota3) / 3
    promedio = promedio.toFixed(2)

    if(promedio < 3){
        texto1Resultado.textContent = 'Lo siento '+ nombre +', '
        notaResultado.textContent = ' su nota es '+ promedio
        notaResultado.className = 'rojo'
        texto2Resultado.textContent = ', no pasaste la materia ' + materia
    }else{
        texto1Resultado.textContent = 'Felicidades '+ nombre +', '
        notaResultado.textContent = ' su nota es '+ promedio
        notaResultado.className = 'verde'
        texto2Resultado.textContent = ', pasaste la materia ' + materia
    }
}
