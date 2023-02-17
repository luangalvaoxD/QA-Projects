/// <reference types="cypress"/>

describe('basic cypress', () => {
    it('assert com título do site', () => {
        cy.visit('https://llvissll.github.io/study-html5-css3/curriculo/index.html')

       // const title = cy.title()
       // console.log(title)
        cy.title()
        .should('be.equal', 'Currículo')
    })

    it('Botão face', () => {
        cy.get(':nth-child(2) > a').click()
    })
    it('Botão git', () => {
        cy.get(':nth-child(3) > a').click()
    })
    it('Botão insta', () => {
        cy.get(':nth-child(4) > a').click()
    })
    it('Botão de propriedade intelectual', () => {
        cy.get('footer > p > a').click()
    })
})