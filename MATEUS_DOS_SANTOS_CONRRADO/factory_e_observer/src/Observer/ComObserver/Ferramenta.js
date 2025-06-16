class Ferramenta {
    constructor(nome) {
        this.nome = nome;
        this.observadores = [];
    }

    adicionarObservador(obs) {
        this.observadores.push(obs);
    }

    removerObservador(obs) {
        this.observadores = this.observadores.filter(o => o !== obs);
    }

    notificarObservadores() {
        this.observadores.forEach(obs => obs.atualizar(`A ferramenta "${this.nome}" foi usada.`));
    }

    usar() {
        console.log(`Usando a ferramenta: ${this.nome}`);
        this.notificarObservadores();
    }
}

module.exports = Ferramenta;