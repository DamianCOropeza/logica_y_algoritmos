function findLongestWord(text) {
// Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga

    // Recorrer el arreglo de palabras con un ciclo
    for (let i = 0; i < words.length; i++) {
    // Limpiar la palabra de posibles signos de puntuación
        const cleanWord = words[i].replace(/[,.!?;:]/g, '');

    // Comparar la longitud de la palabra actual con la más larga
        if (cleanWord.length > longestWord.length) {

            // Actualizar la palabra más larga
            longestWord = cleanWord;
        }
    }
    
    // Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";

// Llamar a la función y mostrar el resultado
    console.log(findLongestWord(text)); // Resultado esperado: "programación"