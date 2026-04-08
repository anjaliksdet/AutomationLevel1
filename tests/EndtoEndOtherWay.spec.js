const {test,expect}=require('playwright/test')

test.only("endtoend", async({browser})=>{

    const context =await browser.newContext();
    const page = await context.newPage();
    const products = page.locator(".card-body")
    const prodName= 'ZARA COAT 3';
    const email= "anjalikon@gmail.com";


    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.getByPlaceholder("email@example.com").fill("anjalikon@gmail.com")
    await page.getByPlaceholder("enter your passsword").fill("Password@123")
    await page.getByRole("button",{name: 'Login'}).click();
    await page.waitForLoadState("networkidle");
    await  page.locator(".card-body b").first().waitFor()//this is to make sure all the images are loaded 
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:" Add To Cart"}).click();

    await page.getByRole("listitem").getByRole("button",{name: "Cart"}).click();



   await page.locator("div li").first().waitFor();//when the page is rendered auto wait is happening ,so need to wait 
   await expect (page.getByText(prodName)).toBeVisible();
   await page.getByRole("button", {name: "Buy Now"}).click();



   await page.getByPlaceholder("Select Country").pressSequentially("indi");//this is used to enter the value one by one,with delay of 150 ms btw each letter
   await page.getByRole("button", {name: "India"}).nth(1).click();
   await page.getByText("PLACE ORDER").click();
   
// expect(page.locator(".user__name [type ='text']").first()).toHaveText(email);

// await expect(page.getByText("Thankyou for the order.")).toBeVisible();\

const orderId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderId);
await page.getByRole("listitem").getByRole("button",{name: "ORDERS"}).click();
await page.locator("tbody").waitFor();//once the user click on Orders ,it takes time to render ,hence waitfor() is used to ensure the page is laoded
await page.locator("tbody tr th").filter({hasText: orderId}).getByRole("button",{name : "View"}).click();


});