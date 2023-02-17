/// <reference types="cypress" />
// ------- Utilização do describe(grupo de 'its') e it que são os testes --------//
// --------- utilização do describe.skip ou it.skip, para pular o teste ---------//
// --------- Utilização do describe.only ou it.only para executar apenas o teste especificado ----//
it('teste externo',  () => {
    console.log('hello');
})

describe('grupo de testes', () => {
    it('teste interno number 1', () => {})
    it('teste interno number 2', () => {})
    it('teste interno number 3', () => {})
    describe('outro grupo dentro de um grupo e assim vai', () => {
        it('teste interno dentro do interno', () => {})
    } )
})