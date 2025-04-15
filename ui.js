// Módulo de interfaz de usuario

// Función para mostrar los destinos disponibles al usuario
const mostrarDestinosDisponibles = (destinos) => {
    console.log("=== DESTINOS DISPONIBLES ===");
    destinos.forEach(destino => console.log(`- ${destino}`));
    console.log("===========================");
};

  // Función para mostrar los transportes disponibles al usuario
const mostrarTransportesDisponibles = (transportes) => {
    console.log("=== TRANSPORTES DISPONIBLES ===");
    transportes.forEach(transporte => console.log(`- ${transporte}`));
    console.log("==============================");
};

  // Función para mostrar un mensaje de confirmación después de registrar un viaje
const confirmarRegistroViaje = (destino, fecha, transporte, numPersonas, costo) => {
    console.log("\n¡Viaje registrado con éxito!");
    console.log(`Destino: ${destino}`);
    console.log(`Fecha: ${fecha}`);
    console.log(`Transporte: ${transporte}`);
    console.log(`Personas: ${numPersonas}`);
    console.log(`Costo estimado: $${costo}`);
};

  // Función para mostrar un error
const mostrarError = (mensaje) => {
    console.error(`ERROR: ${mensaje}`);
};

  // Exportar las funciones
export {
    mostrarDestinosDisponibles,
    mostrarTransportesDisponibles,
    confirmarRegistroViaje,
    mostrarError
};