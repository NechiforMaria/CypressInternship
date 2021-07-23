describe('Register and log in to-do a', () => {
    beforeEach(() => {
      
        cy.visit('/')
        //cy.get('#customer_menu_top').click();
        //cy.get('#loginFrm_loginname').type('conttulmeunouunout');
        //cy.get('#loginFrm_password').type('parola123');
        //cy.get('#loginFrm > fieldset > button').click();  
    })
it('Social Media',()=>{
    cy.get('body > div > header > div.container-fluid > div > div.block_8 > div > div > a.facebook').click()
    cy.contains('Facebook').should('have.attr', 'href', 'http://www.facebook.com').should('have.attr', 'target', '_blank')
    cy.log('A new tab opens')

    cy.get('body > div > header > div.container-fluid > div > div.block_8 > div > div > a.twitter').click()
    cy.contains('Twitter').should('have.attr', 'href', 'https://twitter.com/').should('have.attr', 'target', '_blank')
    cy.log('A new tab opens')

    cy.get('body > div > header > div.container-fluid > div > div.block_8 > div > div > a.linkedin').click()
    cy.get('body > nav > a > icon > svg').contains('Linkedin')
    cy.log('A new tab opens')
    
})
/*
let number
it('Subscribe', ()=>{
    cy.get('#subscribeFrm > div > span > button').click()
   cy.get('#SubscriberFrm_firstname').type('Ana')
   cy.get('#SubscriberFrm_lastname').type('User')
   cy.get('#SubscriberFrm_email').type('email@gmail.com')
   cy.get('#SubscriberFrm > div.registerbox.form-horizontal > fieldset > div:nth-child(5)').invoke("text").then((text)=>{
    number=text.substring(text.indexOf(":")+":".length,text.indexOf("Customer Registration"));
    cy.log(number)
})
})
*/
})