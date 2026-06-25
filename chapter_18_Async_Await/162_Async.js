function getToken() {
    return Promise.resolve("abc123");
}


//Playwright
//page.goTo() - Promise()
//await page.goTo();


async function run() {
    let token = await getToken();
    console.log(token);
}
run();
//abc123
