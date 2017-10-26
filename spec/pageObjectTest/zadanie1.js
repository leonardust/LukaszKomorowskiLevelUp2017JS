var HomePage = require(pageObjectDir + "/homePage.js")
var WomenPage = require(pageObjectDir + "/womenPage.js")
var TopsPage = require(pageObjectDir + "/topsPage.js")
var ProductPage = require(pageObjectDir + "/productPage")
var CartPage = require(pageObjectDir + "/cartPage")

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

describe('Adding product to the cart Test', function () {
    it('Should open Home Page', function () { 
        homePage.get();       
    });
    it("Should click womenLink.", function() {
        homePage.clickWomenLink();
        expect(browser.getTitle()).toEqual("Women - My Store");
    });
    it("Should click topsLink.", function(){
        womenPage.clickTopsLink();
        expect(browser.getTitle()).toEqual("Tops - My Store");
    });
    it("Should open Faded Short Sleeve T-Shirt.", function(){
        topsPage.clickProductLink();
        expect(browser.getTitle()).toEqual("Faded Short Sleeve T-shirts - My Store");
    });
    it("Description should longer than 8.", function(){
        expect(isDescriptionLongerThan(8)).toBe(true);
    });
    it("Product condition should New.", function(){
        expect(productPage.getProductConditionLabelText()).toEqual("New");
    });
    it("Add product in size m to the cart.", function(){
        productPage.clickSizeOption();
        expect(productPage.getSelectedSizeText()).toEqual("M")
        productPage.clickAddToCartButton();
    });
    it("Should go to the cart.", function(){
        browser.wait(function() {
            return productPage.imagePopUp.isPresent()}); 
            productPage.clickProceedToCheckoutButton();
    });
    it("Should add correct product to the cart.", function(){ 
        expect(cartPage.getProductLabelText()).toEqual("Faded Short Sleeve T-shirts");    
    });
});