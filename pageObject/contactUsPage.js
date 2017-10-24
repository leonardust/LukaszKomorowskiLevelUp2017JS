var ContactUsPage = function ContactUsPage(){
    
        this.URL = "http://automationpractice.com/index.php?controller=contact" 
        this.customerService = element(By.css("#center_column > h1"));
        this.subjectHeading = element(By.css("#uniform-id_contact"));
        this.sendButton = element(By.css("#submitMessage"));
        
    }
    module.exports = ContactUsPage;