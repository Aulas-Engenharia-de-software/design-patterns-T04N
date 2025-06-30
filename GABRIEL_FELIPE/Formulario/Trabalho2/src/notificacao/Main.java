package notificacao;

public class Main {
    public static void main(String[] args) {
        NotificacaoFactory emailFactory = new EmailFactory();
        Notificacao email = emailFactory.criarNotificacao();
        email.enviarMensagem("Olá! Esse é um email de teste.");

        NotificacaoFactory smsFactory = new SMSFactory();
        Notificacao sms = smsFactory.criarNotificacao();
        sms.enviarMensagem("Olá! Esse é um SMS de teste.");
    }
}
