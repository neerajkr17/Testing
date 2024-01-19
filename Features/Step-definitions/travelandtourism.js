const {Given, Before, When, After, Then} = require("@cucumber/cucumber");
// const {By, until, Builder} = require('selenium-webdriver');
const { By, until, Builder, Browser } = require('selenium-webdriver');

// const {assert} = require("chai");
const { assert } = import('chai');

// import { assert } from 'chai';

// const {myBeforeHook, myAfterHook} = require("./hooks");
// const { resolve } = require('some-library');

// const { elementIsEnabled, elementLocated } = require("selenium-webdriver/lib/until");
// const { myBeforeHook, myAfterHook } = require("./hooks");
// const {until} = require('selenium-webdriver');


let driver;

Before( async function(){

  //  this.driver = new Builder().forBrowser('chrome').build();
  driver = await new Builder().forBrowser(Browser.CHROME).build();



  // await new Promise(resolve => setTimeout(resolve, 2000));
});





// this is use for building the portal in browser

Given('I open the portal',async function () {
  
 await this.driver.get("http://portal-dev.npi.keenable.in/explorebharat/travelandtourism");

  // Accommodation landing page

  // driver.get(Accommodation.Accomlandingpage);

  await this.driver.manage().window().maximize();

});


//This is use for checking navigation bar 

When('I check the navigation for Travel & Tourism', async function () {
  try {
    const highlightNavigat = await this.driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[3]/div/ul/li[1]/a"));
    if (highlightNavigat) {
      console.log("Element found");
      await this.driver.executeScript("arguments[0].style.backgroundColor = 'yellow';", highlightNavigat);
      console.log("This is yellow color");
      const textcontent = await highlightNavigat.getText();
      console.log(textcontent);
    } else {
      console.log("Element not found");
    }
  } catch (error) {
    console.error("Error:", error.message);
    assert.fail(error.message);
  }
});


//check underline  of present page 

Then('the navigation items should be underlined in red color tt',async function () {

  await new Promise(resolve => setTimeout(resolve, 2000));
  try {
    const highlightunderlinenev = await this.driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[3]/div/ul/li[1]/a")); // Replace with your actual XPath

    if (highlightunderlinenev) {
      console.log("Element found");
      await this.driver.executeScript("arguments[0].style.textDecoration = 'underline'; arguments[0].style.color = 'red';", highlightunderlinenev);
      console.log("Element highlighted with orange underline");
    } else {
      console.log("Element not found");
    }
  } catch (error) {
    console.error("Error:", error.message);
    assert.fail(error.message);
  }
});


//underlin navigation item verified if it is active

Then('the underlined navigation items need verification tt',async function () {

  // await new Promise(resolve => setTimeout(resolve, 2000));
  try{
    const highlightactivation =   await this.driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[3]/div/ul"));

    if(highlightactivation){
      console.log("Element foudn");
      await this.driver.executeScript("arguments[0].style.backgroundColor = 'yellow';", highlightactivation);
      console.log("This is yellow color");
      textcontent = await highlightactivation.getText(highlightactivation)
      console.log(textcontent);
      console.log("verification successfull")
    }else{
      console.log("Element not found")
    }
  }catch (error){
    console.error("Error:", error.message);
    assert.fail(error.message);
  }

});



// check header of travel & Tourism

Then('I locate the header for Travel & Tourism',async function () {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  
  try{
    const highlightheader = await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[1]"));

    if(highlightheader){
      console.log("Element found");
      await this.driver.executeScript("arguments[0].style.backgroundColor = 'yellow';", highlightheader)
      console.log("this is red colour");

    }else{
      console.log("Element not found");
    }
  }catch(error){
    console.error("Error:", error.message);
    assert.fail(error.message);
  }

});

// if Checked header has available the print heading

Then('the header should be present tt',async function () {
  Headeroftrandto = await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[1]"));
textcontent = await Headeroftrandto.getText();
console.log(textcontent);
});


// here again header verified

Then('the header needs verification tt',async function () {

  Headeroftrandto = await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[1]"));
  textcontent = await Headeroftrandto.getText();
  console.log(textcontent);

});


Then('I check between the Travel & Tourism header and the navigation',async function () {
  
  try{
    const highlight = await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[1]"));
    const highlight2 = await this.driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[3]/div/ul"));

    if(highlight){
      console.log("Element found");
      await this.driver.executeScript("arguments[0].style.backgroundColor = 'yellow';", highlight)
      await this.driver.executeScript("arguments[0].style.backgroundColor = 'yellow';", highlight2)
      console.log("this is black colour");

    }else{
      console.log("Element not found");
    }
  }catch(error){
    console.log("Error:", error.message);
    assert.fail(error.message);
  }
});

// here i am verifying  the breadcrumb

Then('a breadcrumb \\(historic) should be displayed tt',async function () {
 
  try{
    const Breadcrumb = await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/ul"));

    if( Breadcrumb){
      console.log(" Breadcrumb element found");
      await this.driver.executeScript("arguments[0].style.backgroundColor = 'yellow';", Breadcrumb);
      
    }else{
      console.log("Element not found");
    }
  }catch(error){
    console.log("Error: ", error.message)
    assert.fail(error.message);
  }
});

// here verify the breadcurmb and print all the verified breadcurmb 

Then('the breadcrumb needs verification tt',async function () {
  try{

    let Breadcrumbfind = await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/ul"));

  Breadcrumbfind = await Breadcrumbfind.getText();
  console.log(Breadcrumbfind);
  }catch(error){
    console.error("Error: ", error.message);
    assert.fail(error.message);
  }

});


// find all the tourist place and print 

Then('Look for the total number of tourist places provided',async function () {
 

  try {
    const highlight = await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[2]/div[3]/div[1]"));
    if (highlight) {

      
      const totalCardText = await highlight.getText();
      console.log('Total Tourist Places (text):', totalCardText);

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




// Then('the total number of tourist places should be present',async function () {
  
//       let paginationbtn = Math.ceil(totalTouristPlaces / 9);
//       const paginationButtonc = await this.driver.findElement(By.xpath(Pathx.paginationbutton))
//       for(let i = 0; i<=paginationbtn; i++){
//         for(let j = 1; j<= 9; j++){
//           const cardElement =await this.driver.findElement(By.xpath(`(//div[@class='shadow rounded p-2'])[${j}]`));
//           let amit = cardElement;
//           amit = await cardElement.getText();
//           console.log(amit);
//           // const cardElement = await this.driver.findElement(Pathx.cardSelector);
//               await this.driver.executeScript('arguments[0].scrollIntoView(true);', cardElement);
//               await this.driver.executeScript("arguments[0].setAttribute('style', 'border: 2px solid red;');", cardElement);
//               await this.driver.wait(elementIsEnabled(cardElement), 10000);
//               await this.driver.executeScript("arguments[0].setAttribute('style', 'border: none;');", cardElement);
//             // console.log("hello")

//             const image = await this.driver.findElement(By.xpath(Pathx.cardimage));
//             const dimage = await this.driver.findElement(By.xpath(Pathx.defaultimage));

//             if(image){
//               console.log(image+1);
//               console.log("image find");
//             }else if(dimage){
//               console.log(dimage+1);
//               console.log("default image found");
//             }
//             else{
//               console.log("images not found");
//             }
//         }
//         await paginationButtonc.click();
//         console.log(i);
//   }
// });


Then('the total number of tourist places should be present', async function () {
  try{
  let paginationbtn = Math.ceil(totalTouristPlaces / 9);
  const paginationButtonc = await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/div/div[3]/nav/ul/li[9]/button"));

  for (let i = 0; i <= paginationbtn; i++) {
    for (let j = 1; j <= 9; j++) {
      const cardElement = await this.driver.findElement(By.xpath(`(//div[@class='shadow rounded p-2'])[${j}]`));
      await this.driver.executeScript('arguments[0].scrollIntoView(true);', cardElement);
      await this.driver.executeScript("arguments[0].setAttribute('style', 'border: 2px solid red;');", cardElement);
      await this.driver.sleep(100);

      // await this.driver.wait(elementIsEnabled(cardElement), 10000);
      await this.driver.executeScript("arguments[0].setAttribute('style', 'border: none;');", cardElement);
      await this.driver.sleep(100);


      // const imageElements = await this.driver.findElements(By.className(Pathx.cardimage));
      // const imageElements = await this.driver.findElement(byselector(byselector.cardimage));
      // const defaultImageElements = await this.driver.findElements(By.className(Pathx.defaultimage));
      // const defaultImageElements = await this.driver.byselector(byselector.defaultimage);

      // const imageElements = await this.driver.findElements(byselector.cardimage);
      // const defaultImageElements = await this.driver.findElements(byselector.defaultimage);
// 
// 
      // console.log(`Card ${j}:`);
      // const contenttext = await cardElement.getText();
      // console.log(contenttext);
      // if(imageElements){
        // console.log(`  Total Images: ${imageElements.length}`);
      // }
      // else if(defaultImageElements){
        // console.log(`  Total Default Images: ${defaultImageElements.length}`);
      // }
      // else {
        // console.log("Image not found");
      // }
    }

    await paginationButtonc.click();
    console.log(`Pagination ${i + 1}`);
  }
} catch (error) {
  console.log('Error', error.message);
}
});


Then('the total number of tourist places needs verification', function () {



  
});


After(async function(){
  //   await new Promise(resolve => setTimeout(resolve, 3000));
  
   await this.driver.quit();
  })
