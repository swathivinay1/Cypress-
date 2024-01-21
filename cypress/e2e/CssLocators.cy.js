const { describe } = require("mocha");

describe('CssLocators',() => {

    it("csslocators",() =>{

        cy.visit("https://www.amazon.in/")

        cy.get("#twotabsearchtextbox").type("T-shirts")  // id tag is optional.

cy.get("#nav-search-submit-button").click()


    }
    )

})


