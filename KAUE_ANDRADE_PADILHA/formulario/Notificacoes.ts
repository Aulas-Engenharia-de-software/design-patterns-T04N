// Interface
interface Notificacao {
  enviar(mensagem: string): void;
}

// Concretas
class NotificacaoEmail implements Notificacao {
  enviar(mensagem: string) {
    console.log("Enviando Email: " + mensagem);
  }
}

class NotificacaoSMS implements Notificacao {
  enviar(mensagem: string) {
    console.log("Enviando SMS: " + mensagem);
  }
}

// Factory
abstract class NotificacaoFactory {
  abstract criarNotificacao(): Notificacao;
}

class EmailFactory extends NotificacaoFactory {
  criarNotificacao() {
    return new NotificacaoEmail();
  }
}

class SMSFactory extends NotificacaoFactory {
  criarNotificacao() {
    return new NotificacaoSMS();
  }
}

// Uso
function enviarMensagem(factory: NotificacaoFactory, msg: string) {
  const notificacao = factory.criarNotificacao();
  notificacao.enviar(msg);
}

enviarMensagem(new EmailFactory(), "Olá por email!");
enviarMensagem(new SMSFactory(), "Olá por SMS!");
