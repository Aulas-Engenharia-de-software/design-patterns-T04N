public class Main {
public static void main(String[] args) {
    Usuario ana = new Usuario("Ana");
    Usuario bruno = new Usuario("Bruno");
    Usuario carlos = new Usuario("Carlos");

    ChatRoom sala = new ChatRoom();
    sala.entrar(ana);
    sala.entrar(bruno);
    sala.entrar(carlos);

    sala.enviarMensagem("Olá, galera!", ana);
}


}
