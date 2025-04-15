// Para crear un arreglo de objetos con al menos 5 productos
const productos = [
    { nombre: "Auriculares Bluetooth", precio: 59.99, categoria: "Electrónica" },
    { nombre: "Monitor LED 24 pulgadas", precio: 149.99, categoria: "Computación" },
    { nombre: "Teclado mecánico", precio: 89.99, categoria: "Computación" },
    { nombre: "Mouse inalámbrico", precio: 29.99, categoria: "Computación" },
    { nombre: "Disco duro externo 1TB", precio: 79.99, categoria: "Almacenamiento" },
    { nombre: "Smartphone Modelo X", precio: 299.99, categoria: "Telefonía" },
    { nombre: "Cargador USB-C", precio: 19.99, categoria: "Accesorios" }
];

  // Usar filter() para obtener productos con precio menor a $100
const productosBajosPrecio = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a $100:");
console.log(productosBajosPrecio);

  // sort() para ordenar los productos filtrados alfabéticamente por nombre
const productosOrdenados = [...productosBajosPrecio].sort((a, b) => 
    a.nombre.localeCompare(b.nombre)
);
console.log("\nProductos ordenados alfabéticamente:");
console.log(productosOrdenados);

  //map() para generar un arreglo con solo los nombres de los productos
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("\nLista de nombres de productos:");
console.log(nombresProductos);

  // Aquí se incluyeron métodos adicionales pq soy bien pro

  //reduce() para calcular el valor total de todos los productos
const valorTotal = productos.reduce((total, producto) => total + producto.precio, 0);
console.log(`\nValor total de todos los productos: $${valorTotal.toFixed(2)}`);

  //some() para verificar si hay algún producto de cierta categoría
const hayElectronica = productos.some(producto => producto.categoria === "Electrónica");
console.log(`\n¿Hay productos de electrónica? ${hayElectronica ? "Sí" : "No"}`);

  //every() para verificar si todos los productos cuestan más de $10
const todosMayorA10 = productos.every(producto => producto.precio > 10);
console.log(`\n¿Todos los productos cuestan más de $10? ${todosMayorA10 ? "Sí" : "No"}`);

  //find() para encontrar el primer producto de computación
const primerProductoComputacion = productos.find(producto => producto.categoria === "Computación");
console.log("\nPrimer producto de computación encontrado:");
console.log(primerProductoComputacion);

  //includes() para verificar si cierto producto está en la lista de nombres
const buscaNombre = "Mouse inalámbrico";
console.log(`\n¿La lista contiene "${buscaNombre}"? ${nombresProductos.includes(buscaNombre) ? "Sí" : "No"}`);

  //findIndex() para encontrar la posición de un producto por su nombre
const posicionTeclado = productos.findIndex(producto => producto.nombre === "Teclado mecánico");
console.log(`\nLa posición del teclado mecánico en el arreglo original es: ${posicionTeclado}`);