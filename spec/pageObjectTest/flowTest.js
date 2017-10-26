var HomePage = require(pageObjectDir + "/homePage.js");
var ContactUsPage = require(pageObjectDir + "/contactUsPage.js")

var homePage = new HomePage();
var contactUsPage = new ContactUsPage();

describe('Contact Us Page Test.', function () {
    it('Open Home Page.', function () {
        homePage.get();       
    });
    it("Should have a title", function(){
        homePage.clickContactUsLink();
        expect(contactUsPage.getCustomerServiceLabelText()).toEqual('CUSTOMER SERVICE - CONTACT US');
    });
    it("Should display Subject Heading Dropdown", function(){
        expect(contactUsPage.subjectHeading.isDisplayed()).toBe(true);
    });
    it("should display Send Button", function(){
        expect(contactUsPage.sendButton.isDisplayed()).toBe(true);
    });
});