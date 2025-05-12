function menu() {
    let opcion = prompt("Seleccione una opción:\n\n1) Divisa (ARS -> USD)\n2) Salir");
    while (opcion !== "1" && opcion !== "2") {
        opcion = prompt("Opción inválida. Por favor, seleccione una opción válida.");
    }
    if (opcion === "1") {
        convertCurrency();
    } else if (opcion === "2") {
        imprimirHistorial();
    }
}

function convertCurrency() {
    const DOLAR_BLUE_EN_ARS = 1175
    let pesos = prompt("Ingrese la cantidad en ARS:");
    while (!/^\d+$/.test(pesos)) {
        pesos = prompt("Valor inválido. Por favor, ingrese un número entero.");
    }
    
    if (parseFloat(pesos) > 1000000) {
        alert("La cantidad ingresada es demasiado grande");
    } else {
        let resultado = parseFloat(pesos) / DOLAR_BLUE_EN_ARS;
        alert(`La conversión de ${pesos} ARS es igual a ${resultado.toFixed(2)} USD`);
        registrarOperacion(pesos, resultado);
    }
}


function imprimirHistorial() {
    let texto = "";
    for (let i = 0; i < history.length; i++) {
        texto += `Tipo: ${history[i].tipo}\n`;
        texto += `Entrada: ${history[i].entrada}\n`;
        texto += `Salida: ${history[i].salida}\n`;
        texto += `Fecha: ${history[i].fecha}\n\n`;
    }
    alert(texto);
}

function registrarOperacion(pesos, resultado) {
    history.push({
        tipo: 'divisa',
        entrada: pesos + ' ARS',
        salida: resultado.toFixed(2) + ' USD',
        fecha: new Date().toLocaleString()
    });
}

let history = [];

window.onload = function() {
    menu();
}
