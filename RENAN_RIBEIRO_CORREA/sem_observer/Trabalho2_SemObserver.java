package sem_observer;

public class Trabalho2_SemObserver {
    public static void main(String[] args) {
        enviarMensagem("Renan", "Promoção na loja!");
        enviarMensagem("João", "Promoção na loja!");
    }

    public static void enviarMensagem(String nome, String mensagem) {
        System.out.println(nome + " recebeu: " + mensagem);
    }
}
