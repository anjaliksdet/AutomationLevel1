const { test,expect } = require("@playwright/test")

test("Calender",async({page})=>{


const month="6";
const date="15";
const year ="2027";
const expectedList = [month,date,year];//aaray of date for the comparision

await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers")
// await page.getByRole("link",{name: 'Top Deals'}).click();
// await page.waitForLoadState("networkidle");
await page.locator(".react-date-picker__inputGroup").click();//clcik to get the year
await page.locator(".react-calendar__navigation__label").click();//clcik to get the month
await page.locator(".react-calendar__navigation__label").click();
await page.getByText(year).click();
await page.locator(".react-calendar__year-view__months__month").nth(Number(month-1)).click();
await page.locator("//abbr[text()='15']").click();
const input =page.locator(".react-date-picker__inputGroup").first().locator("input:not([type='hidden'])");//to get the 

for(let i=0; i<expectedList.length;i++)
{
   const value =await input.nth(i).inputValue();// fectched the actual value of the attribute value
   expect(value).toEqual(expectedList[i]);

}










});