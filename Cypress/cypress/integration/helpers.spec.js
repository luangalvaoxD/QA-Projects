/// <reference types="cypress"/>

describe('Helpers...', () => {
    it.only('Wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        //obj.should('have.property', 'nome') //Não funciona pois should está na api do cypress, o obj não tem o should
        cy.wrap(obj).should('have.property', 'nome') //Assim funciona por que foi feito o wrap, que é meio que um 'enrolamento' para a api do cypress
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').then($el => {
//	$el.val('funciona via jquery')
	//cy.wrap($el).type('funciona via cypress') //<------ esse que importa 
})

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(10)
	}, 500)
})

cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botão'))
//promise.then(num => console.log(num))
cy.wrap(promise).then(ret => console.log(ret))
cy.get('#buttonList').then(() => console.log('Encontreo o segundo botão'))

cy.wrap(1).then(num => { // no lugar do then, tem o should. Porém o should não funciona por que ele ignora a alteração do return
    return 2
}).should('be.equal', 2)        
    })

    it.only('Its...', () =>{ //O its 'seta' o objeto pelo nome e assim podemos fazer uma assertiva com a propriedade contida
        const obj = {nome: 'User', idade: 20}
        cy.wrap(obj).should('have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User' )

        const obj2 = {nome: 'User', idade: 20, endereco: {rua: 'dos bobos'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco').its('rua').should('contains', 'bobos')
        cy.wrap(obj2).its('endereco.rua').should('contains', 'bobos')
        
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)
    })

    it('Invokes...', () =>{ //É a mesma coisa que o Its, porém utilizando funções em objetos
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        cy.wrap({ fn: getValue }).invoke('fn').should('be.equal', 1) //Invocando o objeto fn que contém a função getValue
        cy.wrap({ fn: soma }).invoke('fn', 5, 2).should('be.equal', 7) //Invocando o objeto soma que contém a função soma
 
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto por invoke') //Escreveu Texto por invoke no campo do #formNome por meio do 'val' ( do Jquery )

        cy.reload()

        cy.window().invoke('alert', 'Dá pra ver?') //o cy.window é todo o corpo do site, dando liberdade para inserir scripts no site
        cy.get('#resultado') //esse é um exemplo, pegando o método html do Jquery e inserindo um script no botão #resultado: 
            .invoke('html', '<input type="button", value="HACKED!"/>')
    })

})