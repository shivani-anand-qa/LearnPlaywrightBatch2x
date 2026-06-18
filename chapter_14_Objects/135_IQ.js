const obj = { a: 1, b: 2, c: 3 };


console.log(Object.keys(obj))//Print keys [ 'a', 'b', 'c' ]
console.log(Object.values(obj))//Print Values [ 1, 2, 3 ]
console.log(Object.entries(obj))//Print key value pairs [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]


const user = { name: "John", age: 30 };
//Oneway to Iterate through key values using for in loop
for (const key in user) {
    console.log(`${key}: ${user[key]}`); //name: John
    age: 30
}

//1 way to Iterate through key values using for in loop Objects.keys.foreach loop -- very rarely or never used
// // Object.keys/values/entries
// Object.keys(user).forEach(key => {
//     console.log(key);
// });


const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj))//Print keys [ 'a', 'b', 'c' ]
console.log(Object.values(obj))//Print Values [ 1, 2, 3 ]
console.log(Object.entries(obj))//Print key value pairs [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const user = { name: "John", age: 30 };
//1 way to Iterate through key values using for in loop
for (const key in user) {
    console.log(`${key}: ${user[key]}`); //name: John
    age: 30
}

//2 way to Iterate through key values using for in loop Objects.keys.foreach loop -- very rarely or never used
// // Object.keys/values/entries
// Object.keys(user).forEach(key => {
//     console.log(key);
// });

//3 way to Iterate through key values using for in loop Objects.entries.foreach loop - very rarely or never used
// Object.entries(user).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });





