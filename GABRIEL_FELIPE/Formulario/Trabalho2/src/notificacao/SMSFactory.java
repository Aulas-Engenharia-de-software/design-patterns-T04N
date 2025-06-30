package notificacao;

public class SMSFactory extends NotificacaoFactory {
    public Notificacao criarNotificacao() {
        return new SMSNotificacao();
    }
}

