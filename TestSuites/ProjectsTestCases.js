const { browser, element } = require("protractor");
var testdatafromexcel = require('../TestData/xcelToJason')
var flukes = require("../POM/RolesAndProjects")
var fluke = require("../Utils/CommonMethods")
var data = require("../TestData/testData.json");
const { testConfig } = require("../TestData/xcelToJason");


describe('User Role homepage todo list', function () {
  beforeAll(async () => {

    await fluke.getURL();
    await fluke.waitForEleForVisible(flukes.ClickOnProjectsTab)
    await flukes.ClickOnProjectsTab.click()
    browser.sleep(3000)
  })
  beforeEach(async () => {
    await fluke.implicityWait()
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000000;
    await fluke.waitForEleForVisible(await flukes.ClickOnRolesDropDown)
    await browser.actions().click(flukes.ClickOnRolesDropDown).perform()



  })
  it('should display "Keith Cabeling Systems" Project details, @Sanity,@Smoke,@Regression', async function () {

    await fluke.SelectProjects(1);
    expect(await flukes.KeithId.getText()).toContain(testdatafromexcel.testConfig.FlukeProject_Keith_Id);
    expect(testdatafromexcel.testConfig.FlukeProject_Keith_OrgId).toBe(await flukes.KeithOrgId.getText());
    expect(testdatafromexcel.testConfig.FlukeProject_Keith_Name).toBe(await flukes.KeithName.getText());
  })



  it('should display "Cameron Networks" Project details, @Sanity,@Smoke,@Regression', async function () {
    await fluke.VerifyProjectsPage()
    await flukes.selectProject.click()
    expect(await flukes.CameronNetworkId.getText()).toContain(testdatafromexcel.testConfig.FlukeProject_CameronNetworks_Id);
    expect(testdatafromexcel.testConfig.FlukeProject_CameronNetworks_OrgId).toBe(await flukes.CameronNetworkOrgId.getText());
    expect(testdatafromexcel.testConfig.FlukeProject_CameronNetworks_Name).toBe(await flukes.CameronNetworkName.getText());

  })
})