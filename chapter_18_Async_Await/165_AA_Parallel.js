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


async function parallelTest() {


    let [r1, r2, r3] = await Promise.allSettled([
        apiCall("Auth Service"),
        apiCall("User Account Creation"),
        apiCall("Support Page API")


    ])
    console.log(r1);
    console.log(r2);
    console.log(r3);
}
parallelTest();


/*
Login
200 OK
{
status: 'fulfilled',
value: { name: 'Auth Service', status: '200 OK' }
}
{
status: 'fulfilled',
value: { name: 'User Account Creation', status: '200 OK' }
}
{
status: 'fulfilled',
value: { name: 'Support Page API', status: '200 OK' }
} 
*/
