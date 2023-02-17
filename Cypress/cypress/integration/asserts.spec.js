/// <reference types="cypress" />


// --- Testes de qualidade/igualdade --- //
it('Equality', () => {
	const a = 1;

	expect(a).equal(1); //espero que a igual a 1
	expect(a, 'Deveria ser 1').equal(1); //espero que a (comentário com 'deveria ser 1') igual a 1
	expect(a).to.be.equal(1); //espero que a seja igual a 1
	expect('a').not.to.be.equal('b'); //espero que 'a' não seja igual a 'b'
})



// --- Testes de verdadeiro/falso/nulo/indefinido --- //
it('Truthy', () => {
	const a = true;
	const b = null;
	let c;

	expect(a). to.be.true; //espero que a seja igual a true
	expect(true).to.be.true; //espero que true seja true
	expect(b).to.be.null; //espero que b seja igual a null
	expect(a).to.be.not.null; //espero que a não seja igual a null
	expect(c).to.be.undefined; //espero que c seja igual a undefined
})



// --- Testes de objeto --- //
it('Object Equality', () => {
	const obj = {
		a: 1,
		b: 2
	}

	expect(obj).equal(obj) //espero que objeto igual a objeto
	expect(obj).equals(obj) //espero que objeto igual a objeto
	expect(obj).eq(obj) //espero que objeto igual a objeto
	expect(obj).to.be.equal(obj) //espero que objeto seja igual a objeto
	expect(obj).to.be.deep.equal({ a: 1, b: 2 }) //espero que objeto seja profundamente ( ou seja olha os valores das propriedades ) igual as propriedades
	expect(obj).eql({ a: 1, b: 2 }) //espero que objeto seja igual as propriedades do objeto
	expect(obj).include({ a: 1 }) //espero que o objeto inclua a propriedade
	expect(obj).to.have.property('b') //espero que o objeto tenha a propriedade b
	expect(obj).to.have.property('b', 2) //espero que a propriedade tenha a propriedade b e que valha 2
	expect(obj).to.not.be.empty //espero que o objeto não seja vazio
	expect({}).to.be.empty //espero que o objeto seja vazio
})



// --- Testes de array --- //
it('Arrays', () => {
	const arr = [1,2,3]

	expect(arr).to.have.members([1,2,3]) //espero que a array tenha os 'membros' 1,2,3 ( precisa ser todos e na ordem )
	expect(arr).to.include.members([1, 3]) //espero que a array inclua os membros 1 e 3 ( não precisa ser na ordem e ter todos )
	expect(arr).to.not.be.empty //espero que a array não seja vazia
	expect([]).to.be.empty // espero que a array seja vazia
})



// --- Testes de tipos --- //
it('Types', () => {
	const num = 1
	const str = 'String'

	expect(num).to.be.a('number') //espero que num seja um número
	expect(str).to.be.a('string') //espero que str seja uma string
	expect({}).to.be.an('object') //espero que {} seja um objeto
	expect([]).to.be.an('array') //espero que [] seja uma array
})



// --- Testes de String --- //
it('String', () => {
	const str = 'String de teste'

	expect(str).to.be.equal('String de teste') //espero que a string seja igual a 'String de teste'
	expect(str).to.have.length(15) //espero que o tamanho da string seja 15
	expect(str).to.contains('de') //espero que a string contenha a 'de'
	expect(str).to.match(/de/) //espero que a string fale que exista 'de' na string
    expect(str).to.match(/^String/) //espero que string comece com 'String'
	expect(str).to.match(/teste$/) //espero que string termine com 'teste'
	expect(str).to.match(/.{15}/) //espero que string tenha 15 caracteres
	expect(str).to.match(/\w+/) //espero que a string possua apenas letras, uma ou mais
	expect(str).to.match(/\D+/) //espero que a string não possua números, um ou mais
})



// --- Testes de Numbers --- //
it('Numbers', () => {
	const number = 4
	const floatNumber = 5.2123

	expect(number).to.be.equal(4) //espero que number seja igual a 4
	expect(number).to.be.above(3) //espero que number seja maior que 3
	expect(number).to.be.below(7) //espero que number seja menor que 7
	expect(floatNumber).to.be.equal(5.2123) //espero que floatNumber seja igual a 5.2123
	expect(floatNumber).to.be.closeTo(5.2, 0.1) //espero que floatNumber seja proximo a 5.2 com 0.1 de aproximação
	expect(floatNumber).to.be.above(5) //espero que floatNumber seja maior que 5
})