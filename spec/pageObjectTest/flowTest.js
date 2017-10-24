var HomePage = require(pageObjectDir + "/contactUsPage.js");

var homePage = new HomePage();

var contactUsPage = new ContactUsPage();

describe('Contact us Pagetest', function () {
    it('open page', function () {
        browser.waitForAngularEnabled(false); 
        browser.get(homePage.URL);
        homePage.contactUsLink.click();
    });
    ///it("should click contactUsLink", function() {
       // browser.waitForAngularEnabled(false);

    //});
});