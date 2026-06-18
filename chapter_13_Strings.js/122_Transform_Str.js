let str = "Hello World!  ";
//1. Transform Case
console.log(str.toUpperCase()); // HELLO WORLD!
console.log(str.toUpperCase().length);//14 --> UpperCase/Lowercase doesnt autotrim
console.log(str.toLowerCase()); // hello world!


//2. Trim
//.trim() chops off spaces from both ends at once
console.log(str.trim()); //Hello World!


//trimStart() removes whitespace only from the beginning (left side) of a string.
str.trimStart();


//trimEnd() removes whitespace only from the end (right side) of a string.
str.trimEnd();


//padStart() & padEnd() are used to grow a string until it reaches a specific length.
console.log("5".padStart(3, 0)); //005
console.log("5".padEnd(3, 0)); //500




//3. Replace
let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS")); //Test: PASS. Retry: FAIL.
console.log(msg.replaceAll("FAIL", "PASS")); //Test: PASS. Retry: PASS.
console.log(msg.replace(/FAIL/g, "PASS"));  //Test: PASS. Retry: PASS.
//In older versions of JavaScript, using a regular expression with /g was the only way to replace all occurrences of a word.


//However, modern JavaScript now has a built-in method called replaceAll() which does this automatically using normal strings, without needing regex slashes or the /g flag at all


let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa")); //https://qa.vwo.con?qa=pramod




//4. Concatenation
console.log("Hello" + " " + "World"); //Hello World
console.log("Hello".concat(" ", "World")); //Hello World
console.log(`${"Hello"} ${"World"}`); //Hello World


//5. Split
let r = "pass,fail,skip".split(",");
console.log(r); //[ 'pass', 'fail', 'skip' ]




//6. Join
let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date); //2024-03-07


//7. Split & Join
let rr = "test_login_pass".split("_").join(" ");
console.log(rr); //test login pass