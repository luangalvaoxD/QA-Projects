it('testing', function soma(){})

//   function soma(a,b){
//       return a + b;
//   }

// ------- Arrow Function Básica ----------- //
const soma = (a,b) => {
    return a + b;
}
console.log(soma(2,30));

// ------- Arrow Function Reduzida --------- //
const soma2 = (a,b) => a + b;
console.log(soma2(2,5));

// ----- Arrow Functino Variação para um parâmetro ----------- //
const soma3 = a => a + a;
console.log(soma3(3));

// ------ Arrow Function Variação para nenhum parâmetro -------//
const soma4 = () => 5 + 10;
console.log(soma4());

// ------- Arrow x function -------- //
it('a function test...', function () {
	console.log('function', this)
})

it('an arrow test...', () => {
	console.log('Arrow', this)
})
