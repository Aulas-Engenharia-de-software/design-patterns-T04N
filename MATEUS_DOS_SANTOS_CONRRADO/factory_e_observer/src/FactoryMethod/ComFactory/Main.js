const PincelCreator = require('./PincelCreator');
const BorrachaCreator = require('./BorrachaCreator');
const LapisCreator = require('./LapisCreator');

const pincel = new PincelCreator().criarFerramenta();
pincel.usar();

const borracha = new BorrachaCreator().criarFerramenta();
borracha.usar();

const lapis = new LapisCreator().criarFerramenta();
lapis.usar();