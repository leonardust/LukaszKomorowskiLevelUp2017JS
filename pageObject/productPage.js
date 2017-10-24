var ProductPage = function ProductPage(){
    
        this.URL = "http://automationpractice.com/index.php?id_product=1&controller=product";
        this.productConditionLabel = element(By.css("#product_condition"));
        this.productDescription = element(By.css("#short_description_content > p"));
        this.selectorHover = element(By.css("#uniform-group_1"));
        this.sizeOption1 = element(By.css("#group_1 > option:nth-child(1)"));
        this.sizeOption2 = element(By.css("#group_1 > option:nth-child(2)"));
        this.sizeOption3 = element(By.css("#group_1 > option:nth-child(3)"));
        this.addToCartButton = element(By.css("#add_to_cart > button"));
        this.proceedToCheckoutButton = element(By.css("#layer_cart > div.clearfix > div:nth-child(2)> div.button-container > a"));

    }
    module.exports = ProductPage;