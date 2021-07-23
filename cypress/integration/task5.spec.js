describe('Register and log in to-do a', () => {
    beforeEach(() => {
      
        cy.visit('/')
    })
it('Social Media',()=>{
    

   cy.get('body > div > header > div.container-fluid > div > div.block_8 > div > div > a.facebook').then(($a)=>{
       const url= $a.prop('href')
       cy.request(url).then((a)=>{
        expect(a).to.have.property('status',200)
   })
   }) 

   cy.get('body > div > header > div.container-fluid > div > div.block_8 > div > div > a.twitter').then(($a)=>{
    const url= $a.prop('href')
    cy.request(url).then((a)=>{
     expect(a).to.have.property('status',200)
})
}) 

    cy.get('body > div > header > div.container-fluid > div > div.block_8 > div > div > a.linkedin').then(($a) => {
        const url = $a.prop('href')
        cy.request(url).then((a)=>{
        expect(a).to.have.property('status',200)
    
     })
})
})


let number
it('Subscribe', ()=>{
    let r = Math.random().toString(36).substring(6);
    cy.log("random", r);
    cy.get('#subscribeFrm > div > span > button').click()
   cy.get('#SubscriberFrm_firstname').type('Ana')
   cy.get('#SubscriberFrm_lastname').type('User')
   cy.get('#SubscriberFrm_email').type('email@gmail.com')
   cy.get('#SubscriberFrm_captcha').type(r);
   cy.get('#SubscriberFrm > div.form-group > div > div.pull-right.col-md-4 > button').click()
   cy.get('#SubscriberFrm > div.registerbox.form-horizontal > fieldset > div.form-group.has-error > span').should('be.visible').contains('Human verification has failed! Please try agan.');
})


it('Contact Us',()=>{
    cy.get('#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a').click()
    cy.get('#ContactUsFrm_first_name').type('Ana')
    cy.get('#ContactUsFrm_email').type('email@gmail.com')
    cy.get('#ContactUsFrm_enquiry').type('Good job! :)')
    cy.get('#ContactUsFrm > div.form-group > div.col-md-6.col-sm-6 > button').click()
    cy.get('#maincontainer > div > div > div > div > section > p:nth-child(3)').should('be.visible').contains('Your enquiry has been successfully sent to the store owner!')

})

})