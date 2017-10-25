var HomePage = require(pageObjectDir + "/homePage.js");
var WomenPage = require(pageObjectDir + "/womenPage.js")

var homePage = new HomePage();
var womenPage = new WomenPage();

/*var isLabelLongerThan = function(isLongerThan){
    return new Promise(function(resolve){
        browser.customerServiceLabel.getText().then(function(text){
            resolve(text.lenght > isLongerThan);
        })
    });
}*/
//isLabelLongerThan(1).then(console.log)

describe('Add product to the cart', function () {
    it('Open Home Page', function () {
        //browser.waitForAngularEnabled(false); 
        browser.get(homePage.URL);       
    });
    it("should click womenLink", function() {
        homePage.womenLink.click();
        expect()
    });
    it("should have a title", function(){
        browser.get(contactUsPage.URL);
        expect(contactUsPage.customerService.getText()).toEqual('CUSTOMER SERVICE - CONTACT US');
    });
    it("should display Subject Heading Dropdown", function(){
        expect(contactUsPage.subjectHeading.isDisplayed()).toBe(true);
    });
    it("should display Send Button", function(){
        expect(contactUsPage.sendButton.isPresent()).toBe(true);
    });
});