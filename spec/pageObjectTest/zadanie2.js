var HomePage = require(pageObjectDir + "/homePage.js")
var WomenPage = require(pageObjectDir + "/womenPage.js")
var TopsPage = require(pageObjectDir + "/topsPage.js")
var ProductPage = require(pageObjectDir + "/productPage")
var CartPage = require(pageObjectDir + "/productPage")

var homePage = new HomePage();
var womenPage = new WomenPage();
var topsPage = new TopsPage();
var productPage = new ProductPage();
var cartPage = new CartPage();

var isDescriptionLongerThan = function(isLongerThan){
    return new Promise(function(resolve){
        productPage.productDescription.getText().then(function(text){
            resolve(text.length > isLongerThan);
        })
    });
}
var getProductLabelText = function(){
    return new Promise(function(resolve){
        cartPage.productTitle.getText().then(function(text){
            resolve(text);
        })
    });
}

describe('Add product to the cart', function () {
    it('Open Home Page', function () {
        //browser.waitForAngularEnabled(false); 
        browser.get(homePage.URL);       
    });
    it("should click womenLink", function() {
        homePage.womenLink.click();
        expect(browser.getTitle()).toEqual("Women - My Store");
    });
    it("should click topsLink", function(){
        womenPage.topsLink.click();
        expect(browser.getTitle()).toEqual("Tops - My Store");
    });
    it("Open Faded Short Sleeve T-Shirt", function(){
        topsPage.productLink.click();
        expect(browser.getTitle()).toEqual("Faded Short Sleeve T-shirts - My Store");
    });
    it("Description should longer than 8", function(){
        expect(isDescriptionLongerThan(8)).toBe(true);
    });
    it("Is product condition new?", function(){
        expect(productPage.productConditionLabel.getText()).toEqual("New");
    });
    it("Add product in size m to the cart ", function(){
        productPage.sizeOption2.click();
        expect(productPage.selectedOptionValue.getText()).toEqual("M")
        productPage.addToCartButton.click();

    });
    it("Should go to cart", function(){
        browser.wait(function() {
            return productPage.imagePopUp.isPresent()}); 
            productPage.proceedToCheckoutButton.click();
    });
    it("Should correct product added", function(){ 
        expect(getProductLabelText()).toEqual("Faded Short Sleeve T-shirts");    
        //expect(cartPage.productTitle.getText()).toEqual("Faded Short Sleeve T-shirts");
    });
});