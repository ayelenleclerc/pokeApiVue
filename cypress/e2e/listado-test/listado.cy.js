
describe('Listado de Pokemones', () => {

    beforeEach(() => {
        cy.visit('/pokemon')
    })
    it('probando el boton Volver', () => {
      cy.contains('h1', 'Listado de Pokemones')
      cy.get('[aria-label="Volver"] > .p-button-label').click()
    })
    it('probando el boton de detalles 1er Item', () => {
        cy.get('#app > div > div > div.p-datatable-table-container > table > tbody > tr:nth-child(1) > td:nth-child(3) > button').click()
        cy.get('#pv_id_2_header').should('have.text', 'Pokemon Details')
        cy.get('body > div.p-dialog-mask.p-overlay-mask.p-overlay-mask-enter > div > div.p-dialog-content > div > div > p').should('have.text', 'BULBASAUR')
        cy.get('body > div.p-dialog-mask.p-overlay-mask.p-overlay-mask-enter > div > div.p-dialog-header > div > button').click()
    })
    it('probando el boton de detalles 3er Item', () => {
        cy.get('#app > div > div > div.p-datatable-table-container > table > tbody > tr:nth-child(3) > td:nth-child(3) > button').click()
        cy.get('#pv_id_2_header').should('have.text', 'Pokemon Details')
        cy.get('body > div.p-dialog-mask.p-overlay-mask.p-overlay-mask-enter > div > div.p-dialog-content > div > div > p').should('have.text', 'VENUSAUR')
        cy.get('body > div.p-dialog-mask.p-overlay-mask.p-overlay-mask-enter > div > div.p-dialog-header > div > button').click()
    })
})