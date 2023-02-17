/// <reference types="cypress"/>

it('Meu Teste...', () =>{

   // const getValue = () => 1;
  //  const soma = (a,b) => a + b;

   // cy.wrap({fn:getValue}).invoke('fn').should('to.equal', 1)
  //  cy.wrap({fng:soma}).invoke('fng', 10, 5).should('to.equal', 15)

    cy.visit('https://www.facebook.com/')
   // cy.get('#formNome').invoke('val','texto via invoke' )
  //  cy.window().invoke('alert', 'dá pra ver?')
  //  cy.get('#resultado').invoke('html', '<input type="button" value="Hacked!"/>')


  cy.get('[data-testid=open-registration-form-button]').should('have.text', 'Criar nova conta')
  cy.get('[data-testid=open-registration-form-button]').click()
  cy.get('#u_2_b_c7').type('Funciona?')

})