var ProductPage = function ProductPage(){
    
        var productConditionLabel = element(By.css("#product_condition > span"));
        var sizeOption = element(By.css("#group_1 > option:nth-child(2)"));
        var addToCartButton = element(By.css("#add_to_cart > button"));
        var proceedToCheckoutButton = element(By.css("#layer_cart > div.clearfix > div:nth-child(2)> div.button-container > a"));
        var selectedSizeText = element(By.css("#uniform-group_1 > span"));
        this.imagePopUp = element(By.css("#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > div.product-image-container.layer_cart_img > img"));
        this.productDescription = element(By.css("#short_description_content > p"));
        
        this.clickSizeOption = function(){
            sizeOption.click();
        };
        this.clickAddToCartButton = function(){
            addToCartButton.click();
        };
        this.clickProceedToCheckoutButton = function (){
            proceedToCheckoutButton.click();
        };
        this.getProductConditionLabelText = function(){
           return productConditionLabel.getText();
        };
        this.getSelectedSizeText = function(){
           return selectedSizeText.getText();
        };
    }
    module.exports = ProductPage;