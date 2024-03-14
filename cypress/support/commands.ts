/// <reference types="cypress" />

Cypress.Commands.add('getBySel', (selector) => {
  return cy.get(`[data-cy=${selector}]`)
})
