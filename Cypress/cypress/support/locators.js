const locators = {
    LOGIN: {
        USUARIO: '[data-test=email]',
        SENHA: '[data-test=passwd]',
        BOTAOLOGIN: '.btn'
    },
    MENU: {
        CONFIGURACOES: '[data-test=menu-settings] > .fas',
        CONTAS: '[href="/contas"]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BOTAOSALVAR: '.btn',
        MENSAGEMINSERIR: '.toast-success > .toast-message'
    },
    
    MENSAGEM: '.toast-message'

}

export default locators;