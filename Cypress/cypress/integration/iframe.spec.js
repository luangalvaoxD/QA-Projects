/// <reference types="cypress" />

describe('Work with iFrames', () => {
    it('Deve preencher campo de texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body') //O iframe estava em outra url, por isso teve que procurar pelo body para poder fazer o teste
            cy.wrap(body).find('#tfield') //no teste abaixo, é feito direto no link do iframe
                .type('funciona?')
                .should('have.value', 'funciona?')
        })

    })

    it('Deve testar frame diretamente', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })
})

