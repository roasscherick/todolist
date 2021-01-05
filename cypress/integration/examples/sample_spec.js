const { cyan } = require("chalk")

describe('My first test', () => {
    it('Visits the webiste', () => {
        cy.visit('https://todolisthandson.herokuapp.com/')
    })
})

describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://todolisthandson.herokuapp.com/')
  
      cy.contains("Radhika's Todo List")
    })
  })

  describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://todolisthandson.herokuapp.com/')
  
      cy.get('select').select('completed')
    })
  })