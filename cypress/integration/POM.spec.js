export class LogInPage {
    static visit() {
      return cy.visit('/');
    }
  
    static enterpage() {
      return cy.get('#customer_menu_top');
    }
  
    static getLoginName() {
      return cy.get('#loginFrm_loginname');
    }

    static getPassword()
    {
        return cy.get('#loginFrm_password')
    }

    static Button()
    {
        return cy.get('#loginFrm > fieldset > button')
    }
  
    static Validation()
    {
        return cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > h1 > span.maintext')
    }

    

  }
  
  export class RegisterPage {
    static visit() {
      return cy.visit('/');
    }
  
    static enterpage() {
      return cy.get('#customer_menu_top');
    }

    static buttoncontinue(){
        return cy.get('#accountFrm > fieldset > button');
    }
  
    static getfirstname() {
      return cy.get('#AccountFrm_firstname');
    }

    static getlastname() {
        return cy.get('#AccountFrm_lastname');
    }

    static getemail()   {
        return cy.get('#AccountFrm_email');
    }

    static getphone() {
        return cy.get('#AccountFrm_telephone');
    }

    static getfax() {
        return cy.get('#AccountFrm_fax');
    }

    static getCompany() {
        return cy.get('#AccountFrm_company');
    }

    static getAddress1() {
        return cy.get('#AccountFrm_address_1');
    }

    static getCity() {
        return cy.get('#AccountFrm_city');
    }

    static getCountry() {
        return cy.get('#AccountFrm_country_id');
    }

    static getZoneId() {
        return cy.get('#AccountFrm_zone_id');
    }

    static getPostCode() {
        return cy.get('#AccountFrm_postcode');
    }

    static getLoginName() {
        return cy.get('#AccountFrm_loginname');
    }

    static getPassword() {
        return  cy.get('#AccountFrm_password');
    }

    static getConfirmPassword()
    {
        return cy.get('#AccountFrm_confirm');
    }

    static getAgreeButton()
    {
        return  cy.get('#AccountFrm_agree');
    }

    static getYesButton()
    {
        return cy.get('#AccountFrm > div:nth-child(11) > fieldset > div > div > label:nth-child(1)');
    }

    static getContinueButton()
    {
        return  cy.get('#AccountFrm > div.form-group > div > div > button');
        
    }

    static Button()
    {
        return cy.get('#loginFrm > fieldset > button')
    }
  
    static Validation()
    {
        return cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > h1 > span.maintext')
    }


    

  }
  