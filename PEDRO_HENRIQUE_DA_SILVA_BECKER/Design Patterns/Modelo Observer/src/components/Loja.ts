export type Observer = () => void;

class Loja{
  private notificacoes: string[] = [];
  private observers: Map<string, Observer> = new Map();

  registrar(clienteId: string, observer: Observer) {
    this.observers.set(clienteId, observer);
  }

  cancelar(clienteId: string) {
    this.observers.delete(clienteId);
  }

  addNotificacao(novaNotificacao: string) {
    this.notificacoes.push(novaNotificacao);
    this.notificar();
  }

  getNotificacoes() {
    return [...this.notificacoes];
  }

  private notificar() {
    this.observers.forEach(observer => observer());
  }
}

export const loja = new Loja();