/// <reference types="cypress"/>

describe('basic cypress', () => {

    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()     
    })
    it.only('assert com título do site', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        // const title = cy.title()
        // console.log(title)
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')


        let syncTitle
            
        cy.title().then(title =>{
            console.log(title) //imprimindo o título da página

        cy.get('#formNome').type(title) //Escreve no campo #formNome o título da página

        syncTitle = title //armazenando o título na variável syncTitle

        })

        cy.get('[data-cy=dataSobrenome]').then($el =>{ //obtendo o campo sobrenome e então usando o elemento $el.val do jQuery para escrever o syncTitle que contém o título da página
            $el.val(syncTitle) //função do jquery de pegar o elemento e o valor do elemento

        })

        cy.get('#elementosForm\\:sugestoes').then($el =>{ //obtendo o campo sobrenome e então usando o elemento $el.val do jQuery para escrever o syncTitle que contém o título da página, porém usando o wrap ( encapsulamento do Cypress ), qual a diferença? O Cypress simula a digitação humana, diferente do JQuery.
            cy.wrap($el).type(syncTitle)
        })


    })

    it('Devemos procurar e interagir com o elemento', () => {
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })

    it('Should vs Then', () => { //O should não aceita nova troca de retorno e nem uma busca dentro do bloco
        //diferente do then
        
        cy.get('#buttonListDOM').then($el => {
            //.should('have.length', 1)
            // console.log($el)
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })
})
})

//cy.pause()
//.debug()