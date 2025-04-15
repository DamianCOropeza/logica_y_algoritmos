// Lista de regalos con funcion recursiva a partir del ejemplo dado

const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función recursiva para buscar un regalo en la lista
function findGift(gifts, giftName, index = 0) {

    // Caso 1: Si llegamos al final de la lista
if (index === gifts.length) {
    return `${giftName} no está en la lista.`;
}

// Caso 2: Si encontramos el regalo
if (gifts[index] === giftName) {
    return `${giftName} está en la posición ${index}.`;
}

// Llamada recursiva para seguir buscando el regalo
return findGift(gifts, giftName, index + 1);
}

// Casos de ejemplo:
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Lego está en la posición 3."

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Camión no está en la lista."