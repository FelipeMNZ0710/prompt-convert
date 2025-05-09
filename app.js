// Tasa de cambio fija
const tasaCambio = 150; // ARS a USD
let history = []; // Array para guardar las operaciones

// Función para convertir ARS a USD
function convertCurrency(pesos) {
return pesos / tasaCambio;
}

// Función para mostrar el menú y obtener la opción del usuario
function mostrarMenu() {
let opcion;
do {
    opcion = prompt(
    "1) Divisa (ARS -> USD)\n2) Salir\nElige una opción:"
    );
    if (opcion === null) { // Handle Cancelar
      return "2"; // Tratar Cancelar como "Salir"
    }
    if (opcion !== "1" && opcion !== "2") {
    alert("Opción inválida. Por favor, elige 1 o 2.");
    }
} while (opcion !== "1" && opcion !== "2");
return opcion;
}

// Función para validar la entrada de la cantidad
function validarCantidad(entrada) {
  if (entrada === null) { // Handle Cancelar
    return null;
}
let numero = parseFloat(entrada);
if (isNaN(numero) || numero <= 0) {
    return null;
}
return numero;
}

// Conversión y guardado de la operación
function realizarConversion() {
let pesos = validarCantidad(prompt("Ingresa la cantidad en ARS:"));
if (pesos !== null) {
    let dolares = convertCurrency(pesos);
    let operacion = {
    tipo: "divisa",
    entrada: `${pesos} ARS`,
    salida: `${dolares.toFixed(2)} USD`,
    fecha: new Date().toLocaleString(),
    };
    history.push(operacion);
    alert(`${pesos} ARS son ${dolares.toFixed(2)} USD`);
} else {
    alert("Cantidad inválida. Ingresa un número mayor que cero.");
}
}

//El historial en la consola
function mostrarHistorial() {
console.log("Historial de Operaciones:");
if (history.length === 0) {
    console.log("No hay operaciones registradas.");
} else {
    history.forEach(operacion => console.log(operacion));
}
}

// Flujo principal de la aplicación
let opcion;
do {
opcion = mostrarMenu();
if (opcion === "1") {
    realizarConversion();
}
} while (opcion !== "2");

mostrarHistorial();