
var m2generalObjects = require('../pageObjects/generalObjects.js');

describe('Test Error', function() {
    var ptor;
    browser.driver.manage().window().maximize();

    beforeEach(function () {
        ptor = browser;
    });

    it('Should display correct content', function() {
        ptor.manage().deleteAllCookies();
        ptor.get(ptor.baseUrl);
        expect(element(m2generalObjects.text1).getText()).toContain('address');
    });
});