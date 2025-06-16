const Ferramenta = require('./Ferramenta');

class Borracha extends Ferramenta {
    usar() {
        console.log('Usando a Borracha para apagar.');
    }
}

module.exports = Borracha;