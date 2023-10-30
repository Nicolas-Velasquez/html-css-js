
function nombreEdad(){
 let nombre = document.getElementById('nombre').value
 let edad = document.getElementById('edad').value

 if(edad <= 0 || isNaN(edad)){
    document.getElementById("resultado").innerHTML = "No es una edad válida."

}else if(edad >= 18){
document.getElementById("resultado").innerHTML = "Hola " + nombre + ", eres mayor de edad."

}else{
document.getElementById("resultado").innerHTML = "Hola " + nombre + ", no eres mayor de edad."
}
}