//To overcome Callback hell, async and await was introduced
function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened!");
    });
}


function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Navigated to Login Page");
    });
}


function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}


function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}


//DNC below is call back hell, which we can overcome
// openBrowser()
//     .then(function (msg) {
//         console.log("Step 1", msg);
//         return goToLogin();
//     }).then(function (msg) {
//         console.log("Step 2 :", msg);
//         return enterCredentials();
//     }).then(function (msg) {
//         console.log("Step 3 :", msg);
//         return clickLogin();
//     }).then(function (msg) {
//         console.log("Step 4 :", msg);
//     }).catch(function (error) {
//         console.log("Error:", error);
//     }).finally(function () {
//         console.log("Done execution!");
//     });


//we can overcome using below


async function runTheE2E() {
    let msg1 = await openBrowser();
    console.log("Step 1:", msg1);


    let msg2 = await goToLogin();
    console.log("Step 2:", msg2);


    let msg3 = await enterCredentials();
    console.log("Step 3:", msg3);


    let msg4 = await clickLogin();
    console.log("Step 4:", msg4);
}


runTheE2E();


//Step 1: Browser opened!
//Step 2: Navigated to Login Page
//Step 3: Credentials entered
//Step 4: Logged in successfully
