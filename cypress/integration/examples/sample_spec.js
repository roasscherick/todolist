const { cyan } = require("chalk")

describe('My first test', () => {
    it('Visits the webiste', () => {
        cy.visit('https://priceless-johnson-edbe3b.netlify.app')
    })
})

  // add a test that checks for that the app contains the <h1> header

  describe('My Third Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://priceless-johnson-edbe3b.netlify.app')
  
      cy.get('form button').click()
    })
  })