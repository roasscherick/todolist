const { cyan } = require("chalk")

describe('My first test', () => {
    it('Visits the webiste', () => {
        cy.visit('127.0.0.1:5500/index.html')
    })
})

describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('127.0.0.1:5500/index.html')
  
      cy.contains("Radhika's Todo List")
    })
  })

  describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('127.0.0.1:5500/index.html')
  
      cy.get('select').select('completed')
    })
  })