

describe('CssLocators',() => {

    it("csslocators",() =>{

        cy.visit("https://www.amazon.in/")

         cy.xpath("//div[@id='desktop-grid-2']").should('jave.length',4)


 
    })

})
