const { browser, element } = require("protractor");
var testdatafromexcel= require('../TestData/xcelToJason')
var flukes= require("../POM/RolesAndProjects")
var fluke= require("../Utils/CommonMethods")
var data= require("../TestData/testData.json");
const { testConfig } = require("../TestData/xcelToJason");

describe('Project homepage todo list', function() {
  beforeAll(async () => {
    await fluke.getURL()
  })
  beforeEach(async () => {
   await fluke.implicityWait
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000000;
    await fluke.waitForEleForVisible(flukes.ClickOnRolesDropDown)
    await browser.actions().click(flukes.ClickOnRolesDropDown).perform()
   
  })
    it('should display Technician User roles, @Sanity,@Smoke,@Regression',async function() {

     await fluke.VerifyTitle()
     await fluke.VerifyHeader()
     await fluke.SelectRoles(data.roles[0]);
     await fluke.waitForEleForVisible(flukes.TechnicianFullName)
     expect( await flukes.TechnicianFullName.getText()).toContain(testdatafromexcel.testConfig.FlukeUserRole_firstname1);
     expect(testdatafromexcel.testConfig.FlukeUserRole_ID1).toBe(await flukes.IdForTech.getText());
     expect(testdatafromexcel.testConfig.FlukeUserRole_USER_ID1).toBe(await flukes.UserIdTech.getText());
     expect(testdatafromexcel.testConfig.FlukeUserRole_ROLE_ID1).toBe(await flukes.RoleIdTech.getText())
    
    });

    it('should display Project Manager User roles, @Sanity,@Regression',async function() {
      
      await fluke.SelectRoles(data.roles[1]);
      expect(await flukes.PMFullName.getText()).toContain(testdatafromexcel.testConfig.FlukeUserRole_fistname_OliverFN);
      expect(testdatafromexcel.testConfig.FlukeUserRole_OliverID).toBe(await flukes.PMId.getText());
      expect(testdatafromexcel.testConfig.FlukeUserRole_OliverUserID).toBe(await flukes.PMUserId.getText());
      expect(testdatafromexcel.testConfig.FlukeUserRole_OliverRoleID).toBe(await flukes.PMRoleId.getText())

  })
  it('should display Customer User roles, @Sanity,@Regression',async function() {
    await fluke.SelectRoles(data.roles[2]);
    expect(await flukes.CustomerFN.getText()).toContain(testdatafromexcel.testConfig.FlukeUserRole_Bandon_firstname);
    expect(testdatafromexcel.testConfig.FlukeUserRole_Bandon_Id).toBe(await flukes.CustomerId.getText())
    expect(testdatafromexcel.testConfig.FlukeUserRole_Bandon_UserId).toBe(await flukes.CustomerUserId.getText())
    expect(testdatafromexcel.testConfig.FlukeUserRole_Bandon_RoleId).toBe(await flukes.CustomerRoleId.getText())


  })
  it('should display Site Manager User roles, @Sanity,@Smoke,@Regression',async function() {
    await fluke.SelectRoles(data.roles[3]);
    expect(await flukes.SMFirstName.getText()).toContain(testdatafromexcel.testConfig.FlukeUserRole_Austin_FirstName);
     expect(testdatafromexcel.testConfig.FlukeUserRole_Austin_Id).toBe(await flukes.SMId.getText())
     expect(testdatafromexcel.testConfig.FlukeUserRole_Austin_UserId).toBe(await flukes.SMUserId.getText())
     expect(testdatafromexcel.testConfig.FlukeUserRole_Austin_RoleId).toBe(await flukes.SMRoleId.getText())


  })
  it('should display Owner User roles, @Sanity,@Smoke,@Regression',async function() {
    await fluke.SelectRoles(data.roles[4]);
    expect(await flukes.OwnerFN.getText()).toContain(testdatafromexcel.testConfig.FlukeUserRole_Lambert_FirstName);
     expect(testdatafromexcel.testConfig.FlukeUserRole_Lambert_Id).toBe(await flukes.OwnerID.getText())
     expect(testdatafromexcel.testConfig.FlukeUserRole_Lambert_UserId).toBe(await flukes.OwnerUserID.getText())
     expect(testdatafromexcel.testConfig.FlukeUserRole_Lambert_RoleId).toBe(await flukes.OwnerRoleId.getText())


  })
  it('should display Admin User roles, @Sanity,@Smoke,@Regression',async function() {
    await fluke.SelectRoles(data.roles[5]);
    expect(await flukes.AdminFN.getText()).toContain(testdatafromexcel.testConfig.FlukeUserRole_Joseph_FirstName);
     expect(testdatafromexcel.testConfig.FlukeUserRole_Joseph_Id).toBe(await flukes.AdminId.getText())
     expect(testdatafromexcel.testConfig.FlukeUserRole_Joseph_UserId).toBe(await flukes.AdminUserId.getText())
     expect(testdatafromexcel.testConfig.FlukeUserRole_Joseph_RoleId).toBe(await flukes.AdminRoleId.getText())


  })
});