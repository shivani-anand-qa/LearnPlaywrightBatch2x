// Ternary Operator: condition ? valueIfTrue : valueIfFalse
// It is a shorthand for if-else

let peter_age = 18;
let peter_will_go = peter_age >= 18 ? "Peter will go goa" : "Will not go Goa";
console.log(peter_will_go)

let a = 10;
a += 10;
// a =-10; this doesn't decrement, simply assigning -10

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);  // ✅ PASS
//emoji from https://emojipedia.org/check-mark-button

let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");



let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);


//  Nested Ternary

// Multiple Condition
let age = 26;
let is_pramod_goa = age > 26 ? "Yes, he will go" : "No, he will not go";
console.log(is_pramod_goa);



let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "NO GOA";
console.log(is_pramod_d);


/// --------------------

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);


// ---- 

let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("Temperature:", temp, "| Feel:", feel);



let age2 = 20;
// Using if-else
if (age2 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Same logic using ternary operator
let result = age2 >= 18 ? "Adult" : "Minor";
console.log(result); // Adult

// Example 2: Check if a number is even or odd
let num = 7;
let evenOdd = num % 2 === 0 ? "Even" : "Odd";
console.log(evenOdd); // Odd

// Example 3: Nested ternary (use sparingly — hard to read)
let marks = 75;
let grade = marks >= 90 ? "A" : marks >= 60 ? "B" : "C";
console.log(grade); // B

// Example 4: Maximum number between two numbers, okay, by using the ternary operator 
let num1 = 75;
let num2 = 90
let maxno = num1 > num2 ? num1 : num2;
console.log(maxno);

// Example 5: maximum between the three numbers also by using turnery over  
let num3 = 100;
let max = num1 > num2 ? num1 : (num2 > num3 ? num2 : num3);
console.log(max);
