package notificacao;

public class EmailNotificacao implements Notificacao {
    public void enviarMensagem(String mensagem) {
        System.out.println("📧 Enviando Email: " + mensagem);
    }
}

