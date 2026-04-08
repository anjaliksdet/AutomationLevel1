const {test,expect}=require('playwright/test')

test.only("endtoend", async({browser})=>{

    const context =await browser.newContext();
    const page = await context.newPage();
    const products = page.locator(".card-body")
    const prodName= 'ZARA COAT 3';
    const email= "anjalikon@gmail.com";


    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator('#userEmail').fill("anjalikon@gmail.com")
    await page.locator("[type= 'password']").fill("Password@123")
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle");
    await  page.locator(".card-body b").first().waitFor()//this is to make sure all the images are loaded 
   const titles = await page.locator(".card-body b").allTextContents()
   console.log(titles)

  const count = await products.count();//provide the count of the prodcut 


  for(let i=0 ; i<count; ++i)
  {
       if (await products.nth(i).locator("b").textContent() === prodName)
       {

            await products.nth(i).locator("text= Add To Cart").click();
            break;

       }

 
    }

   await  page.locator("[routerlink*='cart']").click();
   await page.locator("div li").first().waitFor();//when the page is rendered auto wait is happening ,so need to wait 
   const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text= Checkout").click();
   await page.locator("[placeholder*= Country]").pressSequentially("indi");//this is used to enter the value one by one,with delay of 150 ms btw each letter
   const dropdown = page.locator(".ta-results");//to wait for the drop down is loaded
   await dropdown.waitFor();
   const dropcount= await dropdown.locator("button").count();//no of options in the dropdown

   for(let i=0;i<dropcount;++i)
   {
     const text = dropdown.locator("button").nth(i).textContent();//to get the content of the drop down

     if(text===" India")
     {
          await dropdown.locator("button").nth(i).click();
          break;

     }

   }
   
expect(page.locator(".user__name [type ='text']").first()).toHaveText(email);
await page.locator(".action__submit").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderId= await page.locator(" .em-spacer-1 .ng-star-inserted").textContent();
console.log(orderId);
await page.locator("li [routerlink*= 'myorder']").click();
await page.locator("tbody").waitFor();//once the user click on Orders ,it takes time to render ,hence waitfor() is used to ensure the page is laoded
const rows= page.locator("tbody tr");

for(let i = 0;i<await rows.count();i++)

     { 
          const rowOrderId= await rows.nth(i).locator('th').textContent();

          if(orderId.includes(rowOrderId))
          {
             await rows.nth(i).locator("button").first().click();
             break;
          

          }

     }

   const orderIdDetails=page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy

});