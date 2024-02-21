function verificarEdad (edad){
    return edad >= 18;
}

function valores (monto, cuotas){
    return monto > 0 && cuotas > 0;
}

function calcularIntereses (monto, cuotas){
    const tasaInteresAnual = 0.1;
    const totalItereses = monto * tasaInteresAnual * cuotas;
    return totalItereses
}

do{
    alert ("El mejor lugar para solicitar un prestamo");

    let menu = false
    let edad = prompt ("Por favor, indique su edad");

    if (verificarEdad(edad)){
        alert("Es mayor de edad, puede continuar");
        menu = true
    } else{
        alert ("Error. Debes ser mayor de edad para solicitar un prestamo")
    }
    if (menu){
        let monto;
        let cuotas;
        do{
            monto = prompt ("Ingrese el monto que desea:");
            cuotas = prompt ("Ingrese la cantidad de cuotas");
        }while (!valores(monto, cuotas));
        const interes = calcularIntereses (parseInt(monto), parseInt (cuotas));
    
        const montoTotal = parseInt(monto) + interes;
        
        alert (`El interés total del préstamo es: ${interes}`);
        
        alert (`El monto total del préstamo es: ${montoTotal}`);
    
        const continuar = confirm("¿Desea realizar otra operación?")
        if (!continuar){
            alert ("gracias por usar nuestra plataforma. Que tenga buen dia");
            break;
    }
    }
}while (true);
