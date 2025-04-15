console.log(suma(5,99));
console.log(generarMensajeSaludo("Damian"));

const array = [1,2,3,4,5,6,7,8,9];

const newArray = array.map((item, index) => {
    return item**item;
})

console.log(newArray);

const forEachResult = newArray.forEach((item) => {
    console.log(item);
})

console.log(forEachResult);

const miDiv = document.querySelector(".mi-div");
miDiv.innerHTML("befreend", `
    <p>Este elemento p ha sido insertado utilizando JS</p>
    `)



const frutas = ["fresa", "kiwi", "uva"];
const miFrtutaFav = frutas.find((elemento)=> elemento === "uva");

console.log(miFrtutaFav);

frutas.shift();
frutas.unshift("pera");
frutas.pop();
frutas.push("sandia");
console.log(frutas, frutas.length);


