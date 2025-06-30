const Usuario = require('./Usuario');
const Ferramenta = require('./Ferramenta');

const usuario1 = new Usuario('Conrrado');
const usuario2 = new Usuario('Ricardo');

const pincel = new Ferramenta('Pincel');
const borracha = new Ferramenta('Borracha');

const usuarios = [usuario1, usuario2];

pincel.usar(usuarios);
borracha.usar(usuarios);