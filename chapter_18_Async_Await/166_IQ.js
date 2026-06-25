//DNC Copy Paste for answers
//Al are whether async/normal function and are are whether parallel/ sequential

//1.
// async function sayHello() {
//     return "Hello, QA!";
// }
// sayHello().then(function (msg) {
//     console.log(msg);
// });
//Hello, QA!

//2.
// async function getStatus() {
//     let status = await Promise.resolve(200);
//     console.log("Status code:", status);
// }
// getStatus();
// //Status code: 200


//3.
// async function testFlow() {
//     let step1 = await Promise.resolve("Opened browser");
//     console.log(step1);


//     let step2 = await Promise.resolve("Clicked login");
//     console.log(step2);


//     let step3 = await Promise.resolve("Verified dashboard");
//     console.log(step3);
// }


// testFlow();


// O/P Opened browser
// Clicked login
// Verified dashboard
