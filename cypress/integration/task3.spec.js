describe('Tests for registered customers', () => {
    beforeEach(() => {
      
        cy.visit('/')
        cy.get('#customer_menu_top').click();
        cy.get('#loginFrm_loginname').type('conttulmeunouunout');
        cy.get('#loginFrm_password').type('parola123');
        cy.get('#loginFrm > fieldset > button').click();  
    })

    it('updating account details', ()=>{
    cy.get('#maincontainer > div > div.column_right.col-md-3.col-xs-12.mt20 > div.sidewidt > div > ul > li:nth-child(3) > a').click();
    cy.get('#AccountFrm_firstname').clear();
    cy.get('#AccountFrm_firstname').type('Ana');
    cy.get('#AccountFrm_lastname').clear();
    cy.get('#AccountFrm_lastname').type('Popescuu');
    cy.get('#AccountFrm_telephone').clear();
    cy.get('#AccountFrm_telephone').type('089');
    cy.get('#AccountFrm_fax').type('89');
    cy.get('#AccountFrm_fax').type('89');
    cy.get('#AccountFrm > div.form-group > div > button').click();
    cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.alert.alert-success').should('be.visible').contains('Success: Your account has been successfully updated.')
    })

    it('updating address book', ()=>{
    cy.get('#maincontainer > div > div.column_right.col-md-3.col-xs-12.mt20 > div.sidewidt > div > ul > li:nth-child(5) > a').click();
    cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.contentpanel > div.col-md-12.col-xs-12.pull-right.mt20.mb20 > a.btn.btn-orange.pull-right').click();
    cy.get('#AddressFrm_firstname').type('Ana');
    cy.get('#AddressFrm_lastname').type('Popescu');
    cy.get('#AddressFrm_address_1').type('Bucuresti');
    cy.get('#AddressFrm_city').type('Bucuresti');
    cy.get('#AddressFrm_country_id').select('Romania').should('have.value','175');
    cy.get('#AddressFrm_zone_id').select('Bucuresti').should('have.value','2688');
    cy.get('#AddressFrm_postcode').type('12365');
    cy.get('#AddressFrm_default1').click();
    cy.get('#AddressFrm > div > fieldset > div:nth-child(11) > div > button').click();
    cy.get('button.btn.btn-default').contains('Delete').click({force:true})
    cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.alert.alert-success').should('be.visible').contains('Your address has been successfully deleted')
})

it('wishlist', ()=>{
    cy.get('#categorymenu > nav > ul > li:nth-child(1) > a').click();
    cy.get('#block_frame_featured_1769 > div > div:nth-child(3) > div.thumbnail > a > img').click();
    cy.get('#product > fieldset > div.wishlist > a.wishlist_add.btn.btn-large').click({force: true})
    cy.get('#maincontainer > div > div.column_left.col-md-3.col-xs-12 > div.sidewidt > ul > li:nth-child(1) > a.productname').click();
    cy.get('#product > fieldset > div.wishlist > a.wishlist_add.btn.btn-large').click({force: true})
    cy.get('#customer_menu_top > li > a > div').click();
    cy.get('#customer_menu_top > li > a > div').click();
    cy.get('#maincontainer > div > div.column_right.col-md-3.col-xs-12.mt20 > div.sidewidt > div > ul > li:nth-child(2) > a').click();
    cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div > table > tbody > tr.wishlist_52 > td:nth-child(6) > a.btn.btn-sm.btn-default.btn-remove > i').click({force: true})
    cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > h1 > span').should('be.visible').contains(' My wish list')
    
})

let orderId
let orderId2
it('purchasing items', ()=>{
    let address1
    cy.get('#maincontainer > div > div.column_right.col-md-3.col-xs-12.mt20 > div.sidewidt > div > ul > li:nth-child(5) > a').click()
    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.contentpanel > div.genericbox.border-bottom > table > tbody > tr > td:nth-child(1) > address").invoke("text").then((text)=>{
        address1=text.substring(text.indexOf("Popescu")+"Popescu".length, text.indexOf("Bucuresti "));
        cy.log(address1)
})
    cy.get('#categorymenu > nav > ul > li:nth-child(2) > a').click();
    cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(6) > div.thumbnail > div.pricetag.jumbotron > a').click();
    cy.get('#product > fieldset > div:nth-child(6) > ul > li > a').click();
    cy.get('#categorymenu > nav > ul > li:nth-child(3) > a').click();
    cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.thumbnail > div.pricetag.jumbotron > a > i').click();
    cy.get('#categorymenu > nav > ul > li:nth-child(6) > a').click();
    cy.get('#categorymenu > nav > ul > li:nth-child(4) > a').click();
    cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(2) > div.thumbnail > div.pricetag.jumbotron > a > i').click();
    cy.get('#categorymenu > nav > ul > li:nth-child(8) > a').click();
    cy.get('#categorymenu > nav > ul > li:nth-child(5) > a').click();
    cy.get('#maincontainer > div > div > div > div > div.thumbnails.grid.row.list-inline > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a > i').click()
    cy.get('body > div > header > div.container-fluid > div > div.block_7 > ul > li > a').click()
    cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(3) > td:nth-child(7) > a').click()
    cy.get('#cart_quantity12180e3a92dbdbee7dcadd3b4b20cf25899').clear()
    cy.get('#cart_quantity12180e3a92dbdbee7dcadd3b4b20cf25899').type('2')
    
    
    cy.get('#cart_checkout1').click()
    let address2
    cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div.contentpanel > table.table.confirm_shippment_options > tbody > tr > td:nth-child(2) > address").invoke("text").then((text)=>{
        address2=text.substring(text.indexOf(" ")+"".length, text.indexOf("Bucuresti"));
        cy.log(address2)
    if(address1==address2)
        cy.log("Address is the default one")
    else
        cy.log("address is not the default one")
})
    cy.get('#checkout_btn').click()
    cy.get('#maincontainer > div > div > div > div > section > p:nth-child(4) > a').click()
    cy.get("#maincontainer > div > div > div > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1)").invoke("text").then((text)=>{
        orderId=text.substring(text.indexOf("Order ID")+"Order ID".length, text.indexOf("Status")).trim().split('#')[1];
        cy.log(orderId)
    cy.get('#maincontainer > div > div.column_right.col-md-3.col-xs-12.mt20 > div.sidewidt > div > ul > li:nth-child(6) > a').click()
    
    cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div:nth-child(1)').invoke("text").then((text)=>{
        orderId2=text.substring(text.indexOf('#')+'#'.length, text.indexOf("Status"));
        cy.log(orderId2)
    if(Number(orderId)==Number(orderId2))
        cy.log('Ok')
    else
        cy.log('not ok')
    }) 
    })
    cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div:nth-child(1) > div:nth-child(2)').contains("Status: Pending")
        

    
})
})   