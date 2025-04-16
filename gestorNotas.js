const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
* Agrega una nueva nota al archivo.
* @param {string} titulo - el título de la nota
* @param {string} contenido - el contenido de la nota
*/

function agregarNota(titulo, contenido) {
    let notas = [];

    if (fs.existsSync(filePath)) {
    // Leer las notas existentes
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

    // Sobrescribir el archivo con las notas actualizadas
fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
console.log('Nota agregada con éxito.');
}

/**
* Lista todas las notas guardadas.
*/
function listarNotas() {
    if (fs.existsSync(filePath)) {
    // Leer y parsear el contenido del archivo
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    console.log('\n=== NOTAS GUARDADAS ===');
    if (notas.length === 0) {
        console.log('No hay notas guardadas.');
    } else {
        notas.forEach((nota, index) => {
        console.log(`\n[Nota ${index + 1}]`);
        console.log(`Título: ${nota.titulo}`);
        console.log(`Contenido: ${nota.contenido}`);
        });
    }
    console.log('\n======================');
} else {
    console.log('No hay notas guardadas.');
}
}

/**
* Elimina una nota por su título.
* @param {string} titulo - El título de la nota a eliminar.
*/
function eliminarNota(titulo) {
    if (fs.existsSync(filePath)) {
    // Leer todas las notas
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    // Filtrar las notas y eliminar la que coincida con el título
    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    // Comprobar si se eliminó alguna nota
    if (notasRestantes.length === notas.length) {
        console.log(`No se encontró ninguna nota con el título "${titulo}".`);
        return;
    }
    
    // Sobrescribir el archivo con las notas actualizadas
    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
    console.log(`Nota con título "${titulo}" eliminada.`);
} else {
    console.log('No hay notas para eliminar.');
}
}

// Ejecución de ejemplo
console.log('\n--- Agregando una nota nueva ---');
agregarNota('Compras', 'Comprar leche, pan y una vida.');

console.log('\n--- Listando todas las notas ---');
listarNotas();

console.log('\n--- Agregando otra nota ---');
agregarNota('Trabajo', 'Terminar la tarea de calculo.');

console.log('\n--- Listando todas las notas ---');
listarNotas();

console.log('\n--- Eliminando una nota ---');
eliminarNota('Compras');

console.log('\n--- Listando todas las notas después de eliminar ---');
listarNotas();