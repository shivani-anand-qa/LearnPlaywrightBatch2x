let config = {};


config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";


/* Or we can create object like
let config= {
config.browser = "chrome",
config.timeout = 3000,
config.testname = "login test"
}
;
*/

console.log(config); //{ browser: 'chrome', timeout: 3000, testname: 'login test' }


delete config.browser;
console.log(config); //{ timeout: 3000, testname: 'login test' } no browser printed


if (config.browser === "chrome") {
    console.log("I will execute my TC")
}
//will not print as browser removed