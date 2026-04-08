const {test, expect}=require('@playwright/test');



test('Broswer ContextPlaywright Test',async ({browser})=>{

//playwrightcode
// js is aschronous ,i.e it executes whole code together thats why we need "await"in between ,to use 
// "await" we need "async" present in the function 

//Function used is anonyms hence we can use ()=> instead

//step 1= open the broswer
//step2 = login u/p
//step =sumbit 
const context =await browser.newContext();// open the fresh browser
const page =await browser.newPage();// open the new tab
page.goto("https://mail.google.com/mail/u/0/?pli=1#inboxcl");

});

// this is for wrong user name and passowrd 
test('Page Playwright Test',async ({page})=>{
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 console.log(await page.title());
 await page.locator('#username').fill("rahulshetty");// uses the css locator for locating the username field 
 await page.locator("[type= 'password']").fill("Learning");
 await page.locator('#signInBtn').click();
 console.log(await page.locator("[style*='block']").textContent());
 await exp    (page.locator("[style*='block']")).toContainText("Incorrect")

 //await expect(page).toHaveTitle("Google");
});

//this is for correct user name and passowrd 
test("Correct username and passowrd",async ({page})=>{
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   await page.locator('#username').fill("rahulshettyacademy ");
   await page.locator("[type= 'password']").fill("Learning@830$3mK2");
   await page.locator('#signInBtn').click();
});

// this is store the loactors and use them 

test     ("username and passowrd locators saved in variable", async ({page})=>{

    const userName = page.locator('#username');
    const passowrd = page.locator("[type= 'password']");
    const cardTitle=  page.locator(".card-body a");
    //const allTitels= await cardTitle.allTextContents(); -cant declare here bz it cant read the context without going to the page

    
    

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("rahulshettyacademylo ");
    await userName.fill("");
    await userName.fill("rahulshettyacademy")
    await passowrd.fill("Learning@830$3mK2")
    await page.locator("#signInBtn").click();
    await console.log( await page.locator(".card-body a").first().textContent());//out of many array it pickup 1st one 
    await console.log (await page.locator(".card-body a").nth(2).textContent());

     const allTitels= await cardTitle.allTextContents();//allTextContenst give array ,it wont wait till the page load ,hence above to code is impoartant as we have to show that the page is loaded

    console.log("All Titels in the page :" ,allTitels);
});
