//Searching & checking
let url = "https://staging.vwo.com/api/login?retry=true";


//includes
console.log(url.includes("staging")); //true
console.log(url.includes("production")); //false


//startsWith / EndsWith
console.log(url.startsWith("https"));//true
console.log(url.startsWith("http://")); //false
console.log(url.endsWith("true")); //true


//indexOf /lastIndexOf
console.log(url.indexOf("a")); //gives first index of a = 10
console.log(url.lastIndexOf("a")); //gives last index of a = 24


//Regex (Regular Expression) are patterns that can be found within the string automatically


console.log(url.search(/login/)); //28
console.log(url.search(/vwo/)); //16
