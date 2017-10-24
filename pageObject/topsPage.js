var TopsPage = function TopsPage(){
    
        this.URL = "http://automationpractice.com/index.php?id_category=4&controller=category";
        this.topsLink = element(By.css("#categories_block_left > div > ul > li:nth-child(1) > a"));
        this.productLink = element(By.css("#center_column > ul > li:first-child  a.product_img_link"));
        
    }
    module.exports = TopsPage;