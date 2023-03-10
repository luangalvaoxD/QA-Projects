/// <reference types="cypress"/>
import loc from '../../support/locators'

describe('test a nivel funcional', () => {
    before(() => { //executa antes de tudo
        cy.visit('https://barrigareact.wcaquino.me/')
    })
    it('login', () =>{
        cy.get('loc.LOGIN.USUARIO').type('teste157')
        cy.get('loc.LOGIN.SENHA').type('teste')
        cy.get('loc.LOGIN.BOTAOLOGIN').click()
        cy.get('loc.MENSAGEM.MENSAGEM').should('exist')
    })
    it('criando uma conta', () =>{
        cy.get('loc.MENU.CONFIGURACOES').click()
        cy.get('loc.MENU.CONTAS').click()
        cy.get('loc.CONTAS.NOME').type('testandoAqui')
        cy.get('loc.CONTAS.BOTAOSALVAR').click()
        cy.get('loc.CONTAS.MENSAGEMINSERIR').should('contain', 'Conta inserida')
    })
    it('Alterando conta', () =>{
        cy.get('loc.MENU.CONFIGURACOES').click()
        cy.get('loc.CONTAS.NOME')
            .clear()
            .type('contaAlterada')
        cy.get('loc.CONTAS.BOTAOSALVAR').click()
        cy.get('loc.MENSAGEM').should('exist')
    })
    })