
function validar(){
    let dato = document.getElementById('dato').value
    
    isNaN(dato)?
    document.getElementById("resultado").innerHTML = '"' + dato + '" ' + ' es texto':
    document.getElementById("resultado").innerHTML = dato + ' es un número'
}