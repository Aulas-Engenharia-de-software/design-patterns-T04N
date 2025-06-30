package notificacao;

public class EmailFactory extends NotificacaoFactory {
    public Notificacao criarNotificacao() {
        return new EmailNotificacao();
    }
}

