alert("El mejor lugar para solicitar prestamos")
let menu = false
let edad = prompt("por favor, indique su edad")
    if(edad >= 18){
    let edad = alert ("Es mayor de edad, puede continuar")
    menu = true
    }else {
    alert("Error. Debes ser mayor de edad para solicitar un prestamo")
}

if (menu){
    let monto = prompt ("ingrese el monto que desea:")
    let cuotas = prompt ("ingrese la cantidad de cuotas:")
    if (monto <= 0 || cuotas <= 0){
        alert ("por favor, ingrese valores validos")
    }


}