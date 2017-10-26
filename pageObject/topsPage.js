var TopsPage = function TopsPage(){
    
        var productLink = element(By.css("#center_column > ul > li:first-child  a.product_img_link"));
        
        this.clickProductLink = function(){
            productLink.click();
        };
    }
    module.exports = TopsPage;