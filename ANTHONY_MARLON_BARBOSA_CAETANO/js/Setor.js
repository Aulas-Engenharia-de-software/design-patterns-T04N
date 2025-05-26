export class Setor {
  constructor(nome, logCallback) {
    this.nome = nome;
    this.logCallback = logCallback;
  }

  atualizar(mensagem) {
    this.logCallback(`📢 [${this.nome}] recebeu: "${mensagem}"`);
  }
}
