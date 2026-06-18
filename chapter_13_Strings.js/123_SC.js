//TypeConversion/Typecasting


//1. String Conversion - The parentheses around (200) are required because if we skip(), JavaScript gets confused and thinks the dot is a decimal point.
console.log((200).toString()); //Converts the number 200 into the text string "200".
//console.log(200.toString()); -> This will give error - identifier or keyword cannot immediately follow a numeric literal


console.log(true.toString()); //Converts the boolean value true into a literal four-letter text string "true".


//2. Strict Number Conversion
console.log(Number("42")); //The Number() function tries to convert a whole string directly into a clean number.
console.log(Number("Shivani26"));//NaN




//3. Extracting Numbers from Text
console.log(parseInt("42px")); //reads "4", then "2", hits "p". As "p" - not a number, it stops right there, ignores the rest of the string ("px")-> 42.
console.log(parseFloat("3.14rem")); //reads "3", sees the decimal point ".", reads "1", and reads "4". When it hits the letter "r", it stops and returns the decimal number 3.14
console.log(parseFloat("3.14rem")); //3.14
