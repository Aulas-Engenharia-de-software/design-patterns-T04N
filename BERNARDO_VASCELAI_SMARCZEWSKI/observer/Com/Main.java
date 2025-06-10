package BERNARDO_VASCELAI_SMARCZEWSKI.observer.Com;

public class Main {
    public static void main(String[] args) {
        Chat servidor = new Chat();

        Usuario bernardo = new Usuario("Bernardo");
        Usuario lucas = new Usuario("Lucas");
        Usuario rafael = new Usuario("Rafael");

        servidor.adicionarUsuario(bernardo);
        servidor.adicionarUsuario(lucas);

        servidor.enviarMensagem("Bem-vindos ao chat!");
    }
}