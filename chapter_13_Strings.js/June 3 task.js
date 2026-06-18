//1. Palindrome

let str = "Madam";
let cleanstr = str.toLowerCase();
console.log(str);
/*1.
let rev="";
for(let i=cleanstr.length-1; i>=0; i--){
    rev = rev + cleanstr.charAt(i);
}
*/


//Or 2.
//let rev = cleanstr.split("").reverse().join("");
//.split("")  Turn cleanstr into an Array ["S","h","i","v", "a", "n", "i"]
/*
console.log(rev);
if(cleanstr===rev){
    console.log(`String "${str}"  is a palindrome`);
}
else
{
console.log(`String "${str}"  is not a palindrome`);
}
*/


//Or 3.
//Loop only halfway through the string
let isPalindrome = true;
for (let i = 0; i < cleanstr.length / 2; i++) {
    // Compare front character with matching back character
    if (cleanstr[i] !== cleanstr[cleanstr.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
console.log(`String "${str}" is ${isPalindrome ? "" : "not "}a palindrome`);

//2. Anagram
let word1 = "tea";
let word2 = "eat";
let isAnagram = false;


if (word1.length === word2.length) {

    if (word1.split("").sort().join("") === word2.split("").sort().join("")) {
        isAnagram = true;
    }
    else {
        isAnagram = false;
    }
}
if (isAnagram) {
    console.log("Words are anagram")
}
else {
    console.log("Words are not anagram")
}




