import { ContactUs, LogInPage, SocialMedia, Subscribe } from "../support/POM/POM.spec"

describe('Necessary tests', () => {
    beforeEach(() => {
      
        LogInPage.visit();
        
    })

    it('Social Media',()=>{
    
        SocialMedia.facebook().then(($a)=>{
        const url= $a.prop('href')
        cy.request(url).then((a)=>{
        expect(a).to.have.property('status',200)
   })
   }) 

   SocialMedia.twitter().then(($a)=>{
    const url= $a.prop('href')
    cy.request(url).then((a)=>{
     expect(a).to.have.property('status',200)
})
}) 

    SocialMedia.linkedin().then(($a) => {
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
    Subscribe.buttonSubscribe().click()
    Subscribe.getFirstName().type('Ana')
    Subscribe.getLastName().type('User')
    Subscribe.getEmail().type('email@gmail.com')
    Subscribe.captcha().type(r);
    Subscribe.buttonContinue().click()
    Subscribe.geterror().should('be.visible').contains('Human verification has failed! Please try agan.');
})


it('Contact Us',()=>{
    ContactUs.buttonContact().click()
    ContactUs.getFirstName().type('Ana')
    ContactUs.getEmail().type('email@gmail.com')
    ContactUs.Enquiry().type('Good job! :)')
    ContactUs.buttonSubmit().click()
    ContactUs.geterror().should('be.visible').contains('Your enquiry has been successfully sent to the store owner!')

})

})