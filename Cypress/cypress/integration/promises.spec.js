// ------- Utilizando o Promise para sincronizar o timeout ---------//
// O Promiseobjeto representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante //

const getSomething = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(13);
		}, 1000)
	})
}

const system = () => {
	console.log('init');
	getSomething().then(some => {
		console.log(`Something is ${some}`)
	})
	console.log('end')
}

system();