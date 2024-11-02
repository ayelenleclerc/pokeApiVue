

describe('Pokemon Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Pokemon')
    cy.get('.p-button-label').click()
    cy.contains('h1', 'Listado de Pokemones')
    cy.get('[aria-label="Volver"] > .p-button-label').click()
  })
})
