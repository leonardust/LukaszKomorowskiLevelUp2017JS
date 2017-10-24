var ContactUsPage = function ContactUsPage(){
    
        this.URL = "http://automationpractice.com/index.php?controller=contact"
    
        this.contactUsHeader = element(By.css("#center_column > h1"));
        this.dropdownSelect = element(By.css("#id_contact"));
        this.submitButton = element(By.css("#submitMessage"));
        
    }
    module.exports = ContactUsPage;