var flukes= require("../POM/RolesAndProjects")
const protractor_1 = require('protractor');
const { browser, element ,visibilityOf} = require("protractor");
const { protractor } = require("protractor/built/ptor");
var data = require("../TestData/testData.json");



class CommonMethods {
 
    constructor() {
var EC= protractor_1.ExpectedConditions;

this.SelectRoles=  async function(rolesOptions){
this.waitForEleForVisible(flukes.ListOfAllRoles)
  await  flukes.ListOfAllRoles.each( function(items){   
        items.getText().then(function(value){
              console.log(value)
              if(value==rolesOptions){
                items.click();
              }
            })  
          })        
}
this.SelectProjects=  async function(projectsOptions){
  this.waitForEleForVisible(flukes.ListOfAllProjects)
  var elm=  await flukes.ListOfAllProjects.get(projectsOptions);
  browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
  elm.click();  
}



this.getURL= async function(){
  var url= "http://hiring.lwl.com.s3-website-us-east-1.amazonaws.com/";
 await browser.get(url);
}

this.waitForEleForVisible= async function(ele){
await browser.wait(EC.visibilityOf(ele),5000)
}
this.waitForEleForInvisible= async function(ele){
  await browser.wait(EC.invisibilityOf(ele),5000)
  }

  this.implicityWait= async function(){
  await  browser.manage().timeouts().implicitlyWait(4000);
  }

  this.VerifyTitle= async function(){
    await browser.getTitle().then(function(logo){
      expect(data.title).toEqual(logo);
    })
  }

  this.VerifyHeader= async function(){
    await flukes.verifyHeaderInfo.getText().then(function(header){
      expect(header).toEqual(data.header)
    })
  }

  this.VerifyRolesPage= async function(){
    await flukes.verifyRolesPageInfo.getText().then(function(RolePageInfo){
      expect(RolePageInfo).toBe(data.RolePage)
    })
  }
  this.VerifyProjectsPage= async function(){
    await flukes.VerifyProjectPageInfo.getText().then(function(ProjectPageInfo){
      expect(ProjectPageInfo).toBe(data.ProjectPage)
    })
  }

  
    }
}
module.exports = new CommonMethods();