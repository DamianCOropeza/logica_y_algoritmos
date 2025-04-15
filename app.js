// Aplicación principal
import {
    registrarDestino,
    mostrarItinerario,
    buscarViajesPorDestino,
    getDestinosDisponibles,
    getTransportesDisponibles
} from './viajes.js';

import {
    mostrarDestinosDisponibles,
    mostrarTransportesDisponibles,
    confirmarRegistroViaje,
    mostrarError
} from './ui.js';

  // Función principal para iniciar la aplicación
const iniciarApp = () => {
    console.log("Iniciando Planificador de Viajes v2.0");
    
    // Mostrar opciones disponibles
    const destinos = getDestinosDisponibles();
    const transportes = getTransportesDisponibles();
    
    mostrarDestinosDisponibles(destinos);
    mostrarTransportesDisponibles(transportes);
    
    // Registrar algunos ejemplos de viajes
    console.log("\nRegistrando viajes de ejemplo...");
    
    // Usando valores por defecto (1 persona)
    if (registrarDestino("Paris", "2024-06-15", "Avión")) {
        console.log("Viaje a París registrado");
    }
    
    // Especificando número de personas
    if (registrarDestino("Londres", "2024-07-01", "Tren", 2)) {
        console.log("Viaje a Londres registrado");
    }
    
    // Agregar más viajes con la funcionalidad extendida
    if (registrarDestino("Tokyo", "2024-08-10", "Avión", 3)) {
        console.log("Viaje a Tokyo registrado");
    }
    
    if (registrarDestino("Barcelona", "2024-09-05", "Barco", 4)) {
        console.log("Viaje a Barcelona registrado");
    }
    
    // Intentar registrar un destino no válido
    if (!registrarDestino("Marte", "2025-01-01", "Cohete")) {
        mostrarError("No se pudo registrar el viaje a Marte");
    }
    
    // Mostrar el itinerario de todos los viajes
    mostrarItinerario();
    
    // Buscar viajes por destino
    const viajesTokyo = buscarViajesPorDestino("Tokyo");
    console.log("\nBúsqueda de viajes a Tokyo:", viajesTokyo.length > 0 ? "Encontrados" : "No hay viajes");
};

  // Ejecutar la aplicación
iniciarApp();