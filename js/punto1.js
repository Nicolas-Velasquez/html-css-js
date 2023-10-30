
function contar(){
 let texto = document.getElementById('texto').value
 let longitud = texto.length
 document.getElementById('resultado').innerHTML = '"' + texto + '" ' + ' tiene ' + longitud + ' caracteres'
}