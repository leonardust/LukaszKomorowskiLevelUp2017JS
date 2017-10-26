var ProductPage = function ProductPage(){
    

        this.productConditionLabel = element(By.css("#product_condition > span"));
        this.productDescription = element(By.css("#short_description_content > p"));
        this.sizeOption2 = element(By.css("#group_1 > option:nth-child(2)"));
        this.addToCartButton = element(By.css("#add_to_cart > button"));
        this.proceedToCheckoutButton = element(By.css("#layer_cart > div.clearfix > div:nth-child(2)> div.button-container > a"));
        this.selectedOptionValue = element(By.css("#uniform-group_1 > span"));
        this.imagePopUp = element(By.css("#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > div.product-image-container.layer_cart_img > img"));

    }
    module.exports = ProductPage;