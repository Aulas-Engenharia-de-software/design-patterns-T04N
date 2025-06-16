const Ferramenta = require('./Ferramenta');

class Pincel extends Ferramenta {
    usar() {
        console.log('Usando o Pincel para desenhar linhas suaves.');
    }
}

module.exports = Pincel;