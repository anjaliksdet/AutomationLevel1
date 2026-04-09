const {test,expect}=require('playwright/test')

test('endtoendFlow',async ({browser})=>{

    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto('http://automationexercise.com');
    await page.locator("//a[@href='/login']").click();
    await expect(page.locator("//h2[text()='New User Signup!']")).toBeVisible();
    await page.getByPlaceholder('Name').fill('Anjali')
    await page.locator(".signup-form input[placeholder ='Email Address']").fill('anjali@hhd.com');
    await page.locator("[data-qa='signup-button']").click();
    await expect(page.getByText('Enter Account Information')).toBeVisible();
    await page.locator('#id_gender2').click();
    await page.locator('#password').fill('12345');
    const dropdown1 =await page.locator('#days')
    await dropdown1.selectOption('12');
    const dropdown2 =page.locator('#months')
    await dropdown2.selectOption('October');
    const dropdown3 =await page.locator('#years')
    await dropdown3.selectOption('1995');
    await page.getByLabel('Sign up for our newsletter!').click();
})