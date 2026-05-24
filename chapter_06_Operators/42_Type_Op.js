// Type Operators: typeof and instanceof
// typeof  - returns a string indicating the data type of a value
// instanceof - checks if an object is an instance of a class/constructor

// --- typeof examples ---

let name = "Alice";
let age = 25;
let isActive = true;
let score = null;
let city;
let greet = function () { };
let nums = [1, 2, 3];

console.log(typeof name);      // string
console.log(typeof age);       // number
console.log(typeof isActive);  // boolean
console.log(typeof score);     // object  (known quirk in JS)
console.log(typeof city);      // undefined
console.log(typeof greet);     // function
console.log(typeof nums);      // object  (arrays are objects)
console.log(typeof {});        // object

// typeof with direct literals
console.log(typeof "hello");   // string
console.log(typeof 123);       // int -> number
console.log(typeof 31.4);      // float -> number
// typeof true       -> boolean
// typeof undefined  -> undefined
// typeof null       -> object
// typeof []         -> object
console.log(typeof []);        // object

// Practical use: guard against undefined variables
function printLength(str) {
    if (typeof str === "string") {
        console.log(str.length);
    } else {
        console.log("Not a string");
    }
}
printLength("Playwright"); // 10
printLength(42);            // Not a string

// --- instanceof examples ---

let today = new Date();
let colors = ["red", "green", "blue"];

class Animal {
    constructor(species) {
        this.species = species;
    }
}
let dog = new Animal("Dog");

console.log(today instanceof Date);    // true
console.log(colors instanceof Array);  // true
console.log(dog instanceof Animal);    // true
console.log(colors instanceof Date);   // false

// instanceof also checks up the prototype chain
console.log(dog instanceof Object);    // true  (all objects inherit from Object)
