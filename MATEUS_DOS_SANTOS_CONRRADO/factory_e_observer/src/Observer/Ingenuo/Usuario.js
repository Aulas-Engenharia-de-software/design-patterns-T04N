class Usuario {
    constructor(nome) {
        this.nome = nome;
    }

    receberNotificacao(mensagem) {
        console.log(`${this.nome} recebeu: ${mensagem}`);
    }
}

module.exports = Usuario;