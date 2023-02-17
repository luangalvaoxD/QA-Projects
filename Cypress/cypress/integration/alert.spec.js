/// <reference types="cypress"/>

describe('test with alert', () => {
    before(() => { //executa antes de tudo
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { //executa antes de cada um dos testes
        cy.reload()
    })

    it('alert', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })

    })

    it('Alert com mock', () =>{
        const stub = cy.stub().as('alerta') // stub significa esboço e as: como
        cy.on('window:alert', stub) // o stub ta sendo usado como, parâmetro. Exemplo? O teste acima
        cy.get('#alert').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })

    it.only('Confirm', () => {
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples') //Testando a confirmação do window.alert para o botão 'ok'
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Confirmado')
        })
        cy.get('#confirm').click()
    })

    it('Deny', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples') //Testando a confirmação do window.alert para o botão 'cancelar'
            return false

        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Negado')
        })
    })
})