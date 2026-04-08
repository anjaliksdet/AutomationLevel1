const {test, expect, request} = require('@playwright/test');
const {APiUtils} = require('./utils/APIUtils');
const loginPayLoad = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};
const fakePayLoadOrders= {data:[],message:"No Orders"}

let response;
test.beforeAll( async()=>
{
   const apiContext = await request.newContext();
   const apiUtils = new APiUtils(apiContext,loginPayLoad);
   response =  await apiUtils.createOrder(orderPayLoad);

})


//create order is success
test('@API Place the order', async ({page})=>
{ 
    await page.addInitScript(value => {

        window.localStorage.setItem('token',value);
    }, response.token );
await page.goto("https://rahulshettyacademy.com/client");

await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca",
   async route=>
    {
        const response= await page.request.fetch(route.request())//intercepting the reson[l]
        let body = JSON.stringify(fakePayLoadOrders);
        route.fulfill({
        
            response,
            body,
        }

        )
    }
)
 await page.locator("button[routerlink*='myorders']").click();
 await page.pause();
 await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");

})


//Verify if order created is showing in history page
// Precondition - create order