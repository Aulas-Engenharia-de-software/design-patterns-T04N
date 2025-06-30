class Ferramenta {
    constructor(tipo) {
        this.tipo = tipo;
    }

    usar() {
        if (this.tipo === 'Pincel') {
            console.log('Usando o Pincel para desenhar linhas suaves.');
        } else if (this.tipo === 'Borracha') {
            console.log('Usando a Borracha para apagar.');
        } else if (this.tipo === 'Lapis') {
            console.log('Usando o Lápis para fazer esboços.');
        } else {
            console.log('Ferramenta desconhecida.');
        }
    }
}

module.exports = Ferramenta;