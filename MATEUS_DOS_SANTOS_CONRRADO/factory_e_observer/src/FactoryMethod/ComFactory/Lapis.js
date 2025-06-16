const Ferramenta = require('./Ferramenta');

class Lapis extends Ferramenta {
    usar() {
        console.log('Usando o Lápis para fazer esboços.');
    }
}

module.exports = Lapis;