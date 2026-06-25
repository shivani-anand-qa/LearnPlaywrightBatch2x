//Basic Async and Await
//DNR

async function getTestResult() {
    return "Pass";
}


getTestResult().then(function (res) {
    console.log(res);
});


//Pass


//Or


let result = await getTestResult();
console.log(result); //Pass


//DNR just for learning
import { test, expect } from '@playwright/test';




test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);


    let r = page.locator();


});
