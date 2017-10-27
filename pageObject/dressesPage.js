var DressesPage = function DressesPage() {

    this.dress1 = element(By.css("#center_column  li:first-child  a.product_img_link"));
    this.dress2 = element(By.css("#center_column li:nth-child(2) a.product_img_link"));
    this.dress3 = element(By.css("#center_column li:nth-child(3) a.product_img_link"));
    this.dress4 = element(By.css("#center_column li:nth-child(4) a.product_img_link"));
    this.dress5 = element(By.css("#center_column li:nth-child(5) a.product_img_link"));
    this.actualName = $("#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1");
    this.actualPrice = $("#our_price_display");

    this.get = function () {
        browser.get("http://automationpractice.com/index.php?id_category=8&controller=category");

    }
}
module.exports = DressesPage;