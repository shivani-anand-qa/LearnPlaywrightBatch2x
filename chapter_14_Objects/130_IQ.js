//Question
const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};


console.log(user); //{ name: 'John', age: 30, email: 'john@example.com' }
console.log(user.name); //John
console.log(user["age"]); //30




// Dynamic property access
const key = "age";
console.log(user[key]);




// Adding/modifying properties -//Objects are dynamic in nature and can be changed/modified
user.city = "NYC";
user.age = 31;


console.log(user);


//Property Decriptor - Never used - we can get the properties of key or value
let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }
