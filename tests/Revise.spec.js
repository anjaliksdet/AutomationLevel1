const{test,expect}=require('@playwright/test');

test.only("Test case1", async ({browser})=>
{
  const context=await browser.newContext()
  const page= await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 await  page.locator('input#username').fill("rahulshettyacademy");
 await page.locator("#password").fill('Learning@830$3mK2');
 await page.locator("[name='signin']").click();

}
);

test("brower case", async({page})=>
{
 
await page.goto("https://www.google.com/")
console.log(await page.title());
await expect(page).toHaveTitle("Google");

}


);