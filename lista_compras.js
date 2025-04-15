// Crear un arreglo vacío para la lista de compras
let listaDeCompras = [];

// Función para agregar un producto
const agregarProducto = (producto) => {
  // Verificar que el producto no exista ya en la lista para evitar duplicados
if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`'${producto}' ha sido agregado a la lista.`);
} else {
    console.log(`'${producto}' ya existe en la lista.`);
}
};

// Función para eliminar un producto
const eliminarProducto = (producto) => {
const indice = listaDeCompras.indexOf(producto);
if (indice !== -1) {
    listaDeCompras.splice(indice, 1);
    console.log(`'${producto}' ha sido eliminado de la lista.`);
} else {
    console.log(`'${producto}' no se encuentra en la lista.`);
}
};

// Función para mostrar toda la lista
const mostrarLista = () => {
if (listaDeCompras.length === 0) {
    console.log("La lista de compras está vacía.");
} else {
    console.log("Lista de compras:");
    listaDeCompras.forEach((producto, indice) => {
        console.log(`${indice + 1}. ${producto}`);
    });
}
};

// Ejemplo de uso
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Huevos");
agregarProducto("Leche"); // Intentar agregar un duplicado
mostrarLista();
eliminarProducto("Pan");
mostrarLista();