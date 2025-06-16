const Observer = require('./Observer');

class Usuario extends Observer {
    constructor(nome) {
        super();
        this.nome = nome;
    }

    atualizar(mensagem) {
        console.log(`${this.nome} recebeu: ${mensagem}`);
    }
}

module.exports = Usuario;