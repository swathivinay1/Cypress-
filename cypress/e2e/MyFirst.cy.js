//const cypress = require("cypress")

describe('My First Test', () => {

    it('test 1', () => {
         
       cy.visit("https://www.facebook.com/")
        cy.title().should('eq','Facebook')
    

    })

   
})