const { link } = require('node:fs');
const {test,expect}=require('playwright/test')

test('@Web playwrightlocator', async({page})=>{


await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.locator(".form-group [name ='name']").fill("Anjali");
//await page.locator(".form-group [name ='email']").fill("anjk@gmail.com");
await page.getByPlaceholder("Password").fill("anjk@gmail.com");//in html we have placeholder we can use this .when u click on password the box get highlighted
await page.locator("#exampleInputPassword1").fill("Anj12345")
 await page.getByLabel("Check me out if you Love IceCreams!").check();// in html it check for the mentioned label and clicks ,clicking on label the check box get checked ,hence usable
 await page.getByLabel("Employed").check();
 await page.getByLabel("Gender").selectOption("Female");//dropdown
 await page.getByRole("button",{name:'Submit'}).click();
await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
await page.getByRole("link",{name:'Shop'}).click();
await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button").click();//Locator locates all the element ,in that put filter for which element ,under that click on the button 




    


});