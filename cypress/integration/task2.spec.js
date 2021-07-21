describe('Register and log in to-do app', () => {
    beforeEach(() => {
      
      cy.visit('/')
    })

   
it('searching an item', ()=>{
    cy.get('#filter_keyword').click();
    cy.get('#filter_keyword').type('Viva Glam Lipstick');
    cy.get('#search_form > div > div').click();
    cy.get('#product_details > div > div:nth-child(2) > div > div > h1 > span').should('be.visible').contains('Viva Glam Lipstick')
})

it('add an item to cart', ()=>{
    cy.get('#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a > i').click();
    cy.get('#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron.added_to_cart > div.quick_basket > a > i').should('be.visible');
})

it('finalize a purchase', () => {
    cy.get('#block_frame_featured_1769 > div > div:nth-child(2) > div.thumbnail > div.pricetag.jumbotron > a > i').click();
    cy.get('body > div > header > div.container-fluid > div > div.block_7 > ul > li > a').click();
    cy.get('#cart_checkout1').click();
    cy.get('#accountFrm > fieldset > div:nth-child(2) > label').click();
    cy.get('#accountFrm > fieldset > button').click();
    cy.get('#guestFrm_firstname').type('Ana');
    cy.get('#guestFrm_lastname').type('Popescu');
    cy.get('#guestFrm_email').type('email@gmail.com');
    cy.get('#guestFrm_address_1').type('Constanta');
    cy.get('#guestFrm_country_id').select('Romania').should('have.value','175');
    cy.get('#guestFrm_city').type('Constanta');
    cy.get('#guestFrm_zone_id').select('Constanta').should('have.value','2693');
    cy.get('#guestFrm_postcode').type('123456')
    cy.get('#guestFrm > div.form-group > div > button').click();
    cy.get('#checkout_btn').click();
    cy.get('#maincontainer > div > div > div > div > section > p:nth-child(3)').should('be.visible').contains('Your order has been successfully processed!');
})

it('checking the order status', () =>{
    cy.get('#main_menu_top > li:nth-child(2) > ul > li:nth-child(2) > a > span').click({force:true})
    cy.get('#CheckOrderFrm_order_id').type('1310');
    cy.get('#CheckOrderFrm_email').type('email@gmail.com')
    cy.get('#CheckOrderFrm > div > fieldset > div:nth-child(3) > div > button').click();
    cy.get('#maincontainer > div > div > div > div > div.container-fluid > table > tbody > tr:nth-child(2) > td:nth-child(2)').should('be.visible').contains('Pending')

})

it('sort', ()=>{
    cy.get('#brandcarousal > li:nth-child(1) > div.image > a > img').click({foce:true})
    cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
    cy.get('#maincontainer > div > div > div > h1 > span.maintext').should('be.visible').contains('Benefit')

})

it('out of stock', ()=>{
    cy.get('#block_frame_latest_1770 > div > div:nth-child(4) > div.thumbnail > a > img').click();
    cy.get('#product > fieldset > div:nth-child(4) > ul > li > span').contains('Out of Stock')
})

})