var HomePage = require(pageObjectDir + "/homePage.js");

var homePage = new HomePage();

describe('Protractor Demo App', function () {
    it('should have a title', function () {
        //browser.waitForAngularEnabled(false); refers to 
        browser.get(homePage.URL);
        
        expect(homePage.cartLabel.getText())
            .toEqual("Cart (empty)");
    });
});