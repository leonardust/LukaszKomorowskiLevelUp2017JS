var CartPage = function() {


    this.productTitle = element(By.css("#product_1_3_0_0 > td.cart_description > p > a"));
}

CartPage.prototype.getProductLabelText = function(){
    var that = this;
    return that.productTitle.getText();
}

module.exports = CartPage;