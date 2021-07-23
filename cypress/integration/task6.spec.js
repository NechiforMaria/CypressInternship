import {LogInPage, RegisterPage} from "./POM.spec.js";


describe('Sign In', () => {
  it('should show an error message on empty input', () => {
        LogInPage.visit();
        LogInPage.enterpage().click();
        LogInPage.getLoginName().type('contulmeunou');
        LogInPage.getPassword().type('parola123');
        LogInPage.Button().click();
        LogInPage.Validation().contains(' My Account')
  
});

    it('Register', ()=>{
        RegisterPage.visit();
        RegisterPage.enterpage().click();
        RegisterPage.buttoncontinue().click()
        RegisterPage.getfirstname().type('New');
        RegisterPage.getlastname().type('User');
        RegisterPage.getemail().type('new@gmail.com');
        RegisterPage.getphone().type('0756892576');
        RegisterPage.getfax().type('0756892576');
        RegisterPage.getAddress1().type('Str. Starda, Nr. 15');
        RegisterPage.getCity().type('Bucuresti');
        RegisterPage.getCountry().select('Romania').should('have.value','175');
        RegisterPage.getZoneId().select('Alba').should('have.value','2679');
        RegisterPage.getPostCode().type('4569');
        RegisterPage.getLoginName().type('contulmeu500');
        RegisterPage.getPassword().type('parola1236');
        RegisterPage.getConfirmPassword().type('parola1236');
        RegisterPage.getAgreeButton().click();
        RegisterPage.getYesButton().click();
        RegisterPage.getContinueButton().click();
    
    })
      
  
});
