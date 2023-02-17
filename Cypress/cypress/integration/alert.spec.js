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

    it.only('Alert com mock', () =>{
        const stub = cy.stub().as('alerta') // stub significa esboço e as: como
        cy.on('window:alert', stub) // o stub ta sendo usado como, parâmetro. Exemplo? O teste acima
        cy.get('#alert').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })

    it('Confirm', () => {
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

    it.only('Prompt', () =>{
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D')
        })
        cy.get('#prompt').click()
    })

    it.only('Validando mensagens', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Wagner')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy=dataSobrenome]').type('Aquino')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })
})