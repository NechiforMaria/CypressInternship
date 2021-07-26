
describe('Tests for unregistered customers', () => {
    beforeEach(() => {
      
      cy.visit('/')
    })

    let orderId
    let email
    
   
it('searching an item', ()=>{
    let r = Math.random().toString(36).substring(7);
    cy.log("random", r);
    cy.get('#filter_keyword').click();
    cy.get('#filter_keyword').type('Viva Glam Lipstick');
    cy.get('#search_form > div > div').click();
    cy.get('body > div > div:nth-child(2) > div:nth-child(2) > section > ul > li:nth-child(2) > a').contains('Viva Glam Lipstick')
    cy.get('#product_details > div > div:nth-child(2) > div > div > h1 > span').contains('Viva Glam Lipstick')
  
    cy.get('#filter_keyword').click();
    cy.get('#filter_keyword').type(r);
    cy.get('#search_form > div > div').click();
    cy.get('body > div > div:nth-child(2) > div:nth-child(2) > section > ul > li:nth-child(2) > a').contains('Search')
    cy.get('#maincontainer > div > div > div > div > h4:nth-child(3)').contains('Products meeting the search criteria')
})

it('add an item to cart', ()=>{
    cy.get('#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a > i').click();
    cy.get('#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron.added_to_cart > div.quick_basket > a > i').should('be.visible');
})



it('finalize a purchase', () => {
    cy.get('#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a').click();
    cy.get('body > div > header > div.container-fluid > div > div.block_7 > ul > li > a').click();
    cy.get('#cart_checkout1').contains('Checkout').click({force:true})
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
    cy.get('#maincontainer > div > div > div > div > section > p:nth-child(4) > a').click();
    cy.get("#maincontainer > div > div > div > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1)").invoke("text").then((text)=>{
        orderId=text.substring(text.indexOf("Order ID")+"Order ID".length, text.indexOf("Status")).trim().split('#')[1];
        cy.log(orderId)
        email=text.substring(text.indexOf("E-Mail")+"E-Mail".length, text.indexOf("Shipping Method")).trim();    
        cy.log(email)
        cy.get('#main_menu_top > li:nth-child(2) > ul > li:nth-child(2) > a > span').click({force:true})
        cy.get('#CheckOrderFrm_order_id').type(orderId)
        cy.get('#CheckOrderFrm_email').type(email)
        cy.get('#CheckOrderFrm > div > fieldset > div:nth-child(3) > div > button').click();
        cy.get('#maincontainer > div > div > div > div > div.container-fluid > table > tbody > tr:nth-child(2) > td:nth-child(2)').should('be.visible').contains('Pending')
    })

    
    
   

})

 
it('sort', ()=>{
    cy.get('#brandcarousal > li:nth-child(1) > div.image > a > img').click({foce:true})
    cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
    cy.get('#maincontainer > div > div > div > h1 > span.maintext').should('be.visible').contains('Benefit')

    const elemente=[]
    cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > div > div.pricenew').invoke('text').then(($el)=>{
          elemente.push($el.substring($el.indexOf("$")+"$".length, $el.length))
    })
    
    cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(2) > div.thumbnail > div.pricetag.jumbotron > div > div').invoke('text').then(($el)=>{
        elemente.push($el.substring($el.indexOf("$")+"$".length, $el.length))
    })
    
    cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.thumbnail > div.pricetag.jumbotron > div > div').invoke('text').then(($el)=>{
        elemente.push($el.substring($el.indexOf("$")+"$".length, $el.length))
    })
    
    cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(4) > div.thumbnail > div.pricetag.jumbotron > div > div').invoke('text').then(($el)=>{
        elemente.push($el.substring($el.indexOf("$")+"$".length, $el.length))
    })
    
    cy.wrap((elemente)).then((res)=>{ cy.log(res)
    let i
    let ok=0
        for(i=0;i<res.length-1;i++)
            if(Number(res[i])>Number(res[i+1]))
                ok=1
            cy.log('0-ok, 1 -not ok')
            cy.log(ok)
        
})
    
    
})

it('out of stock', ()=>{
    cy.get('#block_frame_latest_1770 > div > div:nth-child(4) > div.thumbnail > a > img').click();
    cy.get('#product > fieldset > div:nth-child(4) > ul > li > span').contains('Out of Stock')
})

})