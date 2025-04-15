/**
* Algoritmo de los dos punteros para encontrar invitados que puedan sentarse juntos
* basado en que sus nombres comienzan con la misma letra. Todmado desde el 
* ejemplo dado en el entrgeable, y corregido
*/

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
    // Obtener la inicial de cada nombre (primera letra)
const inicialInicio = arr[inicio][0].toUpperCase();
const inicialSiguiente = arr[siguiente][0].toUpperCase();

    // Comparar las iniciales de los nombres en los punteros
    if (inicialInicio === inicialSiguiente) {
        // Si coinciden, devuelve el par
        return [arr[inicio], arr[siguiente]];
    }
    
    // Avanza los punteros si no coinciden
    inicio++;
    siguiente++;
}

    return null; // Si no se encuentra ningún par
}

// Ejecutar la función y mostrar el resultado
const resultado = encontrarPareja(invitados);
console.log(resultado);
// Resultado esperado: ["Carlos", "Cecilia"]


// Ejemplo adicional con otra lista de invitados
const otrosInvitados = ["Pedro", "Pablo", "Rosa", "Sara", "Samuel", "Teresa"];
console.log(encontrarPareja(otrosInvitados));
// Resultado esperado: ["Sara", "Samuel"]