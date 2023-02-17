/// <reference types="cypress"/>

describe('Espera...', () =>{
    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()     
    })

    it('Entendendo o tempo do Cypress', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona mesmo?')
    })    

    it('Cuidado com as assertivas no mesmo get', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            //.should('not.exist') essa assertiva não funciona no encadeamento, quando executada não passará no mesmo get
            .should('exist')
            .type('funciona')
    })   

    it.only('Usando o find', () =>{
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
       //  cy.get('#lista li')           < -- Não passa por que o find fica 'preso' no span do Item 1 é melhor usar apenas uma vez
       //     .find('span')
       //     .should('contain', 'Item 2')

       cy.get('#lista li') // ou cy.get('#lista li span') mais específico
            .should('contain', 'Item 2')

    })

    it.only('Usando o timeout', () =>{
       // cy.get('#buttonDelay').click()
       // cy.get('#novoCampo').should('exist') //cy.get('#novoCampo', {timeout: 1000}).should('exist')

       cy.get('#buttonListDOM').click()
      // cy.wait(5000) <-- aguarda até 5 segundos, porém, é melhor usar o timeout por que espera por x tempo e assim validando ou não o teste
       cy.get('#lista li span', {timeout: 8000})
            .should('contain', 'Item 2')

    })

    it.only('Testando o timeout e o retry', () =>{
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)

    })

    it.only('Click não tem Retry', () =>{
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })
})