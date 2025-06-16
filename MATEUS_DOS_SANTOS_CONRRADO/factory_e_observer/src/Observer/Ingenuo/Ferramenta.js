class Ferramenta {
    constructor(nome) {
        this.nome = nome;
    }

    usar(usuarios) {
        console.log(`Usando a ferramenta: ${this.nome}`);
        usuarios.forEach(usuario => {
            usuario.receberNotificacao(`A ferramenta "${this.nome}" foi usada.`);
        });
    }
}

module.exports = Ferramenta;