let str = "Login_Test_Pass_01";


//slice(start,end)- negative indexes supported
console.log(str.slice(0, 5)); // ->(0, 4) --> Login
console.log(str.slice(11)); // ->(0, 10) --> Pass_01


let testNumber = str.slice(-3);
console.log(testNumber); //_01




//Substring(start,end) - no negatives(treats as 0)
console.log(str.substring(6, 10)); //Test

