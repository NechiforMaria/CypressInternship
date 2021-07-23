

describe('Register and log in to-do app', () => {
  beforeEach(() => {
    
    cy.visit('/')
  })

  it('Test Case', () => {
    cy.log("Hii!")
  })

  it('Register with correct data', () => {
    cy.get('#customer_menu_top').click();
    cy.get('#accountFrm > fieldset > button').click();
    cy.get('#AccountFrm_firstname').type('New');
    cy.get('#AccountFrm_lastname').type('User');
    cy.get('#AccountFrm_email').type('email.valid.nou200@gmail.com');
    cy.get('#AccountFrm_telephone').type('0756892576');
    cy.get('#AccountFrm_fax').type('0756892576');
    cy.get('#AccountFrm_company').type('My company srl');
    cy.get('#AccountFrm_address_1').type('Suceava');
    cy.get('#AccountFrm_address_2').type('Bucuresti');
    cy.get('#AccountFrm_city').type('Suceava');
    cy.get('#AccountFrm_country_id').select('Romania').should('have.value','175');
    cy.get('#AccountFrm_zone_id').select('Arad').should('have.value','2680');
    cy.get('#AccountFrm_postcode').type('5666');
    cy.get('#AccountFrm_loginname').type('contulmeu44');
    cy.get('#AccountFrm_password').type('parola123');
    cy.get('#AccountFrm_confirm').type('parola123');
    cy.get('#AccountFrm > div:nth-child(11) > fieldset > div > div > label:nth-child(1)').click();
    cy.get('#AccountFrm_agree').click();
    cy.get('#AccountFrm > div.form-group > div > div > button').click();
    cy.get('#maincontainer').click();
    cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > h1 > span.maintext').should('be.visible').contains('YOUR ACCOUNT HAS BEEN CREATED!')
  
  })

  it('Login with valid account', () => {
      cy.get('#customer_menu_top').click();
      cy.get('#loginFrm_loginname').type('contulmeunou');
      cy.get('#loginFrm_password').type('parola123');
      cy.get('#loginFrm > fieldset > button').click();
      cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > h1 > span.maintext').should('be.visible').contains(' My Account')
      
  })


it('Register with invalid email', () => {
  cy.get('#customer_menu_top').click();
  cy.get('#accountFrm > fieldset > button').click();
  cy.get('#AccountFrm_firstname').type('123');
  cy.get('#AccountFrm_lastname').type('User');
  cy.get('#AccountFrm_email').type('email.invalid');
  cy.get('#AccountFrm_telephone').type('0756892576');
  cy.get('#AccountFrm_fax').type('0756892576');
  cy.get('#AccountFrm_company').type('My company srl');
  cy.get('#AccountFrm_address_1').type('Suceava');
  cy.get('#AccountFrm_address_2').type('Bucuresti');
  cy.get('#AccountFrm_city').type('Suceava');
  cy.get('#AccountFrm_country_id').select('Romania').should('have.value','175');
  cy.get('#AccountFrm_zone_id').select('Alba').should('have.value','2679');
  cy.get('#AccountFrm_postcode').type('5666');
  cy.get('#AccountFrm_loginname').type('contulmeunouu');
  cy.get('#AccountFrm_password').type('parola123');
  cy.get('#AccountFrm_confirm').type('parola123');
  cy.get('#AccountFrm > div:nth-child(11) > fieldset > div > div > label:nth-child(1)').click();
  cy.get('#AccountFrm_agree').click();
  cy.get('#AccountFrm > div.form-group > div > div > button').click();
  cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger').contains('Email Address does not appear to be valid!');
  
})


it('Register with invalid phone number', () => {
  cy.get('#customer_menu_top').click();
  cy.get('#accountFrm > fieldset > button').click();
  cy.get('#AccountFrm_firstname').type('123');
  cy.get('#AccountFrm_lastname').type('User');
  cy.get('#AccountFrm_email').type('email.nooou@gmail.com');
  cy.get('#AccountFrm_telephone').type('0756');
  cy.get('#AccountFrm_fax').type('0756');
  cy.get('#AccountFrm_company').type('My company srl');
  cy.get('#AccountFrm_address_1').type('Suceava');
  cy.get('#AccountFrm_address_2').type('Bucuresti');
  cy.get('#AccountFrm_city').type('Suceava');
  cy.get('#AccountFrm_country_id').select('Romania').should('have.value','175');
  cy.get('#AccountFrm_zone_id').select('Alba').should('have.value','2679');
  cy.get('#AccountFrm_postcode').type('5666');
  cy.get('#AccountFrm_loginname').type('conttulmeunouunout');
  cy.get('#AccountFrm_password').type('parola123');
  cy.get('#AccountFrm_confirm').type('parola123');
  cy.get('#AccountFrm > div:nth-child(11) > fieldset > div > div > label:nth-child(1)').click();
  cy.get('#AccountFrm_agree').click();
  cy.get('#AccountFrm > div.form-group > div > div > button').click(); 
  //bug: Phone number is incorrect 
 
}) 


it('Register with invalid name', () => {
  cy.get('#customer_menu_top').click();
  cy.get('#accountFrm > fieldset > button').click();
  cy.get('#AccountFrm_lastname').type('User');
  cy.get('#AccountFrm_email').type('email1@gmail.com');
  cy.get('#AccountFrm_telephone').type('0756892585');
  cy.get('#AccountFrm_fax').type('0756892585');
  cy.get('#AccountFrm_company').type('My company srl');
  cy.get('#AccountFrm_address_1').type('Suceava');
  cy.get('#AccountFrm_address_2').type('Bucuresti');
  cy.get('#AccountFrm_city').type('Suceava');
  cy.get('#AccountFrm_country_id').select('Romania').should('have.value','175');
  cy.get('#AccountFrm_zone_id').select('Alba').should('have.value','2679');
  cy.get('#AccountFrm_postcode').type('5666');
  cy.get('#AccountFrm_loginname').type('noulmeucont');
  cy.get('#AccountFrm_password').type('parola123');
  cy.get('#AccountFrm_confirm').type('parola123');
  cy.get('#AccountFrm > div:nth-child(11) > fieldset > div > div > label:nth-child(1)').click();
  cy.get('#AccountFrm_agree').click();
  cy.get('#AccountFrm > div.form-group > div > div > button').click();
  cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger').contains('First Name must be between 1 and 32 characters!');
}) 

it('Register with invalid name >32', () => {
  cy.get('#customer_menu_top').click();
  cy.get('#accountFrm > fieldset > button').click();
  cy.get('#AccountFrm_firstname').type('12312311111111111111111112222222222');
  cy.get('#AccountFrm_lastname').type('User');
  cy.get('#AccountFrm_email').type('email@gmail.com');
  cy.get('#AccountFrm_telephone').type('0756892585');
  cy.get('#AccountFrm_fax').type('0756892585');
  cy.get('#AccountFrm_company').type('My company srl');
  cy.get('#AccountFrm_address_1').type('Suceava');
  cy.get('#AccountFrm_address_2').type('Bucuresti');
  cy.get('#AccountFrm_city').type('Suceava');
  cy.get('#AccountFrm_country_id').select('Romania').should('have.value','175');
  cy.get('#AccountFrm_zone_id').select('Alba').should('have.value','2679');
  cy.get('#AccountFrm_postcode').type('5666');
  cy.get('#AccountFrm_loginname').type('noulmeucont');
  cy.get('#AccountFrm_password').type('parola123');
  cy.get('#AccountFrm_confirm').type('parola123');
  cy.get('#AccountFrm > div:nth-child(11) > fieldset > div > div > label:nth-child(1)').click();
  cy.get('#AccountFrm_agree').click();
  cy.get('#AccountFrm > div.form-group > div > div > button').click();
  cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger').contains('First Name must be between 1 and 32 characters!');
  cy.get('.help-block').contains('First Name must be between 1 and 32 characters!');

}) 


it('Register with invalid login name', () => {
  cy.get('#customer_menu_top').click();
  cy.get('#accountFrm > fieldset > button').click();
  cy.get('#AccountFrm_firstname').type('Cont123');
  cy.get('#AccountFrm_lastname').type('User');
  cy.get('#AccountFrm_email').type('email@gmail.com');
  cy.get('#AccountFrm_telephone').type('0756892585');
  cy.get('#AccountFrm_fax').type('0756892585');
  cy.get('#AccountFrm_company').type('My company srl');
  cy.get('#AccountFrm_address_1').type('Suceava');
  cy.get('#AccountFrm_address_2').type('Bucuresti');
  cy.get('#AccountFrm_city').type('Suceava');
  cy.get('#AccountFrm_country_id').select('Romania').should('have.value','175');
  cy.get('#AccountFrm_zone_id').select('Alba').should('have.value','2679');
  cy.get('#AccountFrm_postcode').type('5666');
  cy.get('#AccountFrm_loginname').type('cont');
  cy.get('#AccountFrm_password').type('parola123');
  cy.get('#AccountFrm_confirm').type('parola123');
  cy.get('#AccountFrm > div:nth-child(11) > fieldset > div > div > label:nth-child(1)').click();
  cy.get('#AccountFrm_agree').click();
  cy.get('#AccountFrm > div.form-group > div > div > button').click();
  cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger').contains('Login name must be alphanumeric only and between 5 and 64 characters!');
  cy.get('#AccountFrm > div:nth-child(9) > fieldset > div:nth-child(1) > span').contains('Login name must be alphanumeric only and between 5 and 64 characters!');

}) 



it('Register with invalid password confirm', () => {
  cy.get('#customer_menu_top').click();
  cy.get('#accountFrm > fieldset > button').click();
  cy.get('#AccountFrm_firstname').type('Cont123');
  cy.get('#AccountFrm_lastname').type('User');
  cy.get('#AccountFrm_email').type('email1@gmail.com');
  cy.get('#AccountFrm_telephone').type('0756892585');
  cy.get('#AccountFrm_fax').type('0756892585');
  cy.get('#AccountFrm_company').type('My company srl');
  cy.get('#AccountFrm_address_1').type('Suceava');
  cy.get('#AccountFrm_address_2').type('Bucuresti');
  cy.get('#AccountFrm_city').type('Suceava');
  cy.get('#AccountFrm_country_id').select('Romania').should('have.value','175');
  cy.get('#AccountFrm_zone_id').select('Alba').should('have.value','2679');
  cy.get('#AccountFrm_postcode').type('5666');
  cy.get('#AccountFrm_loginname').type('cont');
  cy.get('#AccountFrm_password').type('parola123');
  cy.get('#AccountFrm_confirm').type('parola1234');
  cy.get('#AccountFrm > div:nth-child(11) > fieldset > div > div > label:nth-child(1)').click();
  cy.get('#AccountFrm_agree').click();
  cy.get('#AccountFrm > div.form-group > div > div > button').click();
 cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger').contains('Password confirmation does not match password!');
 cy.get('#AccountFrm > div:nth-child(9) > fieldset > div.form-group.has-error > span').contains('Password confirmation does not match password!');

}) 

it('Register with empty fields', () => {
  cy.get('#customer_menu_top').click();
  cy.get('#accountFrm > fieldset > button').click();
  cy.get('#AccountFrm > div:nth-child(11) > fieldset > div > div > label:nth-child(1)').click();
  cy.get('#AccountFrm_agree').click();
  cy.get('#AccountFrm > div.form-group > div > div > button').click();
  cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger').contains('Login name must be alphanumeric only and between 5 and 64 characters!')
  .contains('First Name must be between 1 and 32 characters!')
  .contains('Last Name must be between 1 and 32 characters!')
  .contains('Email Address does not appear to be valid!')
  .contains('Address 1 must be between 3 and 128 characters!')
  .contains('City must be between 3 and 128 characters!')
  .contains('Zip/postal code must be between 3 and 10 characters!')
  .contains('Please select a region / state!')
  .contains('Password must be between 4 and 20 characters!');
  
}) 

it('Login with invalid login name', () => {
  cy.get('#customer_menu_top').click();
  cy.get('#loginFrm_loginname').type('cont');
  cy.get('#loginFrm_password').type('parola123');
  cy.get('#loginFrm > fieldset > button').click();
  cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger').should('be.visible').contains('Error: Incorrect login or password provided.');
})

it('Login with invalid password', () => {
  cy.get('#customer_menu_top').click();
  cy.get('#loginFrm_loginname').type('contulmeunou');
  cy.get('#loginFrm_password').type('parola123456');
  cy.get('#loginFrm > fieldset > button').click();
  cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger').should('be.visible').contains('Error: Incorrect login or password provided.');
})

it('Login with empty fields', () => {
  cy.get('#customer_menu_top').click();
  cy.get('#loginFrm > fieldset > button').click();
  cy.get('#maincontainer > div > div > div > div.alert.alert-error.alert-danger').should('be.visible').contains('Error: Incorrect login or password provided.');
 
})

})