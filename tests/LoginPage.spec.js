const {test,expect}=require('@playwright/test')

test('login -username and password', async ({browser})=>{

    const context =await browser.newContext();
    const page = await browser.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator('#userEmail').fill("anjalikon@gmail.com")
    await page.locator("[type= 'password']").fill("Password@123")
    await page.locator("#login").click();
    // await page.waitForLoadState("networkidle");// wait till all the netwrok call are done
    await page.locator(".card-body b").first().waitFor();
   const titile = await page.locator(".card-body b").allTextContents();
   console.log(titile)


    //await expect(page.locator(':text("*Enter Valid Email")').textContent("*Enter Valid Email"));
        
});

test("UI Controls",async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("Learning@830$3mK2")
    const dropdown = page.locator("select.form-control");//drop down 
    const docuemntLink= page.locator("[href *= 'documents-request']")       
    await dropdown.selectOption("consult");
   await page.locator(".radiotextsty").last().click();//raido button
   await page.locator("#okayBtn").click();//pop up
   console.log(await page.locator(".radiotextsty").last().isChecked());
   await expect(page.locator(".radiotextsty").last()).toBeChecked();
   await page.locator("#terms").click();//boxes 
   await  expect(await page.locator("#terms")).toBeChecked();
   await  page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).toBeFalsy();
expect(docuemntLink).toHaveAttribute("class","blinkingText")

});


test("childwindow", async ({browser})=>{

    const context = await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink= page.locator("[href*=  'documents-request']");

   const [newPage] =await Promise.all(// this will create a new page 
    [
        
        context.waitForEvent('page'), // returns pending,rejected and fulfilled 
        documentLink.click()  

])//new page 

const text = await newPage.locator(".red").allTextContents();
console.log(text)
});

//practise code 
test.only('practisenewchildwindow', async ({browser})=>{

    const context= await browser.newContext();
    const page = await  context.newPage();
    const userName= page.locator("#username");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const docuemntLink= page.locator("[href*= 'documents-request']");

  
 const [newPage]=await Promise.all(
[
    context.waitForEvent('page'),
   docuemntLink.click()
  ])


    const text  = await newPage.locator(".red").textContent();
    console.log(text)

     const arrayText=text.split("@")// spliting the text with @ to get the 2 halfs
     const domain=arrayText[1].split(" ")[0]// this will provide rahulshettyacademy.com 
     console.log(domain);
     await page.locator("#username").fill(domain)
    await  page.pause();
     const text1 = await page.locator("#username").inputValue();//cant use textcontent here bz,we are enetring the value dynamically 
    console.log(text1);


});

