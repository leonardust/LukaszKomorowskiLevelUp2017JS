var CartPage = function CartPage(){
    
        this.URL = "http://automationpractice.com/index.php?controller=order";
        this.productTitle = element(By.css("#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a"));
        
    }
    module.exports = CartPage;