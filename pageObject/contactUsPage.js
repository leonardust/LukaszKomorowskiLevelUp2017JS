var ContactUsPage = function ContactUsPage(){
    
        var customerServiceLabel = element(By.css("#center_column > h1"));
        this.subjectHeading = element(By.css("#uniform-id_contact"));
        this.sendButton = element(By.css("#submitMessage"));
        
        this.getCustomerServiceLabelText = function(){
            return customerServiceLabel.getText();
        }
    }

    module.exports = ContactUsPage;