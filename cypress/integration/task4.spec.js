describe('API Testing', () => {
    it('Read',()=>{
        cy.request('GET', 'https://petstore.swagger.io/v2/store/inventory').then((response)=>{
        expect(response).to.have.property('status',200)
        expect(response.body).to.not.be.null    
        Object.entries(response.body).forEach(element=>{
            cy.log(element)
        })
        
    })
    })
     
 })   