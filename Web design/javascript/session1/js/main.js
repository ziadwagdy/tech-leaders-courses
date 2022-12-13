// Data-types 
// For search : difference between var / let.
// undefined, a vriable isn't declared
// console.log(typeof (x));

// undefined,  variable is declared, but not initilized
let x;
console.log(typeof (x));

x = 5;
console.log(typeof (x));

// String "" or ''
let message = 'hello world';
// console.log(typeof message);
console.log(message[0]);

message[0] = 'K'; // wrong, string is mutable!
console.log(message[0]);

let product = {
    name: "Iphone 13",
    price: 700,
    address: {
        building: 32,
        street: '13 california'
    }
}

console.log('name' in product);
console.log(product.price);
console.log(product.address.building);

// Array -> methods
let myArray = ['Number 1', 1, true, product]
console.log(myArray[3].name);

// using Array() constructor rarely!
// let array = new Array('Number 1', 1, true, product);


// DOM -> Document Object Model.
// Document -> HTML document.
// console.log(document);
// get the paragraph buy its id 
const p = document.getElementById("my-parag");
p.style.color = "red";
console.log(p);