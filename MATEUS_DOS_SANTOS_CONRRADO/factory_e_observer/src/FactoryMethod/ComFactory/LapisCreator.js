const Creator = require('./Creator');
const Lapis = require('./Lapis');

class LapisCreator extends Creator {
    criarFerramenta() {
        return new Lapis();
    }
}

module.exports = LapisCreator;