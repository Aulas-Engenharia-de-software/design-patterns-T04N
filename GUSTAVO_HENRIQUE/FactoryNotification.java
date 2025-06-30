// Interface base
interface Notificacao {
    void enviar(String mensagem);
}

// Implementação: Email
class EmailNotificacao implements Notificacao {
    public void enviar(String mensagem) {
        System.out.println("Enviando EMAIL: " + mensagem);
    }
}

// Implementação: SMS
class SmsNotificacao implements Notificacao {
    public void enviar(String mensagem) {
        System.out.println("Enviando SMS: " + mensagem);
    }
}

// Factory (fábrica) base
abstract class NotificacaoFactory {
    public abstract Notificacao criarNotificacao();
}

// Factory concreta para Email
class EmailNotificacaoFactory extends NotificacaoFactory {
    public Notificacao criarNotificacao() {
        return new EmailNotificacao();
    }
}

// Factory concreta para SMS
class SmsNotificacaoFactory extends NotificacaoFactory {
    public Notificacao criarNotificacao() {
        return new SmsNotificacao();
    }
}

// Classe principal
public class Main {
    public static void main(String[] args) {
        // Criando uma notificação por email
        NotificacaoFactory emailFactory = new EmailNotificacaoFactory();
        Notificacao email = emailFactory.criarNotificacao();
        email.enviar("Olá! Esta é uma notificação por email.");

        // Criando uma notificação por SMS
        NotificacaoFactory smsFactory = new SmsNotificacaoFactory();
        Notificacao sms = smsFactory.criarNotificacao();
        sms.enviar("Olá! Esta é uma notificação por SMS.");
    }
}
