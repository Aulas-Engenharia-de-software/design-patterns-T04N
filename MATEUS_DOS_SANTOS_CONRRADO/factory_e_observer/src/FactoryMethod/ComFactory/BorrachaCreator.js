const Creator = require('./Creator');
const Borracha = require('./Borracha');

class BorrachaCreator extends Creator {
    criarFerramenta() {
        return new Borracha();
    }
}

module.exports = BorrachaCreator;