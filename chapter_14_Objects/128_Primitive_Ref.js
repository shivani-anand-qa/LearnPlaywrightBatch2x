//Primitive vs Reference Types
let a = 10;
let b = a;
b = 99;
console.log(a);// 10 value of a stays same as two new variables are created in memory a and b, nothing is copied by reference


//Objects - copied by REFERENCE, call by ref.
//Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val); //99 as it is copied by reference
