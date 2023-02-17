/// <reference types="cypress"/>

describe('Teste em texto', () => {
    before(() =>{ //executa antes de tudo
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    

    beforeEach(() =>{ //executa antes de cada um dos testes
        cy.reload()     
    })

    it('textos', () => {

        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado') //busca com 'contain' é menos restritivo
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') //busca mais restritiva, por que tem que ter exatamente o texto
    })


it('links', () => {
    cy.get('a').first().click()
    cy.get('#resultado').should('have.text', 'Voltou!')

    cy.reload()
    cy.get('#resultado').should('have.not.text', 'Voltou!')
    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')
})

it('campo de texto', () =>{
    
    cy.get('#formNome').type('Irineu')
    cy.get('#formNome').should('have.value', 'Irineu')

    cy.get('[data-cy=dataSobrenome]')
    .type('Você não sabe nem eu{backspace}')
    .should('have.value', 'Você não sabe nem e')

    cy.get('#elementosForm\\:sugestoes') //Nesse caso ter cuidado por que o : pode ser confundido pela ferramenta, caso der erro, colocar outra \ para que seja entendido como apenas uma \
    .clear()
    .type('DA PORRADA NA CV, CUZÃO TEM QUE MORRER ALALA OOH OOH OOH, MANCHA JÁ CHEGOO OOO OOO{selectall}É nois')
    .should('have.value', 'É nois')

    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
    .type('Akali 1v9')
    .should('have.value', 'Akali 1v9')


})

it('radio', () =>{
    cy.get('#formSexoFem')
        .click()
        .should('be.checked')

    cy.get('#formSexoMasc')
        .should('be.not.checked')

        cy.get('[name="formSexo"]').should('have.length', 2)

})

it('checkbox', () =>{
    cy.get('#formComidaPizza')
        .click()
        .should('be.checked')

    cy.get('[name="formComidaFavorita"]') //foi pego o nome da propriedade do botão
        .click({multiple:true}) //serve pra clicar mais de uma vez
        .should('be.checked') //"checa" se foi clicado ou se está clicado

    cy.get('#formComidaPizza')

        .should('be.not.checked')

    cy.get('#formComidaVegetariana')
        .should('be.checked')
})

it.only('combo', () =>{
    cy.get('[data-test=dataEscolaridade]')
        .select('1o grau completo')
        .should('have.value', '1graucomp') //Essa verificação tem que ser exatamente como tá o 'value' no código

    cy.get('[data-test=dataEscolaridade]')
        .select('2graucomp') //O select aceita tanto a opção, nome visível quanto o value do código
        .should('have.value', '2graucomp')

        cy.get('[data-test=dataEscolaridade] option')
        .should('have.length', 8)
    cy.get('[data-test=dataEscolaridade] option').then($arr =>{
        const values = []
        $arr.each(function (){
            values.push(this.innerHTML)
    })
        expect(values).to.include.members(["Superior", "Mestrado"])
})
})

it.only('combo múltiplo', () =>{
    cy.get('[data-testid=dataEsportes]')
        .select(['natacao', 'Corrida', 'nada'])

//    cy.get('[data-testid=dataEsportes]').should('have.value', ['natacao', 'Corrida', 'nada'])
    cy.get('[data-testid=dataEsportes]').then($el =>{
        expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
        expect($el.val()).to.have.length(3)
    })

    cy.get('[data-testid=dataEsportes]')
        .invoke('val').should('eql', ['natacao', 'Corrida', 'nada'])    
})
})