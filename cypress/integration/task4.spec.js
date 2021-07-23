describe('API Testing', () => {
    it('Read',()=>{
        cy.request('GET', 'https://petstore.swagger.io/v2/store/inventory').then((response)=>{
        expect(response).to.have.property('status',200)
        expect(response.body).to.not.be.null    
        Object.entries(response.body).forEach(element=>{
            cy.log(element)
        })
        Cypress.Screenshot.defaults(options)
    })
    })
     
    /*
    it.only('Read2',()=>{
        const item={"sold","string","pending":"6","available":"761","StatusJvR":"2"}
        cy.request('POST','https://petstore.swagger.io/v2/store/inventory',  item)
    })*/
 })   