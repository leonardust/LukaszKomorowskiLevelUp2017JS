beforeAll( function () {//kod który wykona sie przed wszystkim jasmine
    
});
beforeEach(function() {//kod ktory wykona się przed kazdym testem jasmine

});
afterAll(function() {//kod ktory wykona się po wszystkim jasmine
    
});
afterEach(function() {//kod ktory wykona się po kazdym tescie jasmine

});
describe('Protractor Demo App', function () {//jasmine
    it('should have a title', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
        expect(browser.findElement(By.css(".shopping_cart"))//expect = assert,jasmine
            .getText())//expected
            .toEqual("Cart (empty)");//actual
    });
});