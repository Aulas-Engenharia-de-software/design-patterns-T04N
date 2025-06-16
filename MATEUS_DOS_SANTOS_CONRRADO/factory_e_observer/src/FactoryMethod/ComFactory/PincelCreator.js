const Creator = require('./Creator');
const Pincel = require('./Pincel');

class PincelCreator extends Creator {
    criarFerramenta() {
        return new Pincel();
    }
}

module.exports = PincelCreator;