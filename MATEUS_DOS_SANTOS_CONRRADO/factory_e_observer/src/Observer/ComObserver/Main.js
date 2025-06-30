const Ferramenta = require('./Ferramenta');
const Usuario = require('./Usuario');

const usuario1 = new Usuario('Conrrado');
const usuario2 = new Usuario('Ricardo');

const pincel = new Ferramenta('Pincel');
const borracha = new Ferramenta('Borracha');

pincel.adicionarObservador(usuario1);
pincel.adicionarObservador(usuario2);

borracha.adicionarObservador(usuario2);

pincel.usar();
borracha.usar();