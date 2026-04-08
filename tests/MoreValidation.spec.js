const{test,expect }= require('@playwright/test');
const { escape } = require('node:querystring');

test("Pop Validation",async({page})=>{


await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
// await page.goto("https://www.google.com/")
// await page.goBack();
// await page.goForward();

await expect (page.locator(".displayed-class")).toBeVisible();//fileds which are enabled when the associated button is set to show
await page.locator("#hide-textbox").click();
await expect (page.locator(".displayed-class")).toBeHidden();
await page.pause();
page.on('dialog',dialog => dialog.accept());// for dialog pop up to accept it ,listener steps
await page.locator("#confirmbtn").click();''
await page.locator("#mousehover").hover();
const  Framespgae = page.frameLocator("#courses-iframe")//Normal page to the new frame 
await Framespgae.locator("li a[href*='learning-path']:visible").click();

})

test("screenshot",async({page})=>{


await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
// await page.goto("https://www.google.com/")
// await page.goBack();
// await page.goForward();

await expect (page.locator(".displayed-class")).toBeVisible();//fileds which are enabled when the associated button is set to show
await page.locator("#hide-textbox").click();
await page.screenshot({path: "screenshot.png"})
await expect (page.locator(".displayed-class")).toBeHidden();



})

test.only("snapshotcomaprison",async({page})=>
{
await page.goto("https://www.google.com")
expect(await page.screenshot()).toMatchSnapshot('landing page');
}
)