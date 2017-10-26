var HomePage = function HomePage(){

    var contactUsLink = element(By.css("#contact-link > a"));
    var womenLink = element(By.css("#block_top_menu > ul > li:nth-child(1) > a"));
    var dressesLink = element(By.css("#block_top_menu > ul > li:nth-child(2) > a"));

    this.get = function(){
        browser.get("http://automationpractice.com/index.php");
    }
    this.clickContactUsLink = function(){
        contactUsLink.click();
    };
    this.clickWomenLink = function(){
        womenLink.click();
    };
    
    this.clickDressesLink = function(){
        dressesLink.click();
    };
    
    
}
module.exports = HomePage;