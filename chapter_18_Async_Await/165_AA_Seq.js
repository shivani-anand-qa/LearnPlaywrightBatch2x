// When step 2 depends on Step 1's result, you must run them sequentially
//Step 1- Step 2

//Below is also async await function without the keywords as its returning promise

function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({ name: name, status: "200 OK" })
        }, 2000);
    })
}

apiCall("Login").then(function (result) {
    console.log(result.name);
    console.log(result.status);
});
//Login
//200 OK


async function seqTest() {
    console.log("Starting of the Test");
    let start = Date.now();


    let r1 = await apiCall("Login");
    console.log(r1);


    let r2 = await apiCall("Dashboard");
    console.log(r2);


    let r3 = await apiCall("Report");
    console.log(r3);


    console.log("Time: ~" + (Date.now() - start) + "ms");
    //Date.now()-start means “how much time has passed since start” — in milliseconds.
}
seqTest();
