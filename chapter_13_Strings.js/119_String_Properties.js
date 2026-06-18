console.log(typeof ("200")); //String
console.log(typeof (200)); //Number


let str = "Hello World!";
console.log(str.length); //Length always starts from 1, and index from 0 = 12


//Access by index
console.log(str[0]); //H
console.log(str[7]); //o
console.log(str.at[-1]); //undefined as we need () instead of []
console.log(str.at[-6]); //undefined
//at() supports negative indexing:
//str.at(-1) → last character
//str.at(-2) → second last


console.log(str.at(-1)); //!
console.log(str.at(-6)); //W


// index = 0, length = 1
console.log(str.charAt(0)); //H
console.log(str.charCodeAt(0)); //72




