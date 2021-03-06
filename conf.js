  
var jasmineReporters = require('jasmine-reporters');
var HTMLReport = require('protractor-html-reporter-2');
var fs = require('fs-extra');
var xcelToJson = require('../Fluke_Assignment/TestData/xcelToJason');

console.log(xcelToJson.testConfig.applicationUrl_ID);

//To run in QA :   protractor conf.js --suite smoke/regression --parameters.url.qa
exports.config = {
    directConnect: true,
    
    /**
    * If true, Protractor will connect directly to the browser Drivers. Only Chrome and Firefox are supported for direct connect.
    * default: false
    */
    framework: 'jasmine',
    allScriptTimeout: 60000, //1 min
    multiCapabilities: [
        { 'browserName': 'chrome' },
        // { 'browserName': 'firefox' },
    ],
    jasmineNodeOpts: {
        showColors: true, //In your terminal it will show the colors
        defaultTimeoutInterval: 60000,
    },
   
    onPrepare: function () {
     
        browser.driver.manage().window().maximize();
         browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './reports/xml',
            filePrefix: 'xmlresults',
           
            
        }));

        /**
        * @description
        * create directory for reports
        */
        fs.emptyDir('./reports/screenshots', function (err) {
            console.log(err);
        });

        //In order to obtain screenshots on failure you can use this piece of code  & put it in onPrepare.
        jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('./reports/screenshots/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });


    },
    //HTMLReport called once tests are finished
    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './reports/',
                outputFilename: 'ProtractorReportQA_Automation',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('./reports/xml/xmlresults.xml', testConfig);
        });
    },


    suites:{
        api :['TestSuites/UserRolesTestCases.js',
        'TestSuites/ProjectsTestCases.js'] 
    }

    
};
