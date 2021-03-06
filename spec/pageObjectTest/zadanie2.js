var HomePage = require(pageObjectDir + "/homePage.js")
var DressesPage = require(pageObjectDir + "/dressesPage.js")
//var TestDataPage = require(pageObjectDir + "/testDataPage")
var homePage = new HomePage();
var dressesPage = new DressesPage();
//var testDataPage = new TestDataPage();

var data = {
    "dress1":{
        "cssSelector":"dress1",
        "name":"Printed Dress",
        "price": "$26.00",       							
    },
    "dress2":{
        "cssSelector":"dress2",
        "name":"Printed Dress",
        "price": "$50.99"								
    },
    "dress3":{
        "cssSelector":"dress3",
        "name":"Printed Summer Dress",
        "price": "$28.98"
    },
    "dress4":{
        "cssSelector":"dress4",
        "name":"Printed Summer Dress",
        "price": "$30.50"	
    },
    "dress5":{
        "cssSelector":"dress5",
        "name":"Printed Chiffon Dress",
        "price": "$16.40"	
    }	
}

var getProductLabelText = function(element){
    return new Promise(function(resolve){
        element.getText().then(function(text){
            resolve(text);
        })
    });
}

describe('Compare product names and prices Test.', function () {
    beforeAll( function () {
        dressesPage.get();
        expect(browser.getTitle()).toEqual("Dresses - My Store");
    });
    using(data,function(dress){
        it('Should have correct name.', function (){
            dressesPage[dress.cssSelector].click();
            expect(getProductLabelText(dressesPage.actualName)).toEqual(dress.name);
        });
        it('Should have correct price', function (){
            expect(getProductLabelText(dressesPage.actualPrice)).toEqual(dress.price);
            browser.navigate().back();
        });
    });
});