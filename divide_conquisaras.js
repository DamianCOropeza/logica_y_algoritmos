function findMax(arr) {
    // Caso si el arreglo tiene un solo elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }

    //si el arreglo tiene dos elementos, retornamos el mayor
    if (arr.length === 2) {
        return Math.max(arr[0], arr[1]);
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax);
}

// Ejemplo de entrada
const numbers = [9, 99, 999, 1000, 1009, 9999];
    console.log(findMax(numbers)); // Salida esperada: 9999