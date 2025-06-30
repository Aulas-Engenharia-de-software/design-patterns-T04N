package notificacao;

public class SMSNotificacao implements Notificacao {
    public void enviarMensagem(String mensagem) {
        System.out.println("📱 Enviando SMS: " + mensagem);
    }
}

