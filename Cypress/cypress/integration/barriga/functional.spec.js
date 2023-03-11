/// <reference types="cypress"/>
import locators from '../../support/locators';

describe('test a nivel funcional', () => {
    before(() => { //executa antes de tudo
        cy.visit('https://barrigareact.wcaquino.me/')
    })
    it('login', () =>{
        cy.get('locators.LOGIN.USUARIO').type('teste157')
        cy.get('locators.LOGIN.SENHA').type('teste')
        cy.get('locators.LOGIN.BOTAOLOGIN').click()
        cy.get('locators.MENSAGEM').should('exist')
    })
    it('criando uma conta', () =>{
        cy.get('locators.MENU.CONFIGURACOES').click()
        cy.get('locators.MENU.CONTAS').click()
        cy.get('locators.CONTAS.NOME').type('testandoAqui')
        cy.get('locators.CONTAS.BOTAOSALVAR').click()
        cy.get('locators.CONTAS.MENSAGEMINSERIR').should('contain', 'Conta inserida')
    })
    it('Alterando conta', () =>{
        cy.get('locators.MENU.CONFIGURACOES').click()
        cy.get('locators.CONTAS.NOME')
            .clear()
            .type('contaAlterada')
        cy.get('locators.CONTAS.BOTAOSALVAR').click()
        cy.get('locators.MENSAGEM').should('exist')
    })
    })