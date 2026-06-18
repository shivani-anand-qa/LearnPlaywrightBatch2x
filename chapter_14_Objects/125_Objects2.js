//Objects
//Key and value

let student1 = { name: "Samie", age: 45 };
let student2 = { name: "Shivani" };
let student3 = { name: "Shivani", age: 87, phone: 9876543210 };


//key will not be in the doubt quotes


//below key in double quotes is actually JSON
let JSON_student4 = { "name": "Shivani", "age": 35, "phone": 9876543210 };


let a = { status: "pass" };
console.log(a.status); //pass
console.log(a["status"]); //pass



let b = a;
b.status = "fail";
console.log(b.status); //fail
console.log(a.status); //fail value of a will also change


if (b === a) {
    console.log("true");
} else {
    console.log("false");
}


//true as its the copy of reference pointing to same object in the memory
