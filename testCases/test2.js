
var m2generalObjects = require('../pageObjects/generalObjects.js');

describe('Test Error', function() {
    

    beforeEach(function () {
      browser.driver.manage().window().maximize();

    });


    it('Should display correct content', function() {
        var ptor;
        ptor = browser;
        browser.driver.manage().window().maximize();
        ptor.manage().deleteAllCookies();
        ptor.get(ptor.baseUrl);
        expect(element(m2generalObjects.text1).getText()).toContain('address');
    });
});