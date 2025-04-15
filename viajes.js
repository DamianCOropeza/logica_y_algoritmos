// Módulo de gestión de viajes

// Array para guardar los destinos (constante porque la referencia no cambia)
const destinos = [];

// Destinos disponibles y sus costos base
const DESTINOS_INFO = {
"Paris": 500,
"Londres": 400,
"New York": 600,
"Tokyo": 700,
"Roma": 450,
"Barcelona": 380,
"Cancún": 350
};

// Transportes disponibles y sus costos adicionales
const TRANSPORTES_INFO = {
"Avión": 200,
"Tren": 100,
"Autobús": 50,
"Barco": 150
};

// Función para registrar un destino de viaje (usando arrow function)
const registrarDestino = (destino, fecha, transporte, numPersonas = 1) => {
  // Validar que el destino exista
if (!DESTINOS_INFO[destino]) {
    console.error(`El destino "${destino}" no está disponible`);
    return false;
}

  // Validar que el transporte exista
if (!TRANSPORTES_INFO[transporte]) {
    console.error(`El transporte "${transporte}" no está disponible`);
    return false;
}

  // Crear un objeto con los datos del destino usando sintaxis ES6
const nuevoViaje = {
    destino,
    fecha,
    transporte,
    numPersonas,
    costo: calcularCosto(destino, transporte, numPersonas)
};

destinos.push(nuevoViaje);
return true;
};

// Función para calcular el costo del viaje (usando arrow function)
const calcularCosto = (destino, transporte, numPersonas = 1) => {
  // Obtener costo base del destino
let costoBase = DESTINOS_INFO[destino] || 0;

  // Añadir costo adicional por transporte
costoBase += TRANSPORTES_INFO[transporte] || 0;

  // Multiplicar por el número de personas
  let costoTotal = costoBase * numPersonas;

  // Aplicar descuento si hay más de 2 personas (10% por persona adicional)
if (numPersonas > 2) {
    const descuento = (numPersonas - 2) * 0.1;
    // El descuento máximo será del 25%
    const descuentoFinal = Math.min(descuento, 0.25);
    costoTotal = costoTotal * (1 - descuentoFinal);
}

return Math.round(costoTotal);
};

// Función para mostrar el itinerario (usando arrow function y template literals)
const mostrarItinerario = () => {
console.log("=== ITINERARIO DE VIAJES ===");

if (destinos.length === 0) {
    console.log("No hay viajes registrados");
    return;
}

  // Usar forEach con arrow function en lugar de un ciclo for tradicional
destinos.forEach((viaje, index) => {
    console.log(`\nViaje #${index + 1}`);
    console.log(`Destino: ${viaje.destino}`);
    console.log(`Fecha: ${viaje.fecha}`);
    console.log(`Transporte: ${viaje.transporte}`);
    console.log(`Personas: ${viaje.numPersonas}`);
    console.log(`Costo total: $${viaje.costo}`);
    console.log("---------------------------");
});
};

// Función para buscar viajes por destino
const buscarViajesPorDestino = (destinoBuscado) => {
return destinos.filter(viaje => viaje.destino.toLowerCase() === destinoBuscado.toLowerCase());
};

// Función para obtener información sobre destinos disponibles
const getDestinosDisponibles = () => {
return Object.keys(DESTINOS_INFO);
};

// Función para obtener información sobre transportes disponibles
const getTransportesDisponibles = () => {
return Object.keys(TRANSPORTES_INFO);
};

// Exportar las funciones que serán utilizadas por otros módulos
export {
registrarDestino,
mostrarItinerario,
buscarViajesPorDestino,
getDestinosDisponibles,
getTransportesDisponibles
};