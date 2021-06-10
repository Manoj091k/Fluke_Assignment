


## TestPlan for User: 

1. Verify to open the URL,
2. Verify the Landing page of User
3. Verify the Header of the Page
4. Verify the Roles dropdown and Content of Roles dropdown by Jasmine assertion and Excel sheet Ierator
5. Verify the Each and evry Roles dropdown options and the data displaying w.r.t Roles
 


## TestPlan for Projects: 
1. Verify to open the URL
2. Verify to navigate the roject Tab
3. Verify the Projects dropdown and the Content of Project dropdown by Jasmine assertion and Excel sheet Ierator


# Installation

1. Install Node from "https://nodejs.org/en/download/"
2. Install npm npm install npm@latest -g
3. Now browse to the project folder ###FLUKE_ASSIGNMENT
4. Now Run "npm init" to create the package.json
5. Now Run "npm install -g protractor" to install the protractor
6. Run Selenium Server "webdriver-manager update"
7. Now start up a server with "webdriver-manager start"
8. TO INSTALL ALL THE DEPENDENCIES AT ONE SHOT "npm install"

# Key Features Developed

1. Excel to jason conversion
2. Itearting from Excel sheet as a Test Data
2. Iterating from json file as a Test Data
3. Maintained with Page Object Model.
4. Report generation by "protractor-html-reporter-2"
5. Capturing screen shots whenever scripts fails
7. Featured Dashboard to analysis the number of test cases fail/pass.

# How to Open Report Dashboard
1. Go to "report" folder
2. Then go to "ProtractorReportQA_Automation.html" file and right click
3. Then click "Reveal in File Explorer" option
4. Then click chrome html document file.


# Packages Installed 
  1.  "convert-excel-to-json": "^1.7.0",
  2.  "fs-extra": "10.0.0",
  3.  "jasmine": "^3.6.1",
  4.  "jasmine-data-provider": "^2.2.0",
  5.  "jasmine-reporters": "^2.4.0",
  6.  "protractor": "^7.0.0",
  7.  "protractor-html-reporter-2": "1.0.4",
  8.  "protractor-xml2html-reporter": "^2.2.0"

## How to Run the Script:

1. Go to terminal and type "protractor conf.js"
2. If you wanted to run Smoke/Sanity/Regression "protractor conf.js --grep=Smoke"
  # Note: For Sanity run: "protractor conf.js --grep=Sanity"
          For Regression run: "protractor conf.js --grep=Regression"



## Bugs:
1. Pagination(List Items displayed) is not working properly w.r.t selecting(changing) the "Items per page"

