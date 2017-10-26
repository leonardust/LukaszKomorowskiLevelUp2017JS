var WomenPage = function WomenPage(){
    
        var topsLink = element(By.css("#categories_block_left > div > ul > li:nth-child(1) > a"));
        
        this.clickTopsLink = function(){
            topsLink.click();
        };
    }
    module.exports = WomenPage;