export class CentralEmergencia {
  constructor(logCallback) {
    this.setores = [];
    this.logCallback = logCallback;
  }

  adicionarSetor(setor) {
    this.setores.push(setor);
    this.log(`Setor "${setor.nome}" cadastrado para notificações.`);
  }

  notificarSetores(mensagem) {
    this.setores.forEach(setor => setor.atualizar(mensagem));
  }

  log(mensagem) {
    this.logCallback(mensagem);
  }
}
