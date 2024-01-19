const { Given, Before, After, When, Then } = require("@cucumber/cucumber");
const { Builder, Browser, By, until } = require("selenium-webdriver");
const {setDefaultTimeout} = require("@cucumber/cucumber");
const assert = require("assert");
// var should = require("chai").should();
setDefaultTimeout(0);

let driver;

Before(async function (){
  driver = await new Builder().forBrowser(Browser.CHROME).build();
})



Given('I open the Portal',async function () {
await driver.get("http://portal-dev.npi.keenable.in/explorebharat/accommodation");
await driver.manage().window().maximize();
});



When('I check the navigation for Accommodation',async function () {
  try{
    const highlight =   await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[3]/div/ul/li[2]/a"));

    if(highlight){
      // console.log("Element foudn");
      await driver.executeScript("arguments[0].style.backgroundColor = 'yellow';", highlight);
      // console.log("This is yellow color");
      textcontent = await highlight.getText(highlight)
      // console.log(textcontent);
    }else{
      console.log("Element not found")
    }
  }catch (error){
    console.error("Error:", error.message);
    assert.fail(error.message);
  }
});




Then('the navigation items should be underlined in red color', async function () {
  await new Promise(resolve => setTimeout(resolve, 2000));
  try {
    const highlight = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[3]/div/ul/li[2]"));
    if (highlight) {
      // console.log("Element found");
      await driver.executeScript("arguments[0].style.textDecoration = 'underline'; arguments[0].style.color = 'red';", highlight);
      // console.log("Element highlighted with red underline");
    } else {
      console.log("Element not found");
    }
  } catch (error) {
    console.error("Error:", error.message);
    assert.fail(error.message);
  }
});




Then('the underlined navigation items need verification',async function () {

  await new Promise(resolve => setTimeout(resolve, 2000));
  try{
    const highlight =   await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[3]/div/ul/li[2]"));

    if(highlight){
      // console.log("Element foudn");
      await driver.executeScript("arguments[0].style.backgroundColor = 'yellow';", highlight);
      // console.log("This is yellow color");
      textcontent = await highlight.getText(highlight)
      // console.log(textcontent);
      console.log("verification successfull")
    }else{
      console.log("Element not found")
    }
  }catch (error){
    console.error("Error:", error.message);
    assert.fail(error.message);
  }
});




Then('I locate the header for Accommodation',async function () {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try{
      const highlight = await driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[1]"));
  
      if(highlight){
        // console.log("Element found");
        await driver.executeScript("arguments[0].style.backgroundColor = 'red';", highlight)
        // console.log("this is red colour");
  
      }else{
        console.log("Element not found");
      }
    }catch(error){
      console.log("Error:", error.message);
      assert.fail(error.message);
    }
  });
  
  


  Then('the header should be present',async function () {
   
  highlight = await driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[1]"));
  textcontent = await highlight.getText();
  assert.strictEqual(textcontent,"Accommodation");
  
  });
  
  


  Then('the header needs verification',async function () {
    
  highlight = await driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[1]"));
  textcontent = await highlight.getText();
  assert.strictEqual(textcontent,"Accommodation");
});




Then('I check between the Accommodation header and the navigation',async function () {
  
  try{
    const highlight = await driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[1]"));
    const highlight2 = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[3]/div/ul"));

    if(highlight){
      // console.log("Element found");
      await driver.executeScript("arguments[0].style.backgroundColor = 'blue';", highlight)
      await driver.executeScript("arguments[0].style.backgroundColor = 'blue';", highlight2)
      // console.log("this is black colour");

    }else{
      console.log("Element not found");
    }
  }catch(error){
    console.log("Error:", error.message);
    assert.fail(error.message);
  }

});




Then('a breadcrumb \\(historic) should be displayed',async function () {
 
  await new Promise(resolve =>setTimeout(resolve, 3000));
  try{
    const highlight = await driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/ul"));

    if( highlight){
      // console.log(" Breadcrumb element found");
      await driver.executeScript("arguments[0].style.backgroundColor = 'yellow';", highlight);
      
    }else{
      console.log("Element not found");
    }
  }catch(error){
    console.log("Error: ", error.message)
    assert.fail(fail.message);
  }

});



Then('the breadcrumb needs verification',async function () {
  

  try{
    const highlight = await driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/ul"));

    if( highlight){
      textcontent = await highlight.getText();
      console.log(textcontent);     // return the text of breadcrumb 
    }else{
      console.log("Element not found");
    }
  }catch(error){
    console.log("Error: ", error.message)
    assert.fail(fail.message);
  }

});




Then('Check Search here button',async function () {
  // For open the search input:-
  await driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[2]/div[3]/div[2]/div")).click();
  // await driver.executeScript('arguments[0].scrollIntoView(true);', searchBtn);

  const searchInput = await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[2]/div[3]/div[2]/div[1]/div/div/div/input")));
  await driver.actions().sendKeys(searchInput,'Hotel');
  // For close the search input:-
  await driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[2]/div[3]/div[2]/div")).click();
  // await driver.sleep(12000);
});




Then('Look for the total number of accommodation provided', async function () {
  try {
    const highlight = await driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[2]/div[3]/div[1]"));
    if (highlight) {

      
      const totalCardText = await highlight.getText();
      // console.log('Total Tourist Places (text):', totalCardText);

      totalTouristPlaces = parseInt(totalCardText.replace(/\D/g, ''), 10);
      console.log('Total Tourist Places (parsed):', totalTouristPlaces);
    } else {
      console.log('Element not found');
      assert.fail('Element not found');
    }
  } catch (error) {
    console.log('Error:', error.message);
    assert.fail(error.message);
  }
});




Then('Total number of accommodation should be present', async function () {
  // this.setTimeout(0);
  // await new Promise(resolve => setTimeout(resolve, 2000));
  try {
    const totalCards = 533;
    const cardsPerPage = 9;

    const totalPages = Math.ceil(totalCards / cardsPerPage);

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
      for (let cardIndex = 1; cardIndex <= cardsPerPage; cardIndex++) {
        const cardSelector = By.xpath(`(//div[@class='shadow rounded p-2'])[${cardIndex}]`);

        const cardElement = await driver.findElement(cardSelector);
        await driver.executeScript('arguments[0].scrollIntoView(true);', cardElement);

        await driver.executeScript("arguments[0].setAttribute('style', 'border: 2px solid red;');", cardElement);
        await driver.sleep(500);

        // await driver.wait(until.elementIsEnabled(cardElement), 10000);

        // await cardElement.click();
        await driver.executeScript("arguments[0].setAttribute('style', 'border: none;');", cardElement);
        await driver.sleep(500);
      }
      // await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
      if (currentPage <= totalPages) {
        const nextButtonSelector = By.xpath('/html/body/div[1]/div[3]/div/div[2]/div/div[2]/div[5]/nav/ul/li[9]/button');
        // await driver.wait(until.elementIsEnabled(nextButtonSelector), 10000);

        // Click the "Next" button
        await driver.findElement(nextButtonSelector).click();
        // await driver.sleep(1000);
        // const nextPageFirstCardSelector = By.xpath('(//div[@class="shadow rounded p-2"])[1]');
        // await driver.wait(until.elementLocated(nextPageFirstCardSelector), 10000);
      }
    }
  } catch (error) {
    console.log('Error', error.message);
  }
});





Then('Total number of accommodation needs verification', async function () {
  // Your verification logic goes here
});




After( async function(){
  await driver.quit();
})
