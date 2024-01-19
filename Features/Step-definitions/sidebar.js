const { Given, Before, After, When, Then } = require("@cucumber/cucumber");
const { Builder, Browser, By, until, Key } = require("selenium-webdriver");
const {setDefaultTimeout} = require("@cucumber/cucumber");
const assert = require("assert");
// var should = require("chai").should();
setDefaultTimeout(60*1000);

let driver;

// Before(async function (){
  // driver = await new Builder().forBrowser(Browser.CHROME).build();
// })

Given('I open the Portal for Sidebar',async function () {
    await driver.get("http://portal-dev.npi.keenable.in/explorebharat/accommodation");
    await driver.manage().window().maximize();
    });

When('Check Sidebar',async function () {
    let Sidebar = await driver.findElement(By.xpath("/html/body/div[1]/div[4]/div/div[1]/div/nav/div[1]")).getText();
    assert.strictEqual(Sidebar,"Explore");

    let stateSidebar = await driver.findElement(By.xpath("/html/body/div[1]/div[4]/div/div[1]/div/nav/div[2]")).getText();
    assert.strictEqual(stateSidebar,"Select State");

    let districtSidebar = await driver.findElement(By.xpath("/html/body/div[1]/div[4]/div/div[1]/div/nav/div[3]")).getText();
    assert.strictEqual(districtSidebar,"Select District");

    let accomodationSidebar = await driver.findElement(By.xpath("/html/body/div[1]/div[4]/div/div[1]/div/nav/div[4]")).getText();
    assert.strictEqual(accomodationSidebar,"Accomodation Type");

    await driver.sleep(5000);
  });
  
  
  Then('Check Select State Dropdown', async function () {
    await driver.findElement(By.xpath("/html/body/div[1]/div[4]/div/div[1]/div/nav/div[2]")).click();
  
    const stateInput = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div[4]/div/div[1]/div/nav/div[3]/div/div/div[1]/input")));
    await driver.wait(until.elementIsVisible(stateInput));
    await driver.actions().sendKeys(stateInput, 'Uttar Pradesh').perform();
    await driver.findElement(By.xpath('/html/body/div[1]/div[4]/div/div[1]/div/nav/div[3]/div/div/div[3]/div/div/div/p')).click();
  
    // Wait for the dropdown list to appear
    const dropdownOption = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div[4]/div/div[2]/div/div/div/div[1]/div[1]")));
    await driver.wait(until.elementIsVisible(dropdownOption));
  
    const selectedState = await dropdownOption.getText();
    assert.strictEqual(selectedState, "Uttar Pradesh");
  });
  
  
// Then('Check Select District Dropdown',async function () {
    // await driver.findElement(By.xpath("/html/body/div[1]/div[4]/div/div[1]/div/nav/div[4]")).click();
  // 
    // const districtInput = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div[4]/div/div[1]/div/nav/div[5]/div/div/div[1]/input")));
    // await driver.wait(until.elementIsVisible(districtInput));
    // await driver.actions().sendKeys(districtInput, 'Gorakhpur').perform();
    // await driver.findElement(By.xpath('/html/body/div[1]/div[4]/div/div[1]/div/nav/div[5]/div/div/div[3]/div/div/p')).click();
  
    // Wait for the dropdown list to appear
    // const dropdownOption = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div[4]/div/div[2]/div/div/div/div[1]/div[1]")));
    // await driver.wait(until.elementIsVisible(dropdownOption));
  // 
    // const selectedState = await dropdownOption.getText();
    // assert.strictEqual(selectedState, "Uttar Pradesh");
  // });
  
Then('Check Accomodation Type Dropdown',async function () {
    await driver.findElement(By.xpath("/html/body/div[1]/div[4]/div/div[1]/div/nav/div[6]")).click();
    await driver.sleep(3000);
    
  });

// After( async function(){
    // await driver.quit();
  // })