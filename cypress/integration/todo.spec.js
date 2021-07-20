

describe('Register and log in to-do app', () => {
  beforeEach(() => {
    
    cy.visit('https://automationteststore.com/')
  })

  it('Test Case', () => {
    cy.log("Hii!")
  })
/*
  it('Register', () => {
    cy.get('#customer_menu_top').click();
    cy.get('#accountFrm > fieldset > button').click();
    cy.get('#AccountFrm_firstname').type('New');
    cy.get('#AccountFrm_lastname').type('User');
    cy.get('#AccountFrm_email').type('email.valid@gmail.com');
    cy.get('#AccountFrm_telephone').type('0756892576');
    cy.get('#AccountFrm_fax').type('0756892576');
    cy.get('#AccountFrm_company').type('My company srl');
    cy.get('#AccountFrm_address_1').type('Suceava');
    cy.get('#AccountFrm_address_2').type('Bucuresti');
    cy.get('#AccountFrm_city').type('Suceava');
    cy.get('#AccountFrm_country_id').select('Romania').should('have.value','175');
    cy.get('#AccountFrm_zone_id').select('Alba').should('have.value','2679');
    cy.get('#AccountFrm_postcode').type('5666');
    cy.get('#AccountFrm_loginname').type('contulmeuu');
    cy.get('#AccountFrm_password').type('parola123');
    cy.get('#AccountFrm_confirm').type('parola123');
    cy.get('#AccountFrm > div:nth-child(11) > fieldset > div > div > label:nth-child(1)').click();
    cy.get('#AccountFrm_agree').click();
    cy.get('#AccountFrm > div.form-group > div > div > button').click();
    cy.get('#maincontainer').click();
  })
*/
/*
  it('Login', () => {
      cy.get('#customer_menu_top').click();
      cy.get('#loginFrm_loginname').type('contulmeunou');
      cy.get('#loginFrm_password').type('parola123');
      cy.get('#loginFrm > fieldset > button').click();
  })
*/

it('Register', () => {
  cy.get('#customer_menu_top').click();
  cy.get('#accountFrm > fieldset > button').click();
  cy.get('#AccountFrm_firstname').type('123');
  cy.get('#AccountFrm_lastname').type('User');
  cy.get('#AccountFrm_email').type('email.validdd@gmail.com');
  cy.get('#AccountFrm_telephone').type('0756892576');
  cy.get('#AccountFrm_fax').type('0756892576');
  cy.get('#AccountFrm_company').type('My company srl');
  cy.get('#AccountFrm_address_1').type('Suceava');
  cy.get('#AccountFrm_address_2').type('Bucuresti');
  cy.get('#AccountFrm_city').type('Suceava');
  cy.get('#AccountFrm_country_id').select('Romania').should('have.value','175');
  cy.get('#AccountFrm_zone_id').select('Alba').should('have.value','2679');
  cy.get('#AccountFrm_postcode').type('5666');
  cy.get('#AccountFrm_loginname').type('contulmeuuuu');
  cy.get('#AccountFrm_password').type('parola123');
  cy.get('#AccountFrm_confirm').type('parola123');
  cy.get('#AccountFrm > div:nth-child(11) > fieldset > div > div > label:nth-child(1)').click();
  cy.get('#AccountFrm_agree').click();
  cy.get('#AccountFrm > div.form-group > div > div > button').click();
  cy.get('#maincontainer').click();
})

})